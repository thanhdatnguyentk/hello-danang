'use client';

import { useMemo } from 'react';
import { DESTINATIONS } from '@/data/destinations';
import { normalizeVietnamese } from '@/lib/geoUtils';
import { useExplorerStore } from '@/store/explorerStore';

export function useDestinations() {
  const selectedRegion = useExplorerStore((s) => s.selectedRegion);
  const selectedCategory = useExplorerStore((s) => s.selectedCategory);
  const searchQuery = useExplorerStore((s) => s.searchQuery);
  const selectedDestinationId = useExplorerStore((s) => s.selectedDestinationId);

  const filteredDestinations = useMemo(() => {
    const normalizedQuery = normalizeVietnamese(searchQuery);

    return DESTINATIONS.filter((dest) => {
      const matchesRegion =
        selectedRegion === 'all' || dest.region === selectedRegion;
      const matchesCategory =
        selectedCategory === 'Tất cả' || dest.category === selectedCategory;

      if (!matchesRegion || !matchesCategory) return false;

      if (!normalizedQuery) return true;

      const haystack = normalizeVietnamese(
        `${dest.name} ${dest.province} ${dest.category} ${dest.tags.join(' ')} ${dest.description}`
      );
      return haystack.includes(normalizedQuery);
    });
  }, [selectedRegion, selectedCategory, searchQuery]);

  const searchSuggestions = useMemo(() => {
    const normalizedQuery = normalizeVietnamese(searchQuery);
    if (!normalizedQuery) return [];
    return DESTINATIONS.filter((dest) => {
      const haystack = normalizeVietnamese(
        `${dest.name} ${dest.province} ${dest.tags.join(' ')}`
      );
      return haystack.includes(normalizedQuery);
    }).slice(0, 6);
  }, [searchQuery]);

  const selectedDestination = useMemo(
    () => DESTINATIONS.find((d) => d.id === selectedDestinationId) ?? null,
    [selectedDestinationId]
  );

  return {
    allDestinations: DESTINATIONS,
    filteredDestinations,
    searchSuggestions,
    selectedDestination,
  };
}
