'use client';

import { useEffect, useRef } from 'react';
import type { Map as MapLibreMap } from 'maplibre-gl';
import { DESTINATIONS } from '@/data/destinations';
import { REGIONS } from '@/data/regions';
import {
  INTRO_EXPLORE_CAMERA,
  OVERVIEW_CAMERA,
} from '@/data/cameraPresets';
import { DEM_SOURCE_ID } from '@/lib/mapConfig';
import { useExplorerStore } from '@/store/explorerStore';

interface CameraControllerProps {
  map: MapLibreMap | null;
  isMapLoaded: boolean;
  terrainSupported: boolean;
}

export function CameraController({
  map,
  isMapLoaded,
  terrainSupported,
}: CameraControllerProps) {
  const cameraCommand = useExplorerStore((s) => s.cameraCommand);
  const is3DPerspective = useExplorerStore((s) => s.is3DPerspective);
  const isOrbiting = useExplorerStore((s) => s.isOrbiting);
  const isTerrainExploreMode = useExplorerStore((s) => s.isTerrainExploreMode);
  const orbitFrameRef = useRef<number | null>(null);

  // Execute camera commands
  useEffect(() => {
    if (!map || !isMapLoaded || !cameraCommand) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const durationMultiplier = prefersReducedMotion ? 0 : 1;

    switch (cameraCommand.type) {
      case 'overview': {
        map.flyTo({
          center: OVERVIEW_CAMERA.center,
          zoom: OVERVIEW_CAMERA.zoom,
          pitch: is3DPerspective ? OVERVIEW_CAMERA.pitch : 0,
          bearing: OVERVIEW_CAMERA.bearing,
          duration: 2200 * durationMultiplier,
          essential: true,
        });
        break;
      }

      case 'intro': {
        map.flyTo({
          center: INTRO_EXPLORE_CAMERA.center,
          zoom: INTRO_EXPLORE_CAMERA.zoom,
          pitch: is3DPerspective ? INTRO_EXPLORE_CAMERA.pitch : 0,
          bearing: INTRO_EXPLORE_CAMERA.bearing,
          duration: 2400 * durationMultiplier,
          essential: true,
        });
        break;
      }

      case 'region': {
        const region = REGIONS.find(
          (r) => r.id === cameraCommand.payload?.regionId
        );
        if (!region) break;
        map.flyTo({
          center: region.center,
          zoom: region.zoom,
          pitch: is3DPerspective ? region.pitch : 0,
          bearing: region.bearing,
          duration: 2100 * durationMultiplier,
          essential: true,
        });
        break;
      }

      case 'destination': {
        const dest = DESTINATIONS.find(
          (d) => d.id === cameraCommand.payload?.destinationId
        );
        if (!dest) break;

        if (terrainSupported && map.getSource(DEM_SOURCE_ID)) {
          try {
            map.setTerrain({
              source: DEM_SOURCE_ID,
              exaggeration: dest.camera.exaggeration ?? 1.25,
            });
          } catch {}
        }

        map.flyTo({
          center: [dest.location.longitude, dest.location.latitude],
          zoom: dest.camera.zoom,
          pitch: is3DPerspective ? dest.camera.pitch : 0,
          bearing: dest.camera.bearing,
          duration: 2400 * durationMultiplier,
          essential: true,
        });
        break;
      }

      case 'terrain-explore': {
        const dest = DESTINATIONS.find(
          (d) => d.id === cameraCommand.payload?.destinationId
        );
        if (!dest) break;

        if (terrainSupported && map.getSource(DEM_SOURCE_ID)) {
          try {
            map.setTerrain({
              source: DEM_SOURCE_ID,
              exaggeration: 1.32,
            });
          } catch {}
        }

        map.flyTo({
          center: [dest.location.longitude, dest.location.latitude],
          zoom: Math.max(dest.camera.zoom + 0.55, 12.8),
          pitch: 64,
          bearing: dest.camera.bearing + 24,
          duration: 2200 * durationMultiplier,
          essential: true,
        });
        break;
      }

      case 'zoom-in': {
        map.zoomIn({ duration: 400 * durationMultiplier });
        break;
      }

      case 'zoom-out': {
        map.zoomOut({ duration: 400 * durationMultiplier });
        break;
      }

      case 'toggle-pitch': {
        map.easeTo({
          pitch: is3DPerspective ? 56 : 0,
          bearing: is3DPerspective ? map.getBearing() || -12 : 0,
          duration: 900 * durationMultiplier,
        });
        break;
      }
    }
  }, [cameraCommand, map, isMapLoaded, is3DPerspective, terrainSupported]);

  // Optional gentle guided orbit when user enables it inside Terrain Explore Mode
  useEffect(() => {
    if (!map || !isMapLoaded || !isTerrainExploreMode || !isOrbiting) {
      if (orbitFrameRef.current) {
        cancelAnimationFrame(orbitFrameRef.current);
        orbitFrameRef.current = null;
      }
      return;
    }

    let lastTime = performance.now();
    const step = (now: number) => {
      const dt = now - lastTime;
      lastTime = now;
      const nextBearing = (map.getBearing() + dt * 0.0045) % 360;
      map.rotateTo(nextBearing, { duration: 0 });
      orbitFrameRef.current = requestAnimationFrame(step);
    };

    orbitFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (orbitFrameRef.current) {
        cancelAnimationFrame(orbitFrameRef.current);
        orbitFrameRef.current = null;
      }
    };
  }, [map, isMapLoaded, isTerrainExploreMode, isOrbiting]);

  return null;
}
