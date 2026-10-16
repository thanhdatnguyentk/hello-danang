import type { StyleSpecification } from 'maplibre-gl';
import type { MapStyleId } from '@/types/destination';

/**
 * Legitimate, publicly accessible geospatial tile & DEM sources:
 * 1. Elevation DEM: AWS Registry of Open Data — Mapzen Terrarium DEM
 *    Endpoint: https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png
 *    Encoding: "terrarium" (R * 256 + G + B / 256 - 32768 meters)
 * 2. Natural Basemap: CARTO Voyager / Positron raster tiles
 * 3. Satellite Imagery: Esri World Imagery tiles
 * 4. Topographic Relief: Esri World Topographic Map tiles
 */
export const DEM_SOURCE_ID = 'vietnam-dem';
export const HILLSHADE_SOURCE_ID = 'vietnam-hillshade-dem';

export const MAP_STYLES: { id: MapStyleId; label: string; description: string }[] = [
  {
    id: 'natural',
    label: 'Tự nhiên',
    description: 'Bản đồ địa hình thanh lịch với đổ bóng sườn núi tự nhiên',
  },
  {
    id: 'satellite',
    label: 'Vệ tinh',
    description: 'Ảnh vệ tinh độ phân giải cao phủ trên địa hình 3D thực tế',
  },
  {
    id: 'terrain',
    label: 'Địa hình',
    description: 'Bản đồ cao độ chuyên sâu làm nổi bật dãy núi và thung lũng',
  },
];

export function createMapStyle(styleId: MapStyleId): StyleSpecification {
  const baseTiles: Record<MapStyleId, string[]> = {
    natural: [
      'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png',
      'https://b.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png',
    ],
    satellite: [
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    ],
    terrain: [
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
    ],
  };

  const labelTiles = [
    'https://a.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}@2x.png',
    'https://b.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}@2x.png',
  ];

  return {
    version: 8,
    name: `Vietnam Terrain — ${styleId}`,
    sources: {
      'base-tiles': {
        type: 'raster',
        tiles: baseTiles[styleId],
        tileSize: 256,
        attribution:
          styleId === 'natural'
            ? '© OpenStreetMap contributors, © CARTO'
            : '© Esri, Maxar, Earthstar Geographics, OpenStreetMap',
        maxzoom: 18,
      },
      'label-tiles': {
        type: 'raster',
        tiles: labelTiles,
        tileSize: 256,
        maxzoom: 18,
      },
      [DEM_SOURCE_ID]: {
        type: 'raster-dem',
        tiles: ['https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png'],
        tileSize: 256,
        encoding: 'terrarium',
        maxzoom: 15,
        attribution: 'Terrain DEM © Mapzen, AWS Open Data, USGS, GMTED',
      },
      [HILLSHADE_SOURCE_ID]: {
        type: 'raster-dem',
        tiles: ['https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png'],
        tileSize: 256,
        encoding: 'terrarium',
        maxzoom: 15,
      },
    },
    terrain: {
      source: DEM_SOURCE_ID,
      exaggeration: styleId === 'terrain' ? 1.32 : 1.22,
    },
    layers: [
      {
        id: 'background-layer',
        type: 'background',
        paint: {
          'background-color': styleId === 'satellite' ? '#0d1b24' : '#DCE9E8',
        },
      },
      {
        id: 'base-raster-layer',
        type: 'raster',
        source: 'base-tiles',
        paint: {
          'raster-opacity': 1,
          'raster-saturation': styleId === 'natural' ? -0.18 : styleId === 'terrain' ? -0.12 : 0.04,
          'raster-contrast': styleId === 'satellite' ? 0.08 : 0.03,
          'raster-fade-duration': 250,
        },
      },
      {
        id: 'natural-hillshade-layer',
        type: 'hillshade',
        source: HILLSHADE_SOURCE_ID,
        paint: {
          'hillshade-exaggeration': styleId === 'terrain' ? 0.55 : styleId === 'natural' ? 0.42 : 0.25,
          'hillshade-shadow-color': styleId === 'satellite' ? '#091318' : '#253932',
          'hillshade-highlight-color': '#F7F8F5',
          'hillshade-accent-color': '#5A786A',
          'hillshade-illumination-direction': 315,
          'hillshade-illumination-anchor': 'viewport',
        },
      },
      ...(styleId !== 'terrain'
        ? [
            {
              id: 'place-labels-layer',
              type: 'raster' as const,
              source: 'label-tiles',
              paint: {
                'raster-opacity': styleId === 'satellite' ? 0.85 : 0.9,
              },
            },
          ]
        : []),
    ],
  };
}
