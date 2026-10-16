'use client';

import { useEffect, useRef, useState } from 'react';
import maplibregl, { type Map as MapLibreMap } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { OVERVIEW_CAMERA } from '@/data/cameraPresets';
import { useDestinations } from '@/hooks/useDestinations';
import { useJourney } from '@/hooks/useJourney';
import { buildJourneyLineGeoJSON } from '@/lib/geoUtils';
import { createMapStyle, DEM_SOURCE_ID } from '@/lib/mapConfig';
import { useExplorerStore } from '@/store/explorerStore';
import { CameraController } from './CameraController';
import { DestinationMarkers } from './DestinationMarkers';
import { MapControls } from './MapControls';

const JOURNEY_SOURCE_ID = 'journey-route-source';
const JOURNEY_LAYER_ID = 'journey-route-layer';
const JOURNEY_GLOW_LAYER_ID = 'journey-route-glow-layer';

export function TerrainMap() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<MapLibreMap | null>(null);

  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [terrainSupported, setTerrainSupported] = useState(true);
  const [currentZoom, setCurrentZoom] = useState(OVERVIEW_CAMERA.zoom);
  const [currentPitch, setCurrentPitch] = useState(OVERVIEW_CAMERA.pitch);

  const mapStyle = useExplorerStore((s) => s.mapStyle);
  const isDarkUI = useExplorerStore((s) => s.isDarkUI);
  const activeTab = useExplorerStore((s) => s.activeTab);
  const isPlayingJourney = useExplorerStore((s) => s.isPlayingJourney);

  const { filteredDestinations } = useDestinations();
  const { journeyDestinations } = useJourney();

  const applyAtmosphericSky = (
    mapInstance: MapLibreMap,
    styleId: string,
    dark: boolean
  ) => {
    try {
      if (styleId === 'satellite' || (styleId === 'natural' && dark)) {
        mapInstance.setSky({
          'sky-color': '#091417',
          'sky-horizon-blend': 0.5,
          'horizon-color': '#182C28',
          'horizon-fog-blend': 0.55,
          'fog-color': '#0F1B19',
          'fog-ground-blend': 0.3,
        });
      } else {
        mapInstance.setSky({
          'sky-color': '#CFE2E1',
          'sky-horizon-blend': 0.45,
          'horizon-color': '#F4F6F1',
          'horizon-fog-blend': 0.55,
          'fog-color': '#F7F8F5',
          'fog-ground-blend': 0.22,
        });
      }
    } catch {
      // Graceful fallback if setSky is unavailable on older GPU drivers
    }
  };

  // Initialize MapLibre GL JS instance once
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    let mapInstance: MapLibreMap | null = null;

    try {
      mapInstance = new maplibregl.Map({
        container: containerRef.current,
        style: createMapStyle(mapStyle, isDarkUI),
        center: OVERVIEW_CAMERA.center,
        zoom: OVERVIEW_CAMERA.zoom,
        pitch: OVERVIEW_CAMERA.pitch,
        bearing: OVERVIEW_CAMERA.bearing,
        maxPitch: 76,
        minZoom: 4.3,
        maxZoom: 16.5,
        attributionControl: false,
      });

      mapInstance.addControl(
        new maplibregl.AttributionControl({ compact: true }),
        'bottom-right'
      );

      mapInstance.on('load', () => {
        setIsMapLoaded(true);
        if (mapInstance) {
          applyAtmosphericSky(mapInstance, mapStyle, isDarkUI);
        }
      });

      mapInstance.on('move', () => {
        if (!mapInstance) return;
        setCurrentZoom(mapInstance.getZoom());
        setCurrentPitch(mapInstance.getPitch());
      });

      mapInstance.on('error', (err) => {
        if (err?.error?.message?.toLowerCase().includes('terrain')) {
          setTerrainSupported(false);
        }
      });

      mapRef.current = mapInstance;
    } catch {
      setTerrainSupported(false);
    }

    return () => {
      mapInstance?.remove();
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update map style when user switches between Natural, Satellite, Terrain, or Dark UI
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !isMapLoaded) return;

    map.setStyle(createMapStyle(mapStyle, isDarkUI));

    const handleStyleData = () => {
      applyAtmosphericSky(map, mapStyle, isDarkUI);
      if (terrainSupported && map.getSource(DEM_SOURCE_ID)) {
        try {
          map.setTerrain({
            source: DEM_SOURCE_ID,
            exaggeration: mapStyle === 'terrain' ? 1.42 : 1.28,
          });
        } catch {}
      }
    };

    map.once('styledata', handleStyleData);
  }, [mapStyle, isDarkUI, isMapLoaded, terrainSupported]);

  // Render subtle geographic connection line for Journey Mode
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !isMapLoaded) return;

    const showJourneyLine =
      (activeTab === 'journey' || isPlayingJourney) &&
      journeyDestinations.length >= 2;

    const geojson = showJourneyLine
      ? buildJourneyLineGeoJSON(journeyDestinations)
      : buildJourneyLineGeoJSON([]);

    const syncJourneyLayer = () => {
      if (!map.getStyle()) return;
      const existingSource = map.getSource(
        JOURNEY_SOURCE_ID
      ) as maplibregl.GeoJSONSource | undefined;

      if (existingSource) {
        existingSource.setData(geojson);
      } else {
        try {
          map.addSource(JOURNEY_SOURCE_ID, {
            type: 'geojson',
            data: geojson,
          });
          map.addLayer({
            id: JOURNEY_GLOW_LAYER_ID,
            type: 'line',
            source: JOURNEY_SOURCE_ID,
            layout: {
              'line-cap': 'round',
              'line-join': 'round',
            },
            paint: {
              'line-color': '#326B5B',
              'line-width': 7,
              'line-opacity': 0.2,
              'line-blur': 3,
            },
          });
          map.addLayer({
            id: JOURNEY_LAYER_ID,
            type: 'line',
            source: JOURNEY_SOURCE_ID,
            layout: {
              'line-cap': 'round',
              'line-join': 'round',
            },
            paint: {
              'line-color': mapStyle === 'satellite' ? '#7BC4AE' : '#326B5B',
              'line-width': 2.5,
              'line-dasharray': [2.2, 2.2],
              'line-opacity': 0.9,
            },
          });
        } catch {}
      }
    };

    if (map.isStyleLoaded()) {
      syncJourneyLayer();
    } else {
      map.once('styledata', syncJourneyLayer);
    }
  }, [
    isMapLoaded,
    activeTab,
    isPlayingJourney,
    journeyDestinations,
    mapStyle,
    isDarkUI,
  ]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#DCE9E8] dark:bg-[#0C1618] select-none">
      {/* Fullscreen WebGL 3D Terrain Canvas */}
      <div
        ref={containerRef}
        className="w-full h-full"
        aria-label="Bản đồ địa hình 3D Việt Nam"
      />

      {/* Subtle Edge Atmospheric Vignette for Depth */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, transparent 68%, rgba(23, 34, 31, 0.08) 100%)',
        }}
      />

      {/* Subtle Loading Overlay before WebGL ready */}
      {!isMapLoaded && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#F7F8F5]/90 dark:bg-[#0F1715]/90 backdrop-blur-sm transition-opacity">
          <div className="w-8 h-8 rounded-full border-2 border-[#326B5B]/25 border-t-[#326B5B] animate-spin mb-3" />
          <p className="text-xs font-medium tracking-wide text-[#78857E]">
            Đang dựng địa hình Vector 3D Việt Nam...
          </p>
        </div>
      )}

      {/* Imperative Camera Controller */}
      <CameraController
        map={mapRef.current}
        isMapLoaded={isMapLoaded}
        terrainSupported={terrainSupported}
      />

      {/* Minimalist Destination Markers */}
      <DestinationMarkers
        map={mapRef.current}
        isMapLoaded={isMapLoaded}
        destinations={filteredDestinations}
        currentZoom={currentZoom}
      />

      {/* Right-Side Floating Camera & Layer Controls */}
      <MapControls currentZoom={currentZoom} currentPitch={currentPitch} />
    </div>
  );
}
