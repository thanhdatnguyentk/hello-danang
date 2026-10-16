import type { RegionConfig } from '@/types/destination';

export const REGIONS: RegionConfig[] = [
  {
    id: 'all',
    label: 'Toàn Việt Nam',
    subtitle: 'Dải đất hình chữ S từ địa đầu Hà Giang đến mũi Cà Mau',
    center: [106.2, 16.2],
    bounds: [
      [101.8, 8.2],
      [110.2, 23.6],
    ],
    zoom: 5.4,
    pitch: 28,
    bearing: -4,
  },
  {
    id: 'north',
    label: 'Miền Bắc',
    subtitle: 'Hoàng Liên Sơn, cao nguyên đá Hà Giang & vịnh biển kỳ quan',
    center: [105.4, 21.6],
    bounds: [
      [102.1, 19.8],
      [108.1, 23.5],
    ],
    zoom: 7.1,
    pitch: 48,
    bearing: 12,
  },
  {
    id: 'central',
    label: 'Miền Trung',
    subtitle: 'Trường Sơn hùng vĩ, đèo Hải Vân, bán đảo Sơn Trà & biển đảo',
    center: [107.8, 16.2],
    bounds: [
      [105.6, 14.8],
      [109.5, 18.2],
    ],
    zoom: 7.4,
    pitch: 52,
    bearing: -18,
  },
  {
    id: 'south',
    label: 'Miền Nam',
    subtitle: 'Cao nguyên Lâm Viên, Tà Đùng, biển đảo Phú Quốc & Côn Đảo',
    center: [106.8, 11.1],
    bounds: [
      [103.5, 8.3],
      [109.6, 12.8],
    ],
    zoom: 6.8,
    pitch: 42,
    bearing: 8,
  },
];
