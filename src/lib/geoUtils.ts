import type { Destination } from '@/types/destination';

/**
 * Normalize Vietnamese text for accent-insensitive search
 */
export function normalizeVietnamese(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Build a GeoJSON FeatureCollection for destinations
 */
export function buildDestinationsGeoJSON(destinations: Destination[], selectedId: string | null) {
  return {
    type: 'FeatureCollection' as const,
    features: destinations.map((d) => ({
      type: 'Feature' as const,
      id: d.id,
      properties: {
        id: d.id,
        name: d.name,
        province: d.province,
        elevation: d.elevation,
        category: d.category,
        region: d.region,
        selected: d.id === selectedId ? 1 : 0,
      },
      geometry: {
        type: 'Point' as const,
        coordinates: [d.location.longitude, d.location.latitude],
      },
    })),
  };
}

/**
 * Build a curved great-circle-like GeoJSON LineString connecting journey stops
 */
export function buildJourneyLineGeoJSON(stops: Destination[]) {
  if (stops.length < 2) {
    return {
      type: 'FeatureCollection' as const,
      features: [],
    };
  }

  const coordinates: [number, number][] = [];

  for (let i = 0; i < stops.length - 1; i++) {
    const start = [stops[i].location.longitude, stops[i].location.latitude];
    const end = [stops[i + 1].location.longitude, stops[i + 1].location.latitude];
    const steps = 24;

    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const lng = start[0] + (end[0] - start[0]) * t;
      const lat = start[1] + (end[1] - start[1]) * t;
      // Subtle arc offset for visual elegance
      const arcOffset = Math.sin(t * Math.PI) * 0.14;
      coordinates.push([lng + arcOffset * 0.5, lat + arcOffset * 0.25]);
    }
  }

  return {
    type: 'FeatureCollection' as const,
    features: [
      {
        type: 'Feature' as const,
        properties: {},
        geometry: {
          type: 'LineString' as const,
          coordinates,
        },
      },
    ],
  };
}

/**
 * Format decimal coordinates into clean geographic degrees
 */
export function formatCoordinates(lat: number, lng: number): string {
  const latDir = lat >= 0 ? 'B' : 'N';
  const lngDir = lng >= 0 ? 'Đ' : 'T';
  return `${Math.abs(lat).toFixed(4)}°${latDir}, ${Math.abs(lng).toFixed(4)}°${lngDir}`;
}
