import type { Destination } from '@/types/destination';

export const DESTINATIONS: Destination[] = [
  // ==========================================
  // MIỀN BẮC (NORTHERN VIETNAM) — 8 ĐỊA ĐIỂM
  // ==========================================
  {
    id: 'fansipan',
    name: 'Đỉnh Fansipan',
    slug: 'dinh-fansipan',
    province: 'Lào Cai',
    elevation: '3.147 m',
    region: 'north',
    location: {
      latitude: 22.3033,
      longitude: 103.775,
    },
    category: 'Núi rừng',
    description:
      'Nóc nhà Đông Dương sừng sững giữa dãy Hoàng Liên Sơn hùng vĩ, nơi sườn núi đá dốc đứng vươn lên trên biển mây đại ngàn Tây Bắc.',
    longDescription:
      'Với độ cao 3.147,3 mét, Fansipan là đỉnh núi cao nhất Việt Nam và cả bán đảo Đông Dương. Hệ địa hình phân cắt mạnh của khối núi Hoàng Liên Sơn tạo nên những sống núi sắc nét, thung lũng sâu và thảm thực vật cận nhiệt đới nguyên sinh độc đáo.',
    bestSeason: 'Tháng 9 – Tháng 4 (Mùa săn mây & hoa đỗ quyên)',
    image:
      'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Đỉnh núi cao nhất Đông Dương (3.147,3 m) trên sống núi Hoàng Liên Sơn',
      'Thảm rừng nguyên sinh & hoa đỗ quyên cổ thụ trên độ cao 2.000 m',
      'Tầm nhìn 360° bao quát thung lũng Mường Hoa và các đỉnh núi Tây Bắc',
    ],
    camera: {
      zoom: 12.6,
      pitch: 63,
      bearing: 34,
      exaggeration: 1.3,
    },
    tags: ['Hoàng Liên Sơn', 'Nóc nhà Đông Dương', 'Săn mây', 'Lào Cai'],
  },
  {
    id: 'sa-pa',
    name: 'Thung lũng Sa Pa',
    slug: 'thung-lung-sa-pa',
    province: 'Lào Cai',
    elevation: '1.500 m',
    region: 'north',
    location: {
      latitude: 22.3364,
      longitude: 103.8438,
    },
    category: 'Văn hóa',
    description:
      'Thị trấn trong sương nằm bên sườn thung lũng Mường Hoa, nổi tiếng với những thửa ruộng bậc thang uốn lượn theo đường đồng mức địa hình.',
    longDescription:
      'Nằm ở độ cao trung bình 1.500–1.650 mét, Sa Pa là giao điểm giữa khối núi Hoàng Liên Sơn hiểm trở và thung lũng Mường Hoa trù phú, nơi cộng đồng người Mông, Dao Đỏ, Tày kiến tạo nên di sản ruộng bậc thang kỳ vĩ qua hàng thế kỷ.',
    bestSeason: 'Tháng 9 – Tháng 10 (Mùa lúa chín vàng)',
    image:
      'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Thung lũng Mường Hoa với những bậc thang canh tác ôm sát sườn núi',
      'Không gian văn hóa bản làng Cát Cát, Tả Van, Lao Chải',
      'Khí hậu ôn đới mát mẻ quanh năm giữa mây núi Tây Bắc',
    ],
    camera: {
      zoom: 12.4,
      pitch: 58,
      bearing: -25,
      exaggeration: 1.25,
    },
    tags: ['Ruộng bậc thang', 'Mường Hoa', 'Tây Bắc', 'Bản làng'],
  },
  {
    id: 'dong-van',
    name: 'Cao nguyên đá Đồng Văn',
    slug: 'cao-nguyen-da-dong-van',
    province: 'Hà Giang',
    elevation: '1.400 m',
    region: 'north',
    location: {
      latitude: 23.2789,
      longitude: 105.3583,
    },
    category: 'Thiên nhiên',
    description:
      'Công viên Địa chất Toàn cầu UNESCO với những cánh đồng đá vôi tai mèo xám bạc trải dài bất tận nơi cực Bắc Tổ quốc.',
    longDescription:
      'Cao nguyên đá Đồng Văn lưu giữ lịch sử kiến tạo vỏ Trái Đất hơn 500 triệu năm. Địa hình karst dạng chóp và thung lũng kiến tạo sâu tạo nên một cảnh quan nguyên sơ, hùng tráng hiếm có tại Đông Nam Á.',
    bestSeason: 'Tháng 10 – Tháng 12 (Mùa hoa tam giác mạch)',
    image:
      'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Công viên Địa chất Toàn cầu UNESCO với địa hình karst tai mèo độc bản',
      'Phố cổ Đồng Văn và kiến trúc trình tường đất của đồng bào vùng cao',
      'Cung đường Hạnh Phúc uốn lượn qua những sườn núi đá vôi dựng đứng',
    ],
    camera: {
      zoom: 12.2,
      pitch: 60,
      bearing: 20,
      exaggeration: 1.28,
    },
    tags: ['Hà Giang', 'UNESCO', 'Địa chất Karst', 'Cực Bắc'],
  },
  {
    id: 'ma-pi-leng',
    name: 'Đèo Mã Pí Lèng & Sông Nho Quế',
    slug: 'deo-ma-pi-leng',
    province: 'Hà Giang',
    elevation: '1.500 m',
    region: 'north',
    location: {
      latitude: 23.2464,
      longitude: 105.4117,
    },
    category: 'Núi rừng',
    description:
      'Một trong "Tứ đại đỉnh đèo" của Việt Nam, chạy dọc vách đá dựng đứng nhìn xuống hẻm vực Tu Sản sâu nhất Đông Nam Á.',
    longDescription:
      'Nằm giữa Đồng Văn và Mèo Vạc, đèo Mã Pí Lèng mở ra khung cảnh hẻm vực Tu Sản với vách đá cao tới 700–800 mét và dòng sông Nho Quế xanh ngọc bích uốn lượn dưới đáy vực sâu.',
    bestSeason: 'Tháng 9 – Tháng 4 (Trời trong xanh, ít mưa)',
    image:
      'https://images.unsplash.com/photo-1573455494060-c5595004fb6c?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Hẻm vực Tu Sản — hẻm vực kiến tạo sâu nhất Đông Nam Á',
      'Dòng sông Nho Quế xanh ngọc bích cắt ngang khối núi đá vôi',
      'Cung đèo huyền thoại dài 20 km treo mình bên vách núi',
    ],
    camera: {
      zoom: 13.0,
      pitch: 64,
      bearing: -42,
      exaggeration: 1.32,
    },
    tags: ['Tứ đại đỉnh đèo', 'Hẻm vực Tu Sản', 'Sông Nho Quế', 'Hà Giang'],
  },
  {
    id: 'ban-gioc',
    name: 'Thác Bản Giốc',
    slug: 'thac-ban-gioc',
    province: 'Cao Bằng',
    elevation: '430 m',
    region: 'north',
    location: {
      latitude: 22.8558,
      longitude: 106.7225,
    },
    category: 'Thiên nhiên',
    description:
      'Thác nước tự nhiên lớn nhất Đông Nam Á đổ xuống qua nhiều tầng đá vôi giữa thung lũng biên cương xanh biếc và dòng sông Quây Sơn.',
    longDescription:
      'Nằm trong vùng Công viên Địa chất Toàn cầu Non nước Cao Bằng, thác Bản Giốc được bao bọc bởi các khối núi karst dạng tháp và cánh đồng lúa yên bình dọc sông Quây Sơn.',
    bestSeason: 'Tháng 8 – Tháng 10 (Nước trong xanh & lúa chín)',
    image:
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Thác nước nhiều tầng vôi hóa giữa thung lũng karst Cao Bằng',
      'Dòng sông Quây Sơn phẳng lặng màu ngọc bích dưới chân thác',
      'Quần thể động Ngườm Ngao và thung lũng đá vôi lân cận',
    ],
    camera: {
      zoom: 13.1,
      pitch: 58,
      bearing: 16,
      exaggeration: 1.25,
    },
    tags: ['Cao Bằng', 'Thác nước', 'Sông Quây Sơn', 'Đông Bắc'],
  },
  {
    id: 'vinh-ha-long',
    name: 'Vịnh Hạ Long',
    slug: 'vinh-ha-long',
    province: 'Quảng Ninh',
    elevation: '0 – 200 m',
    region: 'north',
    location: {
      latitude: 20.9101,
      longitude: 107.1839,
    },
    category: 'Biển đảo',
    description:
      'Di sản Thiên nhiên Thế giới với gần 2.000 đảo đá vôi kỳ vĩ nhô lên từ làn nước biển xanh ngọc lục bảo của vịnh Bắc Bộ.',
    longDescription:
      'Vịnh Hạ Long là kiệt tác địa mạo karst ngập nước biển, nơi hàng ngàn tháp đá vôi và đảo đá cổ đại tạo thành một mê cung biển đảo tĩnh lặng, huyền ảo.',
    bestSeason: 'Tháng 10 – Tháng 4 (Thời tiết dịu mát, nắng nhẹ)',
    image:
      'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Di sản Thiên nhiên Thế giới UNESCO hai lần được công nhận về địa mạo',
      'Hệ thống hang động karst kỳ vĩ: Sửng Sốt, Đầu Gỗ, Thiên Cung',
      'Hàng ngàn đảo đá vôi nhô thẳng từ mặt nước biển tĩnh lặng',
    ],
    camera: {
      zoom: 11.8,
      pitch: 55,
      bearing: 25,
      exaggeration: 1.25,
    },
    tags: ['UNESCO', 'Karst biển', 'Quảng Ninh', 'Di sản thế giới'],
  },
  {
    id: 'trang-an',
    name: 'Quần thể Danh thắng Tràng An',
    slug: 'trang-an-ninh-binh',
    province: 'Ninh Bình',
    elevation: '15 – 240 m',
    region: 'north',
    location: {
      latitude: 20.2506,
      longitude: 105.9189,
    },
    category: 'Văn hóa',
    description:
      '"Vịnh Hạ Long trên cạn" — di sản kép Thế giới nơi những dãy núi đá vôi bao bọc các thung lũng ngập nước, hang động xuyên thủy và cố đô Hoa Lư.',
    longDescription:
      'Tràng An là di sản hỗn hợp Văn hóa và Thiên nhiên Thế giới đầu tiên tại Đông Nam Á, nổi bật với các khối núi đá vôi trồi lên giữa đồng bằng châu thổ sông Hồng và hệ thống sông Ngô Đồng uốn lượn qua Tam Cốc – Bích Động.',
    bestSeason: 'Tháng 5 – Tháng 6 (Mùa lúa chín vàng Tam Cốc) & Tháng 1 – 3',
    image:
      'https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Di sản kép Thế giới UNESCO (Văn hóa & Thiên nhiên)',
      'Hệ thống hang động xuyên thủy và thung lũng ngập nước tự nhiên',
      'Đỉnh Hang Múa nhìn trọn dòng sông Ngô Đồng và cánh đồng Tam Cốc',
    ],
    camera: {
      zoom: 12.7,
      pitch: 58,
      bearing: -18,
      exaggeration: 1.3,
    },
    tags: ['Ninh Bình', 'Di sản kép', 'Cố đô Hoa Lư', 'Tam Cốc'],
  },
  {
    id: 'moc-chau',
    name: 'Cao nguyên Mộc Châu',
    slug: 'cao-nguyen-moc-chau',
    province: 'Sơn La',
    elevation: '1.050 m',
    region: 'north',
    location: {
      latitude: 20.8442,
      longitude: 104.6394,
    },
    category: 'Thiên nhiên',
    description:
      'Cao nguyên thảo nguyên xanh mát trải dài ở độ cao 1.050m với những đồi chè lượn sóng, thung lũng mận Nà Ka và đỉnh Pha Luông.',
    longDescription:
      'Mộc Châu sở hữu địa hình cao nguyên đá vôi bằng phẳng xen lẫn các dãy núi bao quanh như đỉnh Pha Luông hùng vĩ, tạo nên tiểu khí hậu ôn hòa và những thung lũng hoa nở rộ theo mùa.',
    bestSeason: 'Tháng 11 – Tháng 2 (Mùa hoa cải trắng, hoa mận & hoa đào)',
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Đồi chè Trái Tim xanh mướt uốn lượn theo sườn đồi',
      'Đỉnh Pha Luông (gần 2.000m) — nóc nhà vùng biên viễn Mộc Châu',
      'Thung lũng mận Nà Ka và thác Dải Yếm mùa nước đổ',
    ],
    camera: {
      zoom: 12.1,
      pitch: 56,
      bearing: 15,
      exaggeration: 1.25,
    },
    tags: ['Sơn La', 'Cao nguyên', 'Đồi chè', 'Pha Luông'],
  },

  // ==========================================
  // MIỀN TRUNG (CENTRAL VIETNAM) — 8 ĐỊA ĐIỂM
  // ==========================================
  {
    id: 'phong-nha-ke-bang',
    name: 'Phong Nha – Kẻ Bàng',
    slug: 'phong-nha-ke-bang',
    province: 'Quảng Bình',
    elevation: '800 m',
    region: 'central',
    location: {
      latitude: 17.5911,
      longitude: 106.2833,
    },
    category: 'Thiên nhiên',
    description:
      'Vương quốc hang động kỳ vĩ nhất hành tinh nằm giữa khối núi đá vôi cổ nhất châu Á, nơi ẩn chứa hang Sơn Đoòng và hệ thống sông ngầm huyền bí.',
    longDescription:
      'Vườn quốc gia Phong Nha – Kẻ Bàng hình thành từ kỷ Ordovic – Silur (hơn 400 triệu năm trước), tạo nên hệ thống hơn 400 hang động khổng lồ xuyên qua lòng dãy Trường Sơn Bắc.',
    bestSeason: 'Tháng 3 – Tháng 8 (Mùa khô, nước sông Son trong vắt)',
    image:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Khối karst cổ nhất châu Á với hệ thống hang Sơn Đoòng, Động Thiên Đường',
      'Dòng sông Son xanh ngắt uốn lượn dưới chân núi đá vôi',
      'Rừng nguyên sinh nhiệt đới trên núi đá vôi có độ đa dạng sinh học cao',
    ],
    camera: {
      zoom: 11.9,
      pitch: 59,
      bearing: -28,
      exaggeration: 1.28,
    },
    tags: ['Quảng Bình', 'Sơn Đoòng', 'UNESCO', 'Trường Sơn'],
  },
  {
    id: 'bach-ma',
    name: 'Vườn Quốc gia Bạch Mã',
    slug: 'vuon-quoc-gia-bach-ma',
    province: 'Thừa Thiên Huế',
    elevation: '1.450 m',
    region: 'central',
    location: {
      latitude: 16.1956,
      longitude: 107.8586,
    },
    category: 'Núi rừng',
    description:
      'Dãy núi granite đâm ngang ra sát biển Đông, nơi đỉnh Vọng Hải Đài ở độ cao 1.450m thu trọn vào tầm mắt đầm Cầu Hai và vịnh Lăng Cô.',
    longDescription:
      'Bạch Mã là nhánh núi cuối cùng của dãy Trường Sơn vươn thẳng ra biển, đóng vai trò bức tường địa lý phân chia khí hậu hai miền Bắc – Nam với những thác nước Đỗ Quyên cao 300m và Ngũ Hồ trong vắt.',
    bestSeason: 'Tháng 3 – Tháng 9 (Trời quang đãng, dễ ngắm toàn cảnh biển)',
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Vọng Hải Đài (1.450m) ngắm toàn cảnh vịnh Lăng Cô và đầm Cầu Hai',
      'Thác Đỗ Quyên cao hơn 300m đổ thẳng xuống vực rừng nguyên sinh',
      'Ranh giới sinh thái tự nhiên giữa miền Bắc và miền Nam Việt Nam',
    ],
    camera: {
      zoom: 12.4,
      pitch: 61,
      bearing: 48,
      exaggeration: 1.28,
    },
    tags: ['Bạch Mã', 'Vịnh Lăng Cô', 'Huế', 'Rừng nguyên sinh'],
  },
  {
    id: 'deo-hai-van',
    name: 'Đèo Hải Vân',
    slug: 'deo-hai-van',
    province: 'Đà Nẵng – Thừa Thiên Huế',
    elevation: '496 m',
    region: 'central',
    location: {
      latitude: 16.1972,
      longitude: 108.1317,
    },
    category: 'Núi rừng',
    description:
      '"Thiên hạ đệ nhất hùng quan" — cung đèo ven biển ngoạn mục nhất Việt Nam nơi sườn núi Trường Sơn gặp gỡ làn nước xanh thẳm của vịnh Đà Nẵng.',
    longDescription:
      'Đèo Hải Vân dài 21 km cắt ngang dãy núi Bạch Mã vươn ra biển Đông. Một bên là vách núi cao پوشیده bởi mây trắng, một bên là vực biển sâu nhìn thẳng xuống vịnh Lăng Cô và toàn cảnh thành phố Đà Nẵng.',
    bestSeason: 'Tháng 2 – Tháng 8 (Nắng đẹp, mây lượn ngang đỉnh đèo)',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Di tích Hải Vân Quan trên đỉnh đèo ở độ cao 496 m',
      'Cung đường ven biển giao thoa giữa núi cao và vịnh biển sâu',
      'Góc nhìn bao quát cả vịnh Lăng Cô (bên Bắc) và vịnh Đà Nẵng (bên Nam)',
    ],
    camera: {
      zoom: 12.8,
      pitch: 62,
      bearing: 135,
      exaggeration: 1.28,
    },
    tags: ['Đà Nẵng', 'Hải Vân Quan', 'Đèo ven biển', 'Vịnh Lăng Cô'],
  },
  {
    id: 'ba-na-hills',
    name: 'Đỉnh Bà Nà – Núi Chúa',
    slug: 'ba-na-hills-nui-chua',
    province: 'Đà Nẵng',
    elevation: '1.487 m',
    region: 'central',
    location: {
      latitude: 15.9977,
      longitude: 107.9881,
    },
    category: 'Núi rừng',
    description:
      'Đỉnh Núi Chúa cao 1.487m phía Tây Đà Nẵng, nơi Cầu Vàng vươn mình giữa biển mây và rừng nguyên sinh khu bảo tồn thiên nhiên Bà Nà.',
    longDescription:
      'Cách bờ biển Đà Nẵng chỉ 25 km về phía Tây nhưng vươn cao gần 1.500 mét, khối núi Bà Nà – Núi Chúa tạo nên sự chênh lệch địa hình ấn tượng với thác Tóc Tiên và khí hậu 4 mùa trong một ngày.',
    bestSeason: 'Tháng 3 – Tháng 9 (Buổi sáng sớm săn mây trên Cầu Vàng)',
    image:
      'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Đỉnh Núi Chúa (1.487m) nhìn thẳng về đồng bằng và vịnh Đà Nẵng',
      'Kiến trúc Cầu Vàng nổi bật giữa sườn núi và mây mù đại ngàn',
      'Rừng nguyên sinh Khu bảo tồn thiên nhiên Bà Nà – Núi Chúa',
    ],
    camera: {
      zoom: 12.7,
      pitch: 62,
      bearing: 65,
      exaggeration: 1.28,
    },
    tags: ['Đà Nẵng', 'Cầu Vàng', 'Núi Chúa', 'Săn mây'],
  },
  {
    id: 'son-tra-da-nang',
    name: 'Bán đảo Sơn Trà',
    slug: 'ban-dao-son-tra',
    province: 'Đà Nẵng',
    elevation: '696 m',
    region: 'central',
    location: {
      latitude: 16.1186,
      longitude: 108.2739,
    },
    category: 'Biển đảo',
    description:
      'Khối núi rừng nguyên sinh vươn dài ra biển Đông như cánh tay ôm trọn vịnh Đà Nẵng, nơi hội tụ Đỉnh Bàn Cờ, Chùa Linh Ứng và bờ biển Mỹ Khê.',
    longDescription:
      'Bán đảo Sơn Trà là một đảo núi granit cổ được nối với đất liền bằng dải cát bồi tự nhiên, cao tới 696 mét tại đỉnh Bàn Cờ. Đây là khu rừng già duy nhất tại Việt Nam gắn liền trực tiếp với hệ sinh thái rạn san hô ven bờ.',
    bestSeason: 'Tháng 2 – Tháng 8 (Biển êm, trời trong xanh)',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Đỉnh Bàn Cờ (696m) thu trọn đường cong bờ biển Mỹ Khê và thành phố Đà Nẵng',
      'Hệ sinh thái rừng nguyên sinh ven biển nơi sinh sống của Voọc Chà Vá chân nâu',
      'Chùa Linh Ứng Bãi Bụt và mũi Nghê — nơi đón ánh bình minh đầu tiên ở Đà Nẵng',
    ],
    camera: {
      zoom: 12.6,
      pitch: 60,
      bearing: -125,
      exaggeration: 1.28,
    },
    tags: ['Đà Nẵng', 'Đỉnh Bàn Cờ', 'Biển Mỹ Khê', 'Chùa Linh Ứng'],
  },
  {
    id: 'ngu-hanh-son',
    name: 'Danh thắng Ngũ Hành Sơn',
    slug: 'ngu-hanh-son-da-nang',
    province: 'Đà Nẵng',
    elevation: '106 m',
    region: 'central',
    location: {
      latitude: 16.0039,
      longitude: 108.2633,
    },
    category: 'Văn hóa',
    description:
      'Quần thể sáu ngọn núi đá vôi cẩm thạch Kim – Mộc – Thủy – Hỏa – Thổ trồi lên giữa dải cát trắng ven biển Đà Nẵng – Hội An.',
    longDescription:
      'Ngũ Hành Sơn là di tích quốc gia đặc biệt mang giá trị địa mạo karst độc đáo ngay sát bờ biển, kết hợp hệ thống động Huyền Không, động Âm Phủ và các ngôi chùa cổ hàng trăm năm tuổi.',
    bestSeason: 'Quanh năm (Đẹp nhất từ tháng 2 – tháng 8)',
    image:
      'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Năm cụm núi đá cẩm thạch nổi bật trên đồng bằng cát ven biển',
      'Động Huyền Không với vòm đá tự nhiên đón luồng ánh sáng mặt trời',
      'Vọng Giang Đài và Vọng Hải Đài nhìn ra sông Cổ Cò và biển Non Nước',
    ],
    camera: {
      zoom: 13.5,
      pitch: 58,
      bearing: -35,
      exaggeration: 1.3,
    },
    tags: ['Đà Nẵng', 'Núi Cẩm Thạch', 'Động Huyền Không', 'Biển Non Nước'],
  },
  {
    id: 'hoi-an',
    name: 'Phố cổ Hội An & Cù Lao Chàm',
    slug: 'hoi-an-cu-lao-cham',
    province: 'Quảng Nam',
    elevation: '5 – 517 m',
    region: 'central',
    location: {
      latitude: 15.8801,
      longitude: 108.338,
    },
    category: 'Văn hóa',
    description:
      'Thương cảng cổ bên hạ lưu sông Thu Bồn nối liền với Khu dự trữ sinh quyển thế giới quần đảo Cù Lao Chàm ngoài khơi biển Đông.',
    longDescription:
      'Địa hình Hội An là sự giao hòa giữa châu thổ hạ lưu sông Thu Bồn, rừng dừa nước Bảy Mẫu ở Cửa Đại và cụm 8 hòn đảo núi granit Cù Lao Chàm vươn cao 517 mét giữa đại dương.',
    bestSeason: 'Tháng 2 – Tháng 8 (Mùa nắng vàng & biển Cù Lao Chàm trong vắt)',
    image:
      'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Di sản Văn hóa Thế giới UNESCO bên dòng sông Hoài – Thu Bồn',
      'Khu dự trữ sinh quyển thế giới quần đảo Cù Lao Chàm cách bờ 15 km',
      'Hệ sinh thái rừng dừa ngập mặn Cửa Đại và bãi biển An Bàng',
    ],
    camera: {
      zoom: 11.8,
      pitch: 52,
      bearing: 60,
      exaggeration: 1.22,
    },
    tags: ['Quảng Nam', 'UNESCO', 'Sông Thu Bồn', 'Cù Lao Chàm'],
  },
  {
    id: 'dao-ly-son',
    name: 'Đảo núi lửa Lý Sơn',
    slug: 'dao-ly-son',
    province: 'Quảng Ngãi',
    elevation: '169 m',
    region: 'central',
    location: {
      latitude: 15.3811,
      longitude: 109.1156,
    },
    category: 'Biển đảo',
    description:
      'Hòn đảo tiền tiêu được kiến tạo từ 5 miệng núi lửa cổ cách đây hàng triệu năm, nổi bật với đỉnh Thới Lới, cổng Tò Vò và vách đá trầm tích.',
    longDescription:
      'Lý Sơn là bảo tàng địa chất núi lửa giữa biển khơi, nơi các miệng núi lửa cổ như Thới Lới và Giếng Tiền vẫn giữ nguyên hình thái lòng chảo rõ nét trên bản đồ địa hình 3D.',
    bestSeason: 'Tháng 4 – Tháng 8 (Biển lặng, nước trong xanh như ngọc)',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Miệng núi lửa cổ trên đỉnh núi Thới Lới (169m) và núi Giếng Tiền',
      'Vách đá trầm tích núi lửa Hang Câu và cổng đá tự nhiên Tò Vò',
      'Những cánh đồng tỏi bậc thang trên nền đất cát san hô và đá bazan',
    ],
    camera: {
      zoom: 13.2,
      pitch: 58,
      bearing: -20,
      exaggeration: 1.35,
    },
    tags: ['Quảng Ngãi', 'Địa chất núi lửa', 'Đỉnh Thới Lới', 'Biển đảo'],
  },

  // ==========================================
  // MIỀN NAM & TÂY NGUYÊN (SOUTH & HIGHLANDS) — 6 ĐỊA ĐIỂM
  // ==========================================
  {
    id: 'da-lat',
    name: 'Cao nguyên Lâm Viên – Đà Lạt',
    slug: 'cao-nguyen-lam-vien-da-lat',
    province: 'Lâm Đồng',
    elevation: '1.500 m',
    region: 'south',
    location: {
      latitude: 11.9404,
      longitude: 108.4583,
    },
    category: 'Thiên nhiên',
    description:
      'Thành phố ngàn thông nằm trên cao nguyên Lâm Viên ở độ cao 1.500m, được bao bọc bởi những triền đồi thông lượn sóng và hồ nước tĩnh lặng.',
    longDescription:
      'Cao nguyên Lâm Viên sở hữu địa hình bậc thang cao nguyên bazan kết hợp núi cao phía Bắc, tạo nên cảnh quan rừng thông ba lá bạt ngàn, hồ Tuyền Lâm, hồ Xuân Hương và những biển mây sớm mai tại Cầu Đất.',
    bestSeason: 'Tháng 11 – Tháng 4 (Mùa hoa dã quỳ, mai anh đào & săn mây)',
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Địa hình cao nguyên bazan 1.500m mát mẻ với rừng thông và hồ Tuyền Lâm',
      'Đồi chè Cầu Đất (1.650m) — điểm săn mây bình minh đẹp nhất Tây Nguyên',
      'Kiến trúc di sản hài hòa với những triền đồi tự nhiên',
    ],
    camera: {
      zoom: 12.2,
      pitch: 58,
      bearing: 18,
      exaggeration: 1.25,
    },
    tags: ['Lâm Đồng', 'Tây Nguyên', 'Cao nguyên Lâm Viên', 'Hồ Tuyền Lâm'],
  },
  {
    id: 'langbiang',
    name: 'Đỉnh Núi Langbiang',
    slug: 'dinh-langbiang',
    province: 'Lâm Đồng',
    elevation: '2.167 m',
    region: 'south',
    location: {
      latitude: 12.0469,
      longitude: 108.4394,
    },
    category: 'Núi rừng',
    description:
      'Nóc nhà của cao nguyên Lâm Viên gồm hai đỉnh Ông (2.167m) và đỉnh Bà (2.124m) nhìn xuống dòng Suối Vàng uốn lượn giữa rừng thông.',
    longDescription:
      'Khối núi Langbiang thuộc Khu dự trữ sinh quyển thế giới Langbiang được UNESCO công nhận, là điểm quan sát địa hình tuyệt đẹp bao quát toàn bộ cao nguyên Đà Lạt và hồ Đankia – Suối Vàng.',
    bestSeason: 'Tháng 11 – Tháng 4 (Mùa khô Tây Nguyên, trời quang mây tạnh)',
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Đỉnh Bà (2.167m) và đỉnh Radar (1.929m) nhìn trọn hồ Đankia – Suối Vàng',
      'Khu dự trữ sinh quyển thế giới UNESCO Langbiang',
      'Cung đường trekking xuyên rừng thông cổ thụ và rừng rêu á nhiệt đới',
    ],
    camera: {
      zoom: 12.7,
      pitch: 62,
      bearing: -145,
      exaggeration: 1.28,
    },
    tags: ['Langbiang', 'Nóc nhà Đà Lạt', 'UNESCO', 'Trekking'],
  },
  {
    id: 'ta-dung',
    name: 'Hồ Tà Đùng',
    slug: 'ho-ta-dung',
    province: 'Đắk Nông',
    elevation: '850 – 1.982 m',
    region: 'south',
    location: {
      latitude: 11.8686,
      longitude: 107.9942,
    },
    category: 'Thiên nhiên',
    description:
      '"Vịnh Hạ Long của Tây Nguyên" với hơn 40 hòn đảo lớn nhỏ nhô lên mặt hồ phẳng lặng dưới chân khối núi Tà Đùng cao 1.982m.',
    longDescription:
      'Nằm giữa vùng chuyển tiếp địa hình từ cao nguyên Đắk Nông xuống thung lũng sông Đồng Nai, hồ Tà Đùng và Vườn quốc gia Tà Đùng tạo nên một bức tranh sơn thủy kỳ vĩ giữa đại ngàn Tây Nguyên.',
    bestSeason: 'Tháng 8 – Tháng 12 (Mùa nước đầy, đảo xanh mướt)',
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Hơn 40 đảo đồi xanh biếc nổi trên mặt hồ rộng 5.000 ha',
      'Khối núi Tà Đùng cao 1.982m bao bọc phía Đông Bắc mặt hồ',
      'Thuộc vùng Công viên Địa chất Toàn cầu UNESCO Đắk Nông',
    ],
    camera: {
      zoom: 12.4,
      pitch: 60,
      bearing: 32,
      exaggeration: 1.28,
    },
    tags: ['Đắk Nông', 'Tây Nguyên', 'Hồ trên núi', 'UNESCO'],
  },
  {
    id: 'vinh-nha-trang',
    name: 'Vịnh Nha Trang & Hòn Bà',
    slug: 'vinh-nha-trang',
    province: 'Khánh Hòa',
    elevation: '0 – 1.578 m',
    region: 'south',
    location: {
      latitude: 12.2388,
      longitude: 109.1967,
    },
    category: 'Biển đảo',
    description:
      'Một trong những vịnh biển đẹp nhất thế giới được che chở bởi 19 hòn đảo lớn nhỏ và dãy núi Hòn Bà cao hơn 1.500m phía đất liền.',
    longDescription:
      'Địa hình Nha Trang là sự kết hợp hiếm có giữa vịnh biển sâu trong vắt, cụm đảo Hòn Tre – Hòn Mun ngoài khơi và các dãy núi ven biển ôm vòng cung dọc bờ biển Nam Trung Bộ.',
    bestSeason: 'Tháng 1 – Tháng 8 (Biển êm, nắng ấm trong xanh)',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Quần thể 19 hòn đảo bao bọc vịnh biển: Hòn Tre, Hòn Mun, Hòn Tằm',
      'Khu bảo tồn biển Hòn Mun với hệ sinh thái san hô đa dạng bậc nhất Việt Nam',
      'Đỉnh Hòn Bà (1.578m) trong sương mù chỉ cách bờ biển 30 km',
    ],
    camera: {
      zoom: 11.6,
      pitch: 56,
      bearing: -65,
      exaggeration: 1.25,
    },
    tags: ['Khánh Hòa', 'Vịnh biển đẹp nhất thế giới', 'Hòn Mun', 'Biển đảo'],
  },
  {
    id: 'phu-quoc',
    name: 'Đảo Ngọc Phú Quốc',
    slug: 'dao-phu-quoc',
    province: 'Kiên Giang',
    elevation: '0 – 603 m',
    region: 'south',
    location: {
      latitude: 10.2899,
      longitude: 103.984,
    },
    category: 'Biển đảo',
    description:
      'Hòn đảo lớn nhất Việt Nam nằm trong vịnh Thái Lan với dãy núi 99 ngọn chạy dọc từ Bắc xuống Nam và quần đảo An Thới tuyệt đẹp.',
    longDescription:
      'Phú Quốc có địa hình đồi núi thoải dần từ Bắc xuống Nam với đỉnh Núi Chúa cao 603m thuộc Vườn quốc gia Phú Quốc, bao quanh bởi những bãi biển cát trắng mịn như Bãi Sao, Bãi Kem và 22 hòn đảo nhỏ phía Nam.',
    bestSeason: 'Tháng 11 – Tháng 4 (Mùa khô, biển lặng như hồ)',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Vườn quốc gia Phú Quốc và dãy 99 ngọn núi với đỉnh Núi Chúa (603m)',
      'Quần đảo An Thới phía Nam với Hòn Thơm, Hòn Móng Tay, Hòn Mây Rút',
      'Khu dự trữ sinh quyển thế giới Kiên Giang được UNESCO công nhận',
    ],
    camera: {
      zoom: 10.8,
      pitch: 52,
      bearing: 15,
      exaggeration: 1.28,
    },
    tags: ['Kiên Giang', 'Đảo Ngọc', 'Vịnh Thái Lan', 'Quần đảo An Thới'],
  },
  {
    id: 'con-dao',
    name: 'Quần đảo Côn Đảo',
    slug: 'quan-dao-con-dao',
    province: 'Bà Rịa – Vũng Tàu',
    elevation: '0 – 577 m',
    region: 'south',
    location: {
      latitude: 8.6853,
      longitude: 106.6067,
    },
    category: 'Biển đảo',
    description:
      'Quần đảo 16 hòn đảo núi đá granit hoang sơ giữa đại dương, nơi những vách núi rừng nguyên sinh ôm lấy vịnh Côn Sơn và bãi Đầm Trầu.',
    longDescription:
      'Côn Đảo nổi bật với địa hình núi cao dốc đứng ngay sát mép biển, đỉnh núi Thánh Giá cao 577 mét tạo thành bức tường chắn gió tự nhiên cho vịnh Côn Sơn và hệ sinh thái rùa biển quý hiếm.',
    bestSeason: 'Tháng 3 – Tháng 9 (Biển êm, mùa rùa biển đẻ trứng)',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Đỉnh núi Thánh Giá (577m) bao quát toàn bộ 16 hòn đảo lớn nhỏ',
      'Vườn quốc gia Côn Đảo — khu Ramsar biển đầu tiên của Việt Nam',
      'Cung đường ven biển Mũi Cá Mập – Bãi Nhát và vịnh Đầm Tre nguyên sơ',
    ],
    camera: {
      zoom: 12.2,
      pitch: 58,
      bearing: -28,
      exaggeration: 1.32,
    },
    tags: ['Côn Đảo', 'Vườn quốc gia', 'Đảo hoang sơ', 'Khu Ramsar'],
  },
  {
    id: 'mui-ca-mau',
    name: 'Đất Mũi Cà Mau',
    slug: 'mui-ca-mau',
    province: 'Cà Mau',
    elevation: '0 – 5 m',
    region: 'south',
    location: {
      latitude: 8.6094,
      longitude: 104.7267,
    },
    category: 'Thiên nhiên',
    description:
      'Mũi đất thiêng liêng nơi tận cùng phương Nam của Tổ quốc, nơi rừng ngập mặn nguyên sinh vươn mình bồi đắp mỗi năm ra vùng giao thoa hai biển Đông – Tây.',
    longDescription:
      'Vườn quốc gia Mũi Cà Mau là Khu dự trữ sinh quyển thế giới UNESCO và khu Ramsar quốc tế, đại diện cho địa hình đồng bằng bồi tụ châu thổ Cửu Long với mạng lưới kênh rạch chằng chịt và rừng đước, rừng mắm bạt ngàn.',
    bestSeason: 'Tháng 12 – Tháng 4 (Mùa khô phương Nam)',
    image:
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Điểm duy nhất trên đất liền Việt Nam ngắm mặt trời mọc trên biển Đông và lặn ở biển Tây',
      'Khu dự trữ sinh quyển thế giới UNESCO rừng ngập mặn Mũi Cà Mau',
      'Cột mốc tọa độ Quốc gia GPS 0001 và biểu tượng con tàu hướng ra đại dương',
    ],
    camera: {
      zoom: 11.8,
      pitch: 46,
      bearing: -15,
      exaggeration: 1.15,
    },
    tags: ['Cà Mau', 'Cực Nam Tổ Quốc', 'Rừng ngập mặn', 'UNESCO'],
  },
];
