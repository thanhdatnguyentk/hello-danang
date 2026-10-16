'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Route,
  Play,
  Trash2,
  ArrowUp,
  ArrowDown,
  X,
  Plus,
  Sparkles,
  Mountain,
} from 'lucide-react';
import { useExplorerStore } from '@/store/explorerStore';
import { useJourney } from '@/hooks/useJourney';
import { DESTINATIONS } from '@/data/destinations';

export function JourneyPlanner() {
  const activeTab = useExplorerStore((s) => s.activeTab);
  const setActiveTab = useExplorerStore((s) => s.setActiveTab);
  const isTerrainExploreMode = useExplorerStore((s) => s.isTerrainExploreMode);
  const isPlayingJourney = useExplorerStore((s) => s.isPlayingJourney);
  const selectDestination = useExplorerStore((s) => s.selectDestination);
  const addToJourney = useExplorerStore((s) => s.addToJourney);
  const removeFromJourney = useExplorerStore((s) => s.removeFromJourney);
  const moveJourneyItem = useExplorerStore((s) => s.moveJourneyItem);
  const clearJourney = useExplorerStore((s) => s.clearJourney);
  const loadPresetJourney = useExplorerStore((s) => s.loadPresetJourney);
  const startJourneyPlayback = useExplorerStore((s) => s.startJourneyPlayback);

  const { journeyDestinations, presetJourneys } = useJourney();

  const isOpen =
    activeTab === 'journey' && !isTerrainExploreMode && !isPlayingJourney;

  const availableToAdd = DESTINATIONS.filter(
    (d) => !journeyDestinations.some((j) => j.id === d.id)
  ).slice(0, 6);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 24 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="fixed z-30 top-20 right-4 left-4 md:left-auto md:right-16 md:w-[390px] max-h-[calc(100vh-120px)] flex flex-col rounded-2xl bg-terrain-surface/95 dark:bg-[#17221F]/95 backdrop-blur-md border border-terrain-border dark:border-[#253530] shadow-atlas-lg overflow-hidden pointer-events-auto"
        >
          {/* Header */}
          <div className="p-4 border-b border-terrain-border dark:border-[#253530] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-terrain-accent/10 text-terrain-accent dark:text-[#7BC4AE] flex items-center justify-center">
                <Route className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-terrain-text dark:text-white">
                  Hành trình khám phá 3D
                </h2>
                <p className="text-[11px] text-terrain-muted">
                  {journeyDestinations.length} điểm dừng được kết nối trên bản đồ
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setActiveTab('explore')}
              aria-label="Đóng bảng hành trình"
              className="p-1.5 rounded-lg text-terrain-muted hover:text-terrain-text dark:hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Scrollable Body */}
          <div className="p-4 overflow-y-auto space-y-4 flex-1">
            {/* Active Stops List */}
            {journeyDestinations.length > 0 ? (
              <div className="space-y-2">
                {journeyDestinations.map((dest, idx) => (
                  <div
                    key={dest.id}
                    className="group flex items-center justify-between gap-2 p-2.5 rounded-xl bg-terrain-bg dark:bg-[#1E2C28] border border-terrain-border/80 dark:border-[#2A3C36] hover:border-terrain-accent/50 transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => selectDestination(dest.id)}
                      className="flex items-center gap-2.5 text-left min-w-0 flex-1"
                    >
                      <span className="w-6 h-6 rounded-full bg-terrain-accent text-white text-xs font-semibold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <div className="min-w-0">
                        <div className="text-xs font-semibold text-terrain-text dark:text-white truncate">
                          {dest.name}
                        </div>
                        <div className="text-[11px] text-terrain-muted flex items-center gap-1.5">
                          <span>{dest.province}</span>
                          <span>·</span>
                          <span className="font-mono text-terrain-accent dark:text-[#7BC4AE]">
                            {dest.elevation}
                          </span>
                        </div>
                      </div>
                    </button>

                    {/* Reorder & Remove Actions */}
                    <div className="flex items-center gap-0.5 shrink-0">
                      <button
                        type="button"
                        disabled={idx === 0}
                        onClick={() => moveJourneyItem(idx, idx - 1)}
                        aria-label="Di chuyển lên"
                        className="p-1 rounded-md text-terrain-muted hover:text-terrain-text dark:hover:text-white disabled:opacity-30"
                      >
                        <ArrowUp className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        disabled={idx === journeyDestinations.length - 1}
                        onClick={() => moveJourneyItem(idx, idx + 1)}
                        aria-label="Di chuyển xuống"
                        className="p-1 rounded-md text-terrain-muted hover:text-terrain-text dark:hover:text-white disabled:opacity-30"
                      >
                        <ArrowDown className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => removeFromJourney(dest.id)}
                        aria-label="Xóa khỏi hành trình"
                        className="p-1 rounded-md text-terrain-muted hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-6 px-4 text-center rounded-xl bg-terrain-bg dark:bg-[#1E2C28] border border-dashed border-terrain-border dark:border-[#2A3C36]">
                <Mountain className="w-6 h-6 text-terrain-muted mx-auto mb-2 opacity-70" />
                <p className="text-xs font-medium text-terrain-text dark:text-white">
                  Chưa có địa điểm nào trong hành trình
                </p>
                <p className="text-[11px] text-terrain-muted mt-1">
                  Hãy chọn một lộ trình gợi ý bên dưới hoặc thêm địa điểm bất kỳ từ bản đồ.
                </p>
              </div>
            )}

            {/* Curated Preset Journeys */}
            <div>
              <div className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-terrain-muted mb-2">
                <Sparkles className="w-3.5 h-3.5 text-terrain-accent" />
                <span>Lộ trình địa lý tuyển chọn</span>
              </div>
              <div className="space-y-1.5">
                {presetJourneys.map((preset) => (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => loadPresetJourney(preset.ids)}
                    className="w-full p-2.5 rounded-xl text-left bg-terrain-bg/60 dark:bg-[#1C2825] hover:bg-terrain-bg dark:hover:bg-[#243430] border border-terrain-border/70 dark:border-[#283934] transition-colors"
                  >
                    <div className="text-xs font-medium text-terrain-text dark:text-[#ECF2EF]">
                      {preset.name}
                    </div>
                    <div className="text-[11px] text-terrain-muted mt-0.5">
                      {preset.subtitle}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Add Suggestions */}
            {availableToAdd.length > 0 && (
              <div>
                <div className="text-[11px] font-medium uppercase tracking-wider text-terrain-muted mb-2">
                  Thêm nhanh địa điểm
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {availableToAdd.map((dest) => (
                    <button
                      key={dest.id}
                      type="button"
                      onClick={() => addToJourney(dest.id)}
                      className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs bg-terrain-surface dark:bg-[#1E2C28] border border-terrain-border dark:border-[#2A3C36] text-terrain-text dark:text-[#DCE6E1] hover:border-terrain-accent transition-colors"
                    >
                      <Plus className="w-3 h-3 text-terrain-accent" />
                      <span>{dest.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Action Bar */}
          <div className="p-4 border-t border-terrain-border dark:border-[#253530] bg-terrain-surface dark:bg-[#17221F] flex items-center gap-2">
            <button
              type="button"
              disabled={journeyDestinations.length === 0}
              onClick={startJourneyPlayback}
              className="flex-1 py-2.5 px-4 rounded-xl bg-terrain-accent hover:bg-terrain-accentHover disabled:opacity-40 text-white font-medium text-xs md:text-sm flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Bắt đầu hành trình</span>
            </button>
            {journeyDestinations.length > 0 && (
              <button
                type="button"
                onClick={clearJourney}
                aria-label="Xóa toàn bộ hành trình"
                className="p-2.5 rounded-xl border border-terrain-border dark:border-[#2A3C36] text-terrain-muted hover:text-red-600 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
