'use client';

import { useCallback } from 'react';
import { useExplorerStore } from '@/store/explorerStore';
import type { RegionId } from '@/types/destination';

export function useMapCamera() {
  const triggerCamera = useExplorerStore((s) => s.triggerCamera);
  const selectDestination = useExplorerStore((s) => s.selectDestination);
  const setRegion = useExplorerStore((s) => s.setRegion);
  const toggle3DPerspective = useExplorerStore((s) => s.toggle3DPerspective);

  const flyToVietnamOverview = useCallback(() => {
    selectDestination(null);
    setRegion('all');
    triggerCamera('overview');
  }, [selectDestination, setRegion, triggerCamera]);

  const flyToDestination = useCallback(
    (destinationId: string) => {
      selectDestination(destinationId);
    },
    [selectDestination]
  );

  const flyToRegion = useCallback(
    (regionId: RegionId) => {
      setRegion(regionId);
    },
    [setRegion]
  );

  const zoomIn = useCallback(() => {
    triggerCamera('zoom-in');
  }, [triggerCamera]);

  const zoomOut = useCallback(() => {
    triggerCamera('zoom-out');
  }, [triggerCamera]);

  return {
    flyToVietnamOverview,
    flyToDestination,
    flyToRegion,
    zoomIn,
    zoomOut,
    toggle3DPerspective,
  };
}
