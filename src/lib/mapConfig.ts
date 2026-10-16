import type { StyleSpecification } from 'maplibre-gl';
import type { MapStyleId } from '@/types/destination';

/**
 * Verified zero-key geospatial tile & DEM sources (no API key watermark):
 * 1. 3D Elevation DEM: AWS Registry of Open Data — Mapzen Terrarium DEM
 *    Endpoint: https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png
 *    Encoding: "terrarium" (R * 256 + G + B / 256 - 32768 meters)
 * 2. Natural Basemap: Esri World Topographic Map (soft cartographic palette + Vietnamese labels)
 * 3. Satellite Imagery: Esri World Imagery + Esri World Boundaries and Places labels
 * 4. Terrain Relief: Esri World Hillshade + Physical/Topographic hybrid with enhanced 3D shading
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
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
    ],
    satellite: [
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    ],
    terrain: [
      'https://server.arcgisonline.com/ArcGIS/rest/services/Elevation/World_Hillshade/MapServer/tile/{z}/{y}/{x}',
    ],
  };

  const labelTiles = [
    'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',
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
          '© Esri, USGS, NOAA, OpenStreetMap contributors',
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
        tiles: [
          'https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png',
        ],
        tileSize: 256,
        encoding: 'terrarium',
        maxzoom: 15,
        attribution: 'Terrain DEM © Mapzen, AWS Open Data, USGS, GMTED',
      },
      [HILLSHADE_SOURCE_ID]: {
        type: 'raster-dem',
        tiles: [
          'https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png',
        ],
        tileSize: 256,
        encoding: 'terrarium',
        maxzoom: 15,
      },
    },
    terrain: {
      source: DEM_SOURCE_ID,
      exaggeration: styleId === 'terrain' ? 1.36 : 1.24,
    },
    layers: [
      {
        id: 'background-layer',
        type: 'background',
        paint: {
          'background-color':
            styleId === 'satellite' ? '#0d1b24' : '#DCE9E8',
        },
      },
      {
        id: 'base-raster-layer',
        type: 'raster',
        source: 'base-tiles',
        paint: {
          'raster-opacity': 1,
          'raster-saturation':
            styleId === 'natural'
              ? -0.14
              : styleId === 'terrain'
                ? -0.08
                : 0.05,
          'raster-contrast':
            styleId === 'satellite'
              ? 0.08
              : styleId === 'terrain'
                ? 0.12
                : 0.02,
          'raster-fade-duration': 250,
        },
      },
      {
        id: 'natural-hillshade-layer',
        type: 'hillshade',
        source: HILLSHADE_SOURCE_ID,
        paint: {
          'hillshade-exaggeration':
            styleId === 'terrain'
              ? 0.65
              : styleId === 'natural'
                ? 0.45
                : 0.26,
          'hillshade-shadow-color':
            styleId === 'satellite' ? '#091318' : '#243A32',
          'hillshade-highlight-color': '#F7F8F5',
          'hillshade-accent-color': '#4F7163',
          'hillshade-illumination-direction': 315,
          'hillshade-illumination-anchor': 'viewport',
        },
      },
      ...(styleId !== 'natural'
        ? [
            {
              id: 'place-labels-layer',
              type: 'raster' as const,
              source: 'label-tiles',
              paint: {
                'raster-opacity': styleId === 'satellite' ? 0.9 : 0.85,
              },
            },
          ]
        : []),
    ],
  };
}
