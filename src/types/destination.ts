export type RegionId = 'all' | 'north' | 'central' | 'south';

export type DestinationCategory =
  | 'Tất cả'
  | 'Núi rừng'
  | 'Biển đảo'
  | 'Thiên nhiên'
  | 'Văn hóa';

export type MapStyleId = 'natural' | 'satellite' | 'terrain';

export type NavTab = 'explore' | 'destinations' | 'journey';

export type CameraPreset = {
  zoom: number;
  pitch: number;
  bearing: number;
  exaggeration?: number;
};

export type Destination = {
  id: string;
  name: string;
  slug: string;
  province: string;
  elevation: string;
  region: 'north' | 'central' | 'south';
  location: {
    latitude: number;
    longitude: number;
  };
  category: Exclude<DestinationCategory, 'Tất cả'>;
  description: string;
  longDescription?: string;
  bestSeason: string;
  image: string;
  highlights: string[];
  camera: CameraPreset;
  tags: string[];
};

export type RegionConfig = {
  id: RegionId;
  label: string;
  subtitle: string;
  center: [number, number]; // [lng, lat]
  bounds: [[number, number], [number, number]]; // [[swLng, swLat], [neLng, neLat]]
  zoom: number;
  pitch: number;
  bearing: number;
};
