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

// Iconic anchor destinations visible with labels even at country overview scale
const ANCHOR_DESTINATION_IDS = new Set([
  'fansipan',
  'vinh-ha-long',
  'ma-pi-leng',
  'phong-nha-ke-bang',
  'son-tra-da-nang',
  'da-lat',
  'phu-quoc',
  'con-dao',
]);

export function DestinationMarkers({
  map,
  isMapLoaded,
  destinations,
  currentZoom,
}: DestinationMarkersProps) {
  const markersRef = useRef<Record<string, maplibregl.Marker>>({});
  const selectedDestinationId = useExplorerStore((s) => s.selectedDestinationId);
  const hoveredDestinationId = useExplorerStore((s) => s.hoveredDestinationId);
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

    const showAllLabelsByZoom = currentZoom >= 6.4;

    destinations.forEach((dest) => {
      const isSelected = dest.id === selectedDestinationId;
      const isAnchor = ANCHOR_DESTINATION_IDS.has(dest.id);
      const journeyIndex = journeyIds.indexOf(dest.id);
      const isJourneyStop =
        (activeTab === 'journey' || isPlayingJourney) && journeyIndex !== -1;

      const wrapper = document.createElement('button');
      wrapper.type = 'button';
      wrapper.className = `atlas-marker group focus:outline-none ${
        isSelected ? 'is-active' : ''
      }`;
      wrapper.setAttribute('aria-label', `${dest.name}, ${dest.province}`);

      // Outer pulse ring when selected
      const ringHtml = isSelected
        ? `<span class="atlas-marker__ring"></span>`
        : '';

      // Marker core: either numbered journey badge or minimal circular dot
      const dotHtml = isJourneyStop
        ? `<span class="atlas-marker__number ${
            isSelected ? 'is-selected' : ''
          }">${journeyIndex + 1}</span>`
        : `<span class="atlas-marker__dot ${isSelected ? 'is-selected' : ''}">
             <span class="atlas-marker__core"></span>
           </span>`;

      const shouldShowLabel =
        isSelected || isJourneyStop || showAllLabelsByZoom || isAnchor;

      const labelVisibleClass = shouldShowLabel
        ? 'opacity-100'
        : 'opacity-0 group-hover:opacity-100';

      wrapper.innerHTML = `
        <div class="relative flex items-center justify-center">
          ${ringHtml}
          ${dotHtml}
          <span class="atlas-marker__label ${
            isSelected ? 'is-selected' : ''
          } ${labelVisibleClass}">
            <span>${dest.name}</span>
            <span class="atlas-marker__elev">${dest.elevation}</span>
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

  const hoveredDest =
    hoveredDestinationId && hoveredDestinationId !== selectedDestinationId
      ? destinations.find((d) => d.id === hoveredDestinationId)
      : null;

  if (!hoveredDest) return null;

  return (
    <div className="hidden md:flex fixed bottom-16 right-6 z-20 pointer-events-none items-center gap-3 p-2.5 pr-4 rounded-2xl bg-terrain-surface/95 dark:bg-[#17221F]/95 backdrop-blur-md border border-terrain-border dark:border-[#253530] shadow-atlas-lg transition-all">
      <img
        src={hoveredDest.image}
        alt={hoveredDest.name}
        className="w-12 h-12 rounded-xl object-cover shrink-0 bg-terrain-bg"
      />
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-terrain-text dark:text-white">
            {hoveredDest.name}
          </span>
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-terrain-accent/10 text-terrain-accent dark:text-[#7BC4AE]">
            {hoveredDest.elevation}
          </span>
        </div>
        <div className="text-[11px] text-terrain-muted">
          {hoveredDest.province} · {hoveredDest.category}
        </div>
      </div>
    </div>
  );
}
