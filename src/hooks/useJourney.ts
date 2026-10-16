'use client';

import { useMemo } from 'react';
import { DESTINATIONS } from '@/data/destinations';
import { useExplorerStore } from '@/store/explorerStore';
import type { Destination } from '@/types/destination';

export const PRESET_JOURNEYS: {
  id: string;
  name: string;
  subtitle: string;
  ids: string[];
}[] = [
  {
    id: 'central-heritage',
    name: 'Cung đường Di sản & Biển đảo Miền Trung',
    subtitle: 'Bạch Mã → Đèo Hải Vân → Sơn Trà → Bà Nà Hills → Hội An',
    ids: ['bach-ma', 'deo-hai-van', 'son-tra-da-nang', 'ba-na-hills', 'hoi-an'],
  },
  {
    id: 'northern-peaks',
    name: 'Vòng cung Đỉnh cao Đông – Tây Bắc',
    subtitle: 'Tràng An → Mộc Châu → Sa Pa → Fansipan → Đồng Văn → Mã Pí Lèng',
    ids: ['trang-an', 'moc-chau', 'sa-pa', 'fansipan', 'dong-van', 'ma-pi-leng'],
  },
  {
    id: 'southern-highlands-islands',
    name: 'Cao nguyên Lâm Viên & Biển đảo Phương Nam',
    subtitle: 'Tà Đùng → Langbiang → Đà Lạt → Nha Trang → Côn Đảo → Phú Quốc',
    ids: ['ta-dung', 'langbiang', 'da-lat', 'vinh-nha-trang', 'con-dao', 'phu-quoc'],
  },
];

export function useJourney() {
  const journeyIds = useExplorerStore((s) => s.journeyIds);
  const isPlayingJourney = useExplorerStore((s) => s.isPlayingJourney);
  const isJourneyPaused = useExplorerStore((s) => s.isJourneyPaused);
  const currentJourneyIndex = useExplorerStore((s) => s.currentJourneyIndex);

  const journeyDestinations = useMemo(() => {
    return journeyIds
      .map((id) => DESTINATIONS.find((d) => d.id === id))
      .filter((d): d is Destination => Boolean(d));
  }, [journeyIds]);

  const currentJourneyDestination = useMemo(() => {
    return journeyDestinations[currentJourneyIndex] ?? null;
  }, [journeyDestinations, currentJourneyIndex]);

  return {
    journeyIds,
    journeyDestinations,
    currentJourneyDestination,
    isPlayingJourney,
    isJourneyPaused,
    currentJourneyIndex,
    presetJourneys: PRESET_JOURNEYS,
  };
}
