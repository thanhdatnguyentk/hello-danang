'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type {
  DestinationCategory,
  MapStyleId,
  NavTab,
  RegionId,
} from '@/types/destination';

export type CameraCommand = {
  type:
    | 'overview'
    | 'intro'
    | 'region'
    | 'destination'
    | 'terrain-explore'
    | 'zoom-in'
    | 'zoom-out'
    | 'toggle-pitch';
  timestamp: number;
  payload?: {
    destinationId?: string;
    regionId?: RegionId;
  };
};

interface ExplorerState {
  hasStarted: boolean;
  activeTab: NavTab;
  selectedDestinationId: string | null;
  hoveredDestinationId: string | null;
  selectedRegion: RegionId;
  selectedCategory: DestinationCategory;
  searchQuery: string;
  mapStyle: MapStyleId;
  is3DPerspective: boolean;
  isTerrainExploreMode: boolean;
  isOrbiting: boolean;
  isDarkUI: boolean;

  // Persisted collections
  savedDestinationIds: string[];
  journeyIds: string[];

  // Journey playback state
  isPlayingJourney: boolean;
  isJourneyPaused: boolean;
  currentJourneyIndex: number;

  // Imperative camera command bus
  cameraCommand: CameraCommand | null;

  // Actions
  startExploration: () => void;
  setActiveTab: (tab: NavTab) => void;
  selectDestination: (id: string | null) => void;
  setHoveredDestination: (id: string | null) => void;
  setRegion: (region: RegionId) => void;
  setCategory: (category: DestinationCategory) => void;
  setSearchQuery: (query: string) => void;
  setMapStyle: (style: MapStyleId) => void;
  toggle3DPerspective: () => void;
  enterTerrainExploreMode: (destinationId?: string) => void;
  exitTerrainExploreMode: () => void;
  toggleOrbiting: () => void;
  toggleDarkUI: () => void;

  // Favorites & Journey actions
  toggleSavedDestination: (id: string) => void;
  addToJourney: (id: string) => void;
  removeFromJourney: (id: string) => void;
  moveJourneyItem: (fromIndex: number, toIndex: number) => void;
  clearJourney: () => void;
  loadPresetJourney: (ids: string[]) => void;

  // Journey playback actions
  startJourneyPlayback: () => void;
  pauseJourneyPlayback: () => void;
  resumeJourneyPlayback: () => void;
  nextJourneyStop: () => void;
  prevJourneyStop: () => void;
  stopJourneyPlayback: () => void;

  // Camera trigger
  triggerCamera: (
    type: CameraCommand['type'],
    payload?: CameraCommand['payload']
  ) => void;
}

export const useExplorerStore = create<ExplorerState>()(
  persist(
    (set, get) => ({
      hasStarted: false,
      activeTab: 'explore',
      selectedDestinationId: null,
      hoveredDestinationId: null,
      selectedRegion: 'all',
      selectedCategory: 'Tất cả',
      searchQuery: '',
      mapStyle: 'natural',
      is3DPerspective: true,
      isTerrainExploreMode: false,
      isOrbiting: false,
      isDarkUI: false,

      savedDestinationIds: ['fansipan', 'son-tra-da-nang', 'vinh-ha-long'],
      journeyIds: ['deo-hai-van', 'son-tra-da-nang', 'ba-na-hills', 'hoi-an'],

      isPlayingJourney: false,
      isJourneyPaused: false,
      currentJourneyIndex: 0,

      cameraCommand: null,

      startExploration: () =>
        set({
          hasStarted: true,
          cameraCommand: { type: 'intro', timestamp: Date.now() },
        }),

      setActiveTab: (tab) =>
        set({
          activeTab: tab,
          isTerrainExploreMode: false,
          isOrbiting: false,
        }),

      selectDestination: (id) =>
        set({
          selectedDestinationId: id,
          isTerrainExploreMode: false,
          isOrbiting: false,
          cameraCommand: id
            ? {
                type: 'destination',
                timestamp: Date.now(),
                payload: { destinationId: id },
              }
            : null,
        }),

      setHoveredDestination: (id) => set({ hoveredDestinationId: id }),

      setRegion: (region) =>
        set({
          selectedRegion: region,
          selectedDestinationId: null,
          isTerrainExploreMode: false,
          isOrbiting: false,
          cameraCommand: {
            type: 'region',
            timestamp: Date.now(),
            payload: { regionId: region },
          },
        }),

      setCategory: (category) => set({ selectedCategory: category }),

      setSearchQuery: (query) => set({ searchQuery: query }),

      setMapStyle: (style) => set({ mapStyle: style }),

      toggle3DPerspective: () => {
        const next = !get().is3DPerspective;
        set({
          is3DPerspective: next,
          cameraCommand: { type: 'toggle-pitch', timestamp: Date.now() },
        });
      },

      enterTerrainExploreMode: (destinationId) => {
        const targetId = destinationId || get().selectedDestinationId || 'fansipan';
        set({
          selectedDestinationId: targetId,
          isTerrainExploreMode: true,
          is3DPerspective: true,
          isPlayingJourney: false,
          cameraCommand: {
            type: 'terrain-explore',
            timestamp: Date.now(),
            payload: { destinationId: targetId },
          },
        });
      },

      exitTerrainExploreMode: () => {
        const currentId = get().selectedDestinationId;
        set({
          isTerrainExploreMode: false,
          isOrbiting: false,
          cameraCommand: currentId
            ? {
                type: 'destination',
                timestamp: Date.now(),
                payload: { destinationId: currentId },
              }
            : { type: 'overview', timestamp: Date.now() },
        });
      },

      toggleOrbiting: () => set((s) => ({ isOrbiting: !s.isOrbiting })),

      toggleDarkUI: () => set((s) => ({ isDarkUI: !s.isDarkUI })),

      toggleSavedDestination: (id) =>
        set((s) => ({
          savedDestinationIds: s.savedDestinationIds.includes(id)
            ? s.savedDestinationIds.filter((item) => item !== id)
            : [...s.savedDestinationIds, id],
        })),

      addToJourney: (id) =>
        set((s) => ({
          journeyIds: s.journeyIds.includes(id)
            ? s.journeyIds
            : [...s.journeyIds, id],
        })),

      removeFromJourney: (id) =>
        set((s) => ({
          journeyIds: s.journeyIds.filter((item) => item !== id),
        })),

      moveJourneyItem: (fromIndex, toIndex) =>
        set((s) => {
          const next = [...s.journeyIds];
          if (
            fromIndex < 0 ||
            fromIndex >= next.length ||
            toIndex < 0 ||
            toIndex >= next.length
          ) {
            return s;
          }
          const [moved] = next.splice(fromIndex, 1);
          next.splice(toIndex, 0, moved);
          return { journeyIds: next };
        }),

      clearJourney: () =>
        set({
          journeyIds: [],
          isPlayingJourney: false,
          isJourneyPaused: false,
          currentJourneyIndex: 0,
        }),

      loadPresetJourney: (ids) =>
        set({
          journeyIds: ids,
          isPlayingJourney: false,
          isJourneyPaused: false,
          currentJourneyIndex: 0,
        }),

      startJourneyPlayback: () => {
        const { journeyIds } = get();
        if (journeyIds.length === 0) return;
        const firstId = journeyIds[0];
        set({
          hasStarted: true,
          isPlayingJourney: true,
          isJourneyPaused: false,
          currentJourneyIndex: 0,
          selectedDestinationId: firstId,
          isTerrainExploreMode: false,
          cameraCommand: {
            type: 'destination',
            timestamp: Date.now(),
            payload: { destinationId: firstId },
          },
        });
      },

      pauseJourneyPlayback: () => set({ isJourneyPaused: true }),

      resumeJourneyPlayback: () => set({ isJourneyPaused: false }),

      nextJourneyStop: () => {
        const { journeyIds, currentJourneyIndex } = get();
        if (journeyIds.length === 0) return;
        const nextIndex = (currentJourneyIndex + 1) % journeyIds.length;
        const nextId = journeyIds[nextIndex];
        set({
          currentJourneyIndex: nextIndex,
          selectedDestinationId: nextId,
          cameraCommand: {
            type: 'destination',
            timestamp: Date.now(),
            payload: { destinationId: nextId },
          },
        });
      },

      prevJourneyStop: () => {
        const { journeyIds, currentJourneyIndex } = get();
        if (journeyIds.length === 0) return;
        const prevIndex =
          (currentJourneyIndex - 1 + journeyIds.length) % journeyIds.length;
        const prevId = journeyIds[prevIndex];
        set({
          currentJourneyIndex: prevIndex,
          selectedDestinationId: prevId,
          cameraCommand: {
            type: 'destination',
            timestamp: Date.now(),
            payload: { destinationId: prevId },
          },
        });
      },

      stopJourneyPlayback: () =>
        set({
          isPlayingJourney: false,
          isJourneyPaused: false,
        }),

      triggerCamera: (type, payload) =>
        set({
          cameraCommand: {
            type,
            timestamp: Date.now(),
            payload,
          },
        }),
    }),
    {
      name: 'vietnam-terrain-storage-v1',
      partialize: (state) => ({
        savedDestinationIds: state.savedDestinationIds,
        journeyIds: state.journeyIds,
        mapStyle: state.mapStyle,
        isDarkUI: state.isDarkUI,
      }),
    }
  )
);
