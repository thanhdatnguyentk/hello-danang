# Vietnam Terrain — Explore Beyond the Map

**Vietnam Terrain** là nền tảng atlas địa lý 3D tương tác tối giản, tôn vinh vẻ đẹp địa hình núi rừng, cao nguyên, thung lũng, vịnh biển và hải đảo của Việt Nam.

> *"The landscape itself is the interface."* — Bản đồ địa hình 3D là trung tâm trải nghiệm (chiếm 85–95% không gian thị giác), kết hợp sự tinh tế của Apple Maps, chiều sâu địa lý của Google Earth và thẩm mỹ biên tập tối giản.

---

## ✨ Tính năng nổi bật

- **Địa hình 3D WebGL thực tế (`raster-dem`)**: Sử dụng MapLibre GL JS kết hợp dữ liệu độ cao số **AWS Open Data Terrarium DEM** và lớp đổ bóng sườn đồi (*Hillshading*) tự nhiên, đi kèm cơ chế tự động chuyển về 2D mượt mà nếu thiết bị không hỗ trợ WebGL 3D.
- **3 Chế độ Bản đồ**:
  - **Tự nhiên**: Bản đồ địa lý sắc độ tự nhiên kết hợp đổ bóng địa hình.
  - **Vệ tinh**: Ảnh viễn thám độ phân giải cao phủ trên bề mặt 3D.
  - **Địa hình**: Bản đồ đồng mức địa chất chuyên sâu.
- **22+ Tọa độ Địa lý Tuyển chọn khắp Bắc – Trung – Nam**:
  - **Miền Bắc**: Đỉnh Fansipan (`3.143m`), Sa Pa, Cao nguyên đá Hà Giang, Đèo Mã Pí Lèng, Mù Cang Chải, Vịnh Hạ Long, Tràng An, Thác Bản Giốc, Hồ Ba Bể.
  - **Miền Trung**: Phong Nha – Kẻ Bàng, Hang Sơn Đoòng, Cố đô Huế, Đèo Hải Vân, Bán đảo Sơn Trà, Phố cổ Hội An, Đà Lạt, Măng Đen, Vịnh Vĩnh Hy.
  - **Miền Nam**: Mũi Né, Đảo Phú Quốc, Côn Đảo, Cần Thơ.
- **Chế độ Đặc trưng — "Khám phá địa hình 3D" (`TerrainExploreMode`)**:
  - Tự động ẩn các thanh công cụ phụ, nghiêng góc camera (`pitch 64°`) để làm nổi bật sống núi, thung lũng và đường bờ biển.
  - Hỗ trợ xoay tự do hoặc bật chế độ **Xoay 360° quanh địa hình**.
- **Lập kế hoạch & Trình chiếu Hành trình (`Cinematic Journey Mode`)**:
  - Chọn lộ trình gợi ý hoặc tự thêm/xắp xếp các điểm dừng.
  - Hiển thị đường nối nét đứt (`GeoJSON LineString`) và các điểm đánh số thứ tự trên bản đồ.
  - Nhấn **"Bắt đầu hành trình"** để camera tự động bay mượt mà qua từng tọa độ.

---

## 🛠 Công nghệ sử dụng

- **Framework**: Next.js 14 (App Router), React 18, TypeScript
- **3D Geospatial Engine**: MapLibre GL JS (`maplibre-gl`)
- **Styling & Typography**: Tailwind CSS, font `Be Vietnam Pro` (hỗ trợ đầy đủ dấu tiếng Việt)
- **Animation & State**: Framer Motion, Zustand (đồng bộ `localStorage` cho địa điểm đã lưu & hành trình)
- **Icons**: Lucide React

---

## 🗺 Nguồn dữ liệu Bản đồ & Giấy phép (Tile Providers & Licensing)

Ứng dụng sử dụng các nguồn dữ liệu mở và công khai, **không yêu cầu API Key** để chạy ngay lập tức:

1. **Dữ liệu độ cao 3D (`raster-dem`)**:
   - **Provider**: [AWS Registry of Open Data — Terrain Tiles (Mapzen Joerd / Terrarium)](https://registry.opendata.aws/terrain-tiles/)
   - **Endpoint**: `https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png`
   - **Giấy phép**: Dữ liệu tổng hợp từ SRTM, GMTED, NED và ETOPO1. Miễn phí sử dụng công khai.
2. **Bản đồ nền Tự nhiên**:
   - **Provider**: CARTO Voyager & OpenStreetMap Contributors (`© OpenStreetMap contributors, © CARTO`).
3. **Bản đồ Vệ tinh & Địa hình**:
   - **Provider**: Esri World Imagery & Esri World Topographic Map (`© Esri, USGS, NOAA`).

---

## 🚀 Chạy dự án tại máy cá nhân

```bash
# Cài đặt dependencies
npm install

# Chạy môi trường phát triển (http://localhost:3000)
npm run dev

# Kiểm tra bản dựng Production
npm run build
npm run start
```
