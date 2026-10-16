'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Check, Layers } from 'lucide-react';
import { MAP_STYLES } from '@/lib/mapConfig';
import { useExplorerStore } from '@/store/explorerStore';

interface TerrainStyleSelectorProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TerrainStyleSelector({
  isOpen,
  onClose,
}: TerrainStyleSelectorProps) {
  const mapStyle = useExplorerStore((s) => s.mapStyle);
  const setMapStyle = useExplorerStore((s) => s.setMapStyle);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 8, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 8, scale: 0.97 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="absolute right-14 bottom-0 w-64 rounded-2xl bg-white/95 dark:bg-[#17221F]/95 backdrop-blur-md border border-[#E5EAE5] dark:border-white/10 shadow-floating p-2.5 z-30"
          role="dialog"
          aria-label="Chọn lớp bản đồ địa hình"
        >
          <div className="flex items-center gap-2 px-2.5 py-1.5 text-xs font-medium text-[#78857E] border-b border-[#E5EAE5] dark:border-white/10 mb-1.5">
            <Layers className="w-3.5 h-3.5 text-[#326B5B]" />
            <span>Lớp bản đồ 3D</span>
          </div>

          <div className="space-y-1">
            {MAP_STYLES.map((style) => {
              const active = mapStyle === style.id;
              return (
                <button
                  key={style.id}
                  type="button"
                  onClick={() => {
                    setMapStyle(style.id);
                    onClose();
                  }}
                  className={`w-full text-left px-3 py-2 rounded-xl transition-colors flex items-start justify-between gap-2 ${
                    active
                      ? 'bg-[#326B5B]/10 text-[#17221F] dark:text-white'
                      : 'hover:bg-[#F7F8F5] dark:hover:bg-white/5 text-[#17221F] dark:text-neutral-200'
                  }`}
                >
                  <div>
                    <div className="text-xs font-semibold">{style.label}</div>
                    <div className="text-[11px] text-[#78857E] leading-snug mt-0.5">
                      {style.description}
                    </div>
                  </div>
                  {active && (
                    <Check className="w-4 h-4 text-[#326B5B] shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
