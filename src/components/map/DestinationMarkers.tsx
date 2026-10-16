'use client';

import { useEffect, useRef } from 'react';
import maplibregl, { type Map as MapLibreMap } from 'maplibre-gl';
import type { Destination } from '@/types/destination';
import { useExplorerStore } from '@/store/explorerStore';

interface DestinationMarkersProps {
  map: MapLibreMap | null;
  isMapLoaded: boolean;
  destinations: Destination[];
  currentZoom: number;
}

export function DestinationMarkers({
  map,
  isMapLoaded,
  destinations,
  currentZoom,
}: DestinationMarkersProps) {
  const markersRef = useRef<Record<string, maplibregl.Marker>>({});
  const selectedDestinationId = useExplorerStore((s) => s.selectedDestinationId);
  const selectDestination = useExplorerStore((s) => s.selectDestination);
  const setHoveredDestination = useExplorerStore((s) => s.setHoveredDestination);
  const journeyIds = useExplorerStore((s) => s.journeyIds);
  const activeTab = useExplorerStore((s) => s.activeTab);
  const isPlayingJourney = useExplorerStore((s) => s.isPlayingJourney);

  useEffect(() => {
    if (!map || !isMapLoaded) return;

    // Clear previous markers
    Object.values(markersRef.current).forEach((m) => m.remove());
    markersRef.current = {};

    const showLabelsByZoom = currentZoom >= 6.8;

    destinations.forEach((dest) => {
      const isSelected = dest.id === selectedDestinationId;
      const journeyIndex = journeyIds.indexOf(dest.id);
      const isJourneyStop =
        (activeTab === 'journey' || isPlayingJourney) && journeyIndex !== -1;

      const wrapper = document.createElement('button');
      wrapper.type = 'button';
      wrapper.className = 'atlas-marker group focus:outline-none';
      wrapper.setAttribute('aria-label', `${dest.name}, ${dest.province}`);

      // Outer pulse ring when selected
      const ringHtml = isSelected
        ? `<span class="atlas-marker__ring"></span>`
        : '';

      // Marker core: either numbered journey badge or minimal circular dot
      const dotHtml = isJourneyStop
        ? `<span class="atlas-marker__number ${isSelected ? 'is-selected' : ''}">${journeyIndex + 1}</span>`
        : `<span class="atlas-marker__dot ${isSelected ? 'is-selected' : ''}">
             <span class="atlas-marker__core"></span>
           </span>`;

      const labelVisibleClass =
        isSelected || isJourneyStop || showLabelsByZoom
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0';

      wrapper.innerHTML = `
        <div class="relative flex items-center justify-center">
          ${ringHtml}
          ${dotHtml}
          <span class="atlas-marker__label ${labelVisibleClass}">
            ${dest.name}
          </span>
        </div>
      `;

      wrapper.addEventListener('click', (e) => {
        e.stopPropagation();
        selectDestination(dest.id);
      });

      wrapper.addEventListener('mouseenter', () => {
        setHoveredDestination(dest.id);
      });

      wrapper.addEventListener('mouseleave', () => {
        setHoveredDestination(null);
      });

      const marker = new maplibregl.Marker({
        element: wrapper,
        anchor: 'center',
      })
        .setLngLat([dest.location.longitude, dest.location.latitude])
        .addTo(map);

      markersRef.current[dest.id] = marker;
    });

    return () => {
      Object.values(markersRef.current).forEach((m) => m.remove());
      markersRef.current = {};
    };
  }, [
    map,
    isMapLoaded,
    destinations,
    selectedDestinationId,
    journeyIds,
    activeTab,
    isPlayingJourney,
    currentZoom,
    selectDestination,
    setHoveredDestination,
  ]);

  return null;
}
