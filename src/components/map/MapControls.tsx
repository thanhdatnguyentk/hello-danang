'use client';

import { useState } from 'react';
import {
  Compass,
  Layers,
  Minus,
  Mountain,
  Plus,
  RotateCcw,
} from 'lucide-react';
import { useMapCamera } from '@/hooks/useMapCamera';
import { useExplorerStore } from '@/store/explorerStore';
import { TerrainStyleSelector } from './TerrainStyleSelector';

interface MapControlsProps {
  currentZoom: number;
  currentPitch: number;
}

export function MapControls({ currentZoom, currentPitch }: MapControlsProps) {
  const [styleOpen, setStyleOpen] = useState(false);
  const { zoomIn, zoomOut, flyToVietnamOverview, toggle3DPerspective } =
    useMapCamera();
  const is3DPerspective = useExplorerStore((s) => s.is3DPerspective);

  return (
    <div
      className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col items-end gap-2"
      aria-label="Điều khiển góc máy bản đồ"
    >
      <div className="relative flex flex-col rounded-2xl bg-white/90 dark:bg-[#17221F]/90 backdrop-blur-md border border-[#E5EAE5] dark:border-white/10 shadow-subtle overflow-hidden">
        <button
          type="button"
          onClick={zoomIn}
          title="Phóng to"
          aria-label="Phóng to bản đồ"
          className="w-10 h-10 flex items-center justify-center text-[#17221F] dark:text-neutral-100 hover:bg-[#F7F8F5] dark:hover:bg-white/10 transition-colors border-b border-[#E5EAE5] dark:border-white/10"
        >
          <Plus className="w-4 h-4 stroke-[1.75]" />
        </button>

        <button
          type="button"
          onClick={zoomOut}
          title="Thu nhỏ"
          aria-label="Thu nhỏ bản đồ"
          className="w-10 h-10 flex items-center justify-center text-[#17221F] dark:text-neutral-100 hover:bg-[#F7F8F5] dark:hover:bg-white/10 transition-colors border-b border-[#E5EAE5] dark:border-white/10"
        >
          <Minus className="w-4 h-4 stroke-[1.75]" />
        </button>

        <button
          type="button"
          onClick={toggle3DPerspective}
          title={is3DPerspective ? 'Chuyển sang góc nhìn 2D' : 'Bật góc nghiêng địa hình 3D'}
          aria-label="Chuyển đổi góc nghiêng địa hình 3D"
          className={`w-10 h-10 flex items-center justify-center transition-colors border-b border-[#E5EAE5] dark:border-white/10 ${
            is3DPerspective
              ? 'bg-[#326B5B] text-white'
              : 'text-[#17221F] dark:text-neutral-100 hover:bg-[#F7F8F5] dark:hover:bg-white/10'
          }`}
        >
          <Mountain className="w-4 h-4 stroke-[1.75]" />
        </button>

        <button
          type="button"
          onClick={flyToVietnamOverview}
          title="Toàn cảnh Việt Nam"
          aria-label="Đặt lại góc nhìn toàn cảnh Việt Nam"
          className="w-10 h-10 flex items-center justify-center text-[#17221F] dark:text-neutral-100 hover:bg-[#F7F8F5] dark:hover:bg-white/10 transition-colors border-b border-[#E5EAE5] dark:border-white/10"
        >
          <RotateCcw className="w-4 h-4 stroke-[1.75]" />
        </button>

        <button
          type="button"
          onClick={() => setStyleOpen((v) => !v)}
          title="Đổi lớp bản đồ (Tự nhiên / Vệ tinh / Địa hình)"
          aria-label="Đổi lớp bản đồ"
          className={`w-10 h-10 flex items-center justify-center transition-colors ${
            styleOpen
              ? 'bg-[#326B5B]/15 text-[#326B5B]'
              : 'text-[#17221F] dark:text-neutral-100 hover:bg-[#F7F8F5] dark:hover:bg-white/10'
          }`}
        >
          <Layers className="w-4 h-4 stroke-[1.75]" />
        </button>
      </div>

      {/* Subtle telemetry badge */}
      <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/80 dark:bg-[#17221F]/80 backdrop-blur-md border border-[#E5EAE5] dark:border-white/10 text-[11px] text-[#78857E]">
        <Compass className="w-3 h-3 text-[#326B5B]" />
        <span>
          Z{currentZoom.toFixed(1)} · {Math.round(currentPitch)}° 3D
        </span>
      </div>

      <TerrainStyleSelector
        isOpen={styleOpen}
        onClose={() => setStyleOpen(false)}
      />
    </div>
  );
}
