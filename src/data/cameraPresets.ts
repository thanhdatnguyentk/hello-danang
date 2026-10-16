import type { CameraPreset } from '@/types/destination';

export const OVERVIEW_CAMERA: CameraPreset & { center: [number, number] } = {
  center: [106.2, 16.2],
  zoom: 5.45,
  pitch: 26,
  bearing: -4,
  exaggeration: 1.15,
};

export const INTRO_EXPLORE_CAMERA: CameraPreset & { center: [number, number] } = {
  center: [107.6, 16.15],
  zoom: 6.2,
  pitch: 42,
  bearing: -10,
  exaggeration: 1.25,
};

export const TERRAIN_EXPLORE_DEFAULT: CameraPreset = {
  zoom: 12.6,
  pitch: 62,
  bearing: 28,
  exaggeration: 1.3,
};
