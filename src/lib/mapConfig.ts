import type { StyleSpecification, LayerSpecification } from 'maplibre-gl';
import type { MapStyleId } from '@/types/destination';

/**
 * Vietnam Terrain 3D — Bespoke Vector & DEM Cartographic Engine
 * - Vector Geometry & Vietnamese Labels: OpenFreeMap (OpenMapTiles schema, zero API key)
 * - 3D Elevation DEM: AWS Registry of Open Data — Mapzen Terrarium DEM
 * - Satellite & Multi-scale Relief: Esri World Imagery & World Hillshade
 */
export const DEM_SOURCE_ID = 'vietnam-dem';
export const HILLSHADE_SOURCE_ID = 'vietnam-hillshade-dem';

export const MAP_STYLES: { id: MapStyleId; label: string; description: string }[] = [
  {
    id: 'natural',
    label: 'Tự nhiên',
    description: 'Bản đồ Vector 3D tối giản với bảng màu sinh thái & đổ bóng núi tự nhiên',
  },
  {
    id: 'terrain',
    label: 'Địa hình',
    description: 'Bản đồ địa chất chuyên sâu làm nổi bật sống núi, cao độ và thung lũng',
  },
  {
    id: 'satellite',
    label: 'Vệ tinh',
    description: 'Ảnh viễn thám độ phân giải cao kết hợp nhãn địa danh Vector 3D sắc nét',
  },
];

const VIETNAM_MARITIME_GEOJSON = {
  type: 'FeatureCollection' as const,
  features: [
    {
      type: 'Feature' as const,
      properties: {
        name: 'BIỂN ĐÔNG',
        subtitle: 'Việt Nam',
        kind: 'sea',
      },
      geometry: {
        type: 'Point' as const,
        coordinates: [111.8, 13.8],
      },
    },
    {
      type: 'Feature' as const,
      properties: {
        name: 'Quần đảo Hoàng Sa',
        subtitle: 'TP. Đà Nẵng, Việt Nam',
        kind: 'archipelago',
      },
      geometry: {
        type: 'Point' as const,
        coordinates: [112.0, 16.5],
      },
    },
    {
      type: 'Feature' as const,
      properties: {
        name: 'Quần đảo Trường Sa',
        subtitle: 'Tỉnh Khánh Hòa, Việt Nam',
        kind: 'archipelago',
      },
      geometry: {
        type: 'Point' as const,
        coordinates: [114.0, 9.8],
      },
    },
    {
      type: 'Feature' as const,
      properties: {
        name: 'Vịnh Bắc Bộ',
        subtitle: '',
        kind: 'bay',
      },
      geometry: {
        type: 'Point' as const,
        coordinates: [107.6, 19.7],
      },
    },
  ],
};

export function createMapStyle(
  styleId: MapStyleId,
  isDarkUI = false
): StyleSpecification {
  const isSatellite = styleId === 'satellite';
  const isTerrain = styleId === 'terrain';
  const isDarkNatural = styleId === 'natural' && isDarkUI;

  // Cartographic Design System Palette (Section 4.1)
  const colors = isDarkNatural
    ? {
        landLowland: '#14201D',
        landForest: '#1A2D27',
        landGrass: '#172722',
        landRock: '#2A3531',
        landSand: '#262922',
        ocean: '#0C1618',
        oceanLine: '#1D3538',
        river: '#162C30',
        hillHighlight: '#5A8F7D',
        hillShadow: '#050B09',
        hillAccent: '#2E594B',
        roadMajor: '#243630',
        roadMinor: '#1C2B26',
        borderCountry: '#529B84',
        borderProvince: '#2B423B',
        textPrimary: '#ECF3F0',
        textSecondary: '#9CB3AA',
        textHalo: 'rgba(15, 23, 21, 0.92)',
        waterText: '#63969B',
      }
    : isTerrain
      ? {
          landLowland: '#EAE7DD',
          landForest: '#B4C6B1',
          landGrass: '#CEDAC7',
          landRock: '#C2C0B4',
          landSand: '#EFE9D8',
          ocean: '#D4E4E3',
          oceanLine: '#ABC6C5',
          river: '#B8D2D1',
          hillHighlight: '#FFFFFF',
          hillShadow: '#1E332B',
          hillAccent: '#486B5C',
          roadMajor: '#F7F6F2',
          roadMinor: '#EFECE6',
          borderCountry: '#2A5C4D',
          borderProvince: '#9BA89E',
          textPrimary: '#17221F',
          textSecondary: '#4F5E57',
          textHalo: 'rgba(247, 248, 245, 0.94)',
          waterText: '#446D70',
        }
      : {
          // Default Natural Cartographic Aesthetic (#F7F8F5 / #DCE9E8 / #E0E8DB / #A8BDA8)
          landLowland: '#E0E8DB',
          landForest: '#A8BDA8',
          landGrass: '#C6D6C1',
          landRock: '#B5B5A8',
          landSand: '#EAE4D3',
          ocean: '#DCE9E8',
          oceanLine: '#B6D0CE',
          river: '#BFDAD8',
          hillHighlight: '#F9FAF7',
          hillShadow: '#233B33',
          hillAccent: '#587A6B',
          roadMajor: '#F2F4EF',
          roadMinor: '#E9EDE6',
          borderCountry: '#326B5B',
          borderProvince: '#A3B2A8',
          textPrimary: '#17221F',
          textSecondary: '#56665E',
          textHalo: 'rgba(247, 248, 245, 0.92)',
          waterText: '#4B7477',
        };

  const labelTextColor = isSatellite ? '#F7F8F5' : colors.textPrimary;
  const labelSecondaryColor = isSatellite ? '#D5E2DC' : colors.textSecondary;
  const labelHaloColor = isSatellite
    ? 'rgba(12, 20, 18, 0.88)'
    : colors.textHalo;

  const layers: LayerSpecification[] = [
    // 1. Base Lowland Canvas
    {
      id: 'background-lowland',
      type: 'background',
      paint: {
        'background-color': isSatellite ? '#0A1417' : colors.landLowland,
      },
    },
  ];

  if (isSatellite) {
    // High-resolution Satellite Drape
    layers.push({
      id: 'esri-satellite-layer',
      type: 'raster',
      source: 'esri-satellite',
      paint: {
        'raster-opacity': 1,
        'raster-contrast': 0.08,
        'raster-saturation': 0.06,
        'raster-fade-duration': 250,
      },
    });
  } else {
    // Low-zoom Natural Earth Shaded Relief under-layer for macro smoothness
    layers.push({
      id: 'ne2-macro-relief',
      type: 'raster',
      source: 'ne2-shaded',
      maxzoom: 7,
      paint: {
        'raster-opacity': [
          'interpolate',
          ['linear'],
          ['zoom'],
          4,
          isDarkNatural ? 0.14 : 0.28,
          6.8,
          0,
        ],
        'raster-saturation': -0.55,
      },
    });

    if (isTerrain) {
      // Multi-scale Esri World Hillshade texture for Terrain mode
      layers.push({
        id: 'esri-multi-hillshade',
        type: 'raster',
        source: 'esri-hillshade',
        paint: {
          'raster-opacity': 0.42,
          'raster-contrast': 0.18,
          'raster-fade-duration': 200,
        },
      });
    }

    // 2. Vector Landcover: Forests, National Parks, Grasslands, Rock, Sand
    layers.push(
      {
        id: 'landcover-wood',
        type: 'fill',
        source: 'openmaptiles',
        'source-layer': 'landcover',
        filter: ['==', ['get', 'class'], 'wood'],
        paint: {
          'fill-color': colors.landForest,
          'fill-opacity': [
            'interpolate',
            ['linear'],
            ['zoom'],
            4,
            0.55,
            9,
            0.42,
            14,
            0.3,
          ],
          'fill-antialias': false,
        },
      },
      {
        id: 'landcover-grass',
        type: 'fill',
        source: 'openmaptiles',
        'source-layer': 'landcover',
        filter: [
          'in',
          ['get', 'class'],
          ['literal', ['grass', 'wetland', 'farmland']],
        ],
        paint: {
          'fill-color': colors.landGrass,
          'fill-opacity': 0.45,
          'fill-antialias': false,
        },
      },
      {
        id: 'national-parks',
        type: 'fill',
        source: 'openmaptiles',
        'source-layer': 'park',
        paint: {
          'fill-color': colors.landForest,
          'fill-opacity': 0.32,
        },
      },
      {
        id: 'landcover-rock',
        type: 'fill',
        source: 'openmaptiles',
        'source-layer': 'landcover',
        filter: ['==', ['get', 'class'], 'rock'],
        paint: {
          'fill-color': colors.landRock,
          'fill-opacity': 0.55,
        },
      },
      {
        id: 'landcover-sand',
        type: 'fill',
        source: 'openmaptiles',
        'source-layer': 'landcover',
        filter: ['==', ['get', 'class'], 'sand'],
        paint: {
          'fill-color': colors.landSand,
          'fill-opacity': 0.65,
        },
      }
    );
  }

  // 3. Real-Time 3D DEM Hillshading (Sculptural Ridges, Valleys & Peaks)
  layers.push({
    id: 'realtime-3d-hillshade',
    type: 'hillshade',
    source: HILLSHADE_SOURCE_ID,
    paint: {
      'hillshade-exaggeration': isTerrain ? 0.72 : isSatellite ? 0.32 : 0.54,
      'hillshade-shadow-color': isSatellite ? '#071014' : colors.hillShadow,
      'hillshade-highlight-color': isSatellite
        ? '#FFFDF7'
        : colors.hillHighlight,
      'hillshade-accent-color': isSatellite ? '#345248' : colors.hillAccent,
      'hillshade-illumination-direction': 315,
      'hillshade-illumination-anchor': 'viewport',
    },
  });

  // 4. Ocean, Lakes, Lagoons & Rivers (Vector Water)
  if (!isSatellite) {
    layers.push(
      {
        id: 'water-fill',
        type: 'fill',
        source: 'openmaptiles',
        'source-layer': 'water',
        filter: ['!=', ['get', 'brunnel'], 'tunnel'],
        paint: {
          'fill-color': colors.ocean,
          'fill-antialias': true,
        },
      },
      {
        id: 'water-shoreline',
        type: 'line',
        source: 'openmaptiles',
        'source-layer': 'water',
        filter: ['!=', ['get', 'brunnel'], 'tunnel'],
        paint: {
          'line-color': colors.oceanLine,
          'line-width': [
            'interpolate',
            ['linear'],
            ['zoom'],
            4,
            0.6,
            10,
            1.2,
            14,
            1.6,
          ],
          'line-opacity': 0.85,
        },
      }
    );
  } else {
    // Subtle vector shoreline highlight on satellite mode
    layers.push({
      id: 'satellite-shoreline-glow',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'water',
      minzoom: 6,
      paint: {
        'line-color': 'rgba(220, 233, 232, 0.35)',
        'line-width': 0.8,
      },
    });
  }

  // Vector Rivers & Streams
  layers.push({
    id: 'waterway-river',
    type: 'line',
    source: 'openmaptiles',
    'source-layer': 'waterway',
    minzoom: 6,
    layout: {
      'line-cap': 'round',
      'line-join': 'round',
    },
    paint: {
      'line-color': isSatellite ? 'rgba(155, 208, 214, 0.55)' : colors.river,
      'line-width': [
        'interpolate',
        ['exponential', 1.4],
        ['zoom'],
        6,
        0.6,
        10,
        1.5,
        14,
        3.2,
      ],
    },
  });

  // 5. Minimalist Road Network (Only fades in when zooming in so country view stays pure)
  layers.push(
    {
      id: 'road-secondary-tertiary',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      minzoom: 10.5,
      filter: [
        'in',
        ['get', 'class'],
        ['literal', ['secondary', 'tertiary', 'street']],
      ],
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
      },
      paint: {
        'line-color': isSatellite
          ? 'rgba(255, 255, 255, 0.28)'
          : colors.roadMinor,
        'line-width': [
          'interpolate',
          ['exponential', 1.5],
          ['zoom'],
          10.5,
          0.5,
          14,
          2.2,
          16,
          5,
        ],
        'line-opacity': 0.75,
      },
    },
    {
      id: 'road-motorway-primary',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      minzoom: 7,
      filter: [
        'in',
        ['get', 'class'],
        ['literal', ['motorway', 'trunk', 'primary']],
      ],
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
      },
      paint: {
        'line-color': isSatellite
          ? 'rgba(255, 246, 224, 0.48)'
          : colors.roadMajor,
        'line-width': [
          'interpolate',
          ['exponential', 1.4],
          ['zoom'],
          7,
          0.5,
          10,
          1.2,
          14,
          3.4,
          16,
          7,
        ],
        'line-opacity': [
          'interpolate',
          ['linear'],
          ['zoom'],
          7,
          0.35,
          10,
          0.8,
        ],
      },
    }
  );

  // 6. Subtle 3D Extruded Buildings at City/Town Zoom (z >= 13.5)
  if (!isSatellite) {
    layers.push({
      id: 'buildings-3d',
      type: 'fill-extrusion',
      source: 'openmaptiles',
      'source-layer': 'building',
      minzoom: 13.5,
      paint: {
        'fill-extrusion-color': isDarkNatural ? '#22332E' : '#E6EAE3',
        'fill-extrusion-height': [
          'coalesce',
          ['get', 'render_height'],
          12,
        ],
        'fill-extrusion-base': [
          'coalesce',
          ['get', 'render_min_height'],
          0,
        ],
        'fill-extrusion-opacity': 0.72,
      },
    });
  }

  // 7. Geographic Boundaries (Provincial & International)
  layers.push(
    {
      id: 'boundary-province',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'boundary',
      minzoom: 6.5,
      filter: [
        'all',
        ['==', ['get', 'admin_level'], 4],
        ['!=', ['get', 'maritime'], 1],
      ],
      paint: {
        'line-color': isSatellite
          ? 'rgba(255, 255, 255, 0.25)'
          : colors.borderProvince,
        'line-width': 0.8,
        'line-dasharray': [3, 2],
        'line-opacity': 0.55,
      },
    },
    {
      id: 'boundary-country-glow',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'boundary',
      filter: [
        'all',
        ['==', ['get', 'admin_level'], 2],
        ['!=', ['get', 'maritime'], 1],
      ],
      paint: {
        'line-color': isSatellite
          ? 'rgba(123, 196, 174, 0.35)'
          : 'rgba(50, 107, 91, 0.18)',
        'line-width': [
          'interpolate',
          ['linear'],
          ['zoom'],
          4,
          3.5,
          8,
          6,
        ],
        'line-blur': 2,
      },
    },
    {
      id: 'boundary-country',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'boundary',
      filter: [
        'all',
        ['==', ['get', 'admin_level'], 2],
        ['!=', ['get', 'maritime'], 1],
      ],
      paint: {
        'line-color': isSatellite ? '#8BD4BE' : colors.borderCountry,
        'line-width': [
          'interpolate',
          ['linear'],
          ['zoom'],
          4,
          1.2,
          8,
          2.0,
        ],
        'line-opacity': 0.85,
      },
    }
  );

  // 8. Upright 3D-Billboarded Vietnamese Vector Typography
  layers.push(
    // Sea & Archipelago Sovereignty Labels (Biển Đông, Hoàng Sa, Trường Sa)
    {
      id: 'vietnam-maritime-labels',
      type: 'symbol',
      source: 'vietnam-maritime',
      layout: {
        'text-field': [
          'case',
          ['==', ['get', 'kind'], 'archipelago'],
          ['concat', ['get', 'name'], '\n', ['get', 'subtitle']],
          ['get', 'name'],
        ],
        'text-font': ['Noto Sans Bold'],
        'text-size': [
          'case',
          ['==', ['get', 'kind'], 'sea'],
          ['interpolate', ['linear'], ['zoom'], 4, 12, 8, 16],
          ['interpolate', ['linear'], ['zoom'], 4, 10, 8, 12.5],
        ],
        'text-letter-spacing': [
          'case',
          ['==', ['get', 'kind'], 'sea'],
          0.28,
          0.08,
        ],
        'text-max-width': 12,
        'text-allow-overlap': false,
      },
      paint: {
        'text-color': isSatellite ? '#B4E4E8' : colors.waterText,
        'text-halo-color': labelHaloColor,
        'text-halo-width': 1.6,
        'text-opacity': 0.9,
      },
    },
    // Mountain Peaks with Elevation (e.g., Fansipan 3143 m)
    {
      id: 'mountain-peak-labels',
      type: 'symbol',
      source: 'openmaptiles',
      'source-layer': 'mountain_peak',
      minzoom: 7,
      filter: ['has', 'name'],
      layout: {
        'text-field': [
          'case',
          ['has', 'ele'],
          [
            'concat',
            '▲ ',
            ['coalesce', ['get', 'name:vi'], ['get', 'name']],
            ' (',
            ['to-string', ['get', 'ele']],
            'm)',
          ],
          ['concat', '▲ ', ['coalesce', ['get', 'name:vi'], ['get', 'name']]],
        ],
        'text-font': ['Noto Sans Bold'],
        'text-size': [
          'interpolate',
          ['linear'],
          ['zoom'],
          7,
          10,
          12,
          12.5,
        ],
        'text-max-width': 10,
        'text-offset': [0, 0.6],
      },
      paint: {
        'text-color': isSatellite ? '#DCEEE7' : '#2D5E4E',
        'text-halo-color': labelHaloColor,
        'text-halo-width': 1.8,
      },
    },
    // Towns, Districts & Islands
    {
      id: 'place-town-village',
      type: 'symbol',
      source: 'openmaptiles',
      'source-layer': 'place',
      minzoom: 8,
      filter: [
        'in',
        ['get', 'class'],
        ['literal', ['town', 'village', 'island']],
      ],
      layout: {
        'text-field': ['coalesce', ['get', 'name:vi'], ['get', 'name']],
        'text-font': ['Noto Sans Regular'],
        'text-size': [
          'interpolate',
          ['linear'],
          ['zoom'],
          8,
          10.5,
          13,
          13,
        ],
        'text-max-width': 8,
      },
      paint: {
        'text-color': labelSecondaryColor,
        'text-halo-color': labelHaloColor,
        'text-halo-width': 1.5,
      },
    },
    // Major Cities & Provincial Capitals
    {
      id: 'place-cities',
      type: 'symbol',
      source: 'openmaptiles',
      'source-layer': 'place',
      minzoom: 5,
      filter: ['in', ['get', 'class'], ['literal', ['city', 'state']]],
      layout: {
        'text-field': ['coalesce', ['get', 'name:vi'], ['get', 'name']],
        'text-font': ['Noto Sans Bold'],
        'text-size': [
          'interpolate',
          ['linear'],
          ['zoom'],
          5,
          11,
          9,
          13.5,
          13,
          16,
        ],
        'text-letter-spacing': 0.02,
        'text-max-width': 9,
      },
      paint: {
        'text-color': labelTextColor,
        'text-halo-color': labelHaloColor,
        'text-halo-width': 1.8,
      },
    },
    // Country Labels (Việt Nam prominent, neighboring countries subtle)
    {
      id: 'place-country',
      type: 'symbol',
      source: 'openmaptiles',
      'source-layer': 'place',
      maxzoom: 8.5,
      filter: ['==', ['get', 'class'], 'country'],
      layout: {
        'text-field': ['coalesce', ['get', 'name:vi'], ['get', 'name']],
        'text-font': ['Noto Sans Bold'],
        'text-transform': 'uppercase',
        'text-letter-spacing': 0.22,
        'text-size': [
          'interpolate',
          ['linear'],
          ['zoom'],
          4,
          12,
          7,
          15,
        ],
      },
      paint: {
        'text-color': labelTextColor,
        'text-halo-color': labelHaloColor,
        'text-halo-width': 2.2,
        'text-opacity': [
          'case',
          ['==', ['get', 'iso_a2'], 'VN'],
          0.95,
          0.42,
        ],
      },
    }
  );

  return {
    version: 8,
    name: `Vietnam Terrain 3D — ${styleId}`,
    glyphs: 'https://tiles.openfreemap.org/fonts/{fontstack}/{range}.pbf',
    sources: {
      openmaptiles: {
        type: 'vector',
        url: 'https://tiles.openfreemap.org/planet',
        attribution: '© OpenFreeMap © OpenMapTiles © OpenStreetMap contributors',
      },
      'ne2-shaded': {
        type: 'raster',
        tiles: [
          'https://tiles.openfreemap.org/natural_earth/ne2sr/{z}/{x}/{y}.png',
        ],
        tileSize: 256,
        maxzoom: 6,
      },
      'esri-satellite': {
        type: 'raster',
        tiles: [
          'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        ],
        tileSize: 256,
        maxzoom: 18,
        attribution: '© Esri, Maxar, Earthstar Geographics',
      },
      'esri-hillshade': {
        type: 'raster',
        tiles: [
          'https://server.arcgisonline.com/ArcGIS/rest/services/Elevation/World_Hillshade/MapServer/tile/{z}/{y}/{x}',
        ],
        tileSize: 256,
        maxzoom: 16,
      },
      'vietnam-maritime': {
        type: 'geojson',
        data: VIETNAM_MARITIME_GEOJSON,
      },
      [DEM_SOURCE_ID]: {
        type: 'raster-dem',
        tiles: [
          'https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png',
        ],
        tileSize: 256,
        encoding: 'terrarium',
        maxzoom: 15,
        attribution: '3D Terrain DEM © Mapzen, AWS Open Data',
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
      exaggeration: isTerrain ? 1.42 : 1.28,
    },
    layers,
  };
}
