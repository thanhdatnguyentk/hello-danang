export type Lang = 'vi' | 'en' | 'ja';

export interface LocalizedString {
  vi: string;
  en: string;
  ja: string;
}

export interface Landmark {
  id: string;
  number: string;
  name: LocalizedString;
  subtitle: LocalizedString;
  badge: LocalizedString;
  accentColor: 'yellow' | 'blue' | 'mint' | 'pink';
  bestTime: LocalizedString;
  location: LocalizedString;
  description: LocalizedString;
  cuteTip: LocalizedString;
  visualType: 'dragon' | 'golden' | 'mykhe' | 'sontra' | 'marble' | 'love';
}

export interface FoodItem {
  id: string;
  name: LocalizedString;
  pronunciation: string;
  priceRange: string;
  tag: LocalizedString;
  description: LocalizedString;
  whereToEat: LocalizedString;
  accentColor: 'yellow' | 'mint' | 'pink' | 'blue';
  visualType: 'miquang' | 'banhtrang' | 'banhxeo' | 'haisan' | 'che';
}

export interface TimelineStop {
  time: string;
  period: 'dawn' | 'morning' | 'afternoon' | 'night';
  title: LocalizedString;
  place: LocalizedString;
  description: LocalizedString;
  badge: LocalizedString;
}

export const cityStats: { value: string; label: LocalizedString }[] = [
  {
    value: '60 km',
    label: {
      vi: 'Đường bờ biển xanh cát trắng',
      en: 'Turquoise Coastline',
      ja: 'エメラルド色の海岸線',
    },
  },
  {
    value: '9 Cây Cầu',
    label: {
      vi: 'Bắc qua dòng sông Hàn thơ mộng',
      en: 'Iconic Bridges Across Han River',
      ja: 'ハン川に架かる象徴的な橋',
    },
  },
  {
    value: '21:00',
    label: {
      vi: 'Cầu Rồng phun lửa & nước cuối tuần',
      en: 'Weekend Dragon Fire & Water Show',
      ja: '週末夜のドラゴンブリッジ火と水のショー',
    },
  },
  {
    value: 'Top 6',
    label: {
      vi: 'Bãi biển quyến rũ nhất hành tinh',
      en: 'Most Charming Beaches on Earth',
      ja: '世界で最も魅力的なビーチ6選',
    },
  },
];

export const landmarks: Landmark[] = [
  {
    id: 'dragon-bridge',
    number: '01',
    name: {
      vi: 'Cầu Rồng Sông Hàn',
      en: 'Dragon Bridge (Cầu Rồng)',
      ja: 'ドラゴンブリッジ（ロン橋）',
    },
    subtitle: {
      vi: 'Linh vật rồng vàng vươn mình ra biển lớn',
      en: 'The golden guardian dragon soaring toward the East Sea',
      ja: '東海へと飛翔する黄金の守護龍',
    },
    badge: {
      vi: 'Biểu tượng Thành phố',
      en: 'City Icon',
      ja: 'ダナンの象徴',
    },
    accentColor: 'yellow',
    bestTime: {
      vi: '21:00 Thứ 6, Thứ 7 & Chủ Nhật',
      en: '9:00 PM Fri, Sat & Sun',
      ja: '金・土・日曜 21:00',
    },
    location: {
      vi: 'Đường Nguyễn Văn Linh, Quận Hải Châu',
      en: 'Nguyen Van Linh St., Hai Chau District',
      ja: 'ハイチャウ区グエン・ヴァン・リン通り',
    },
    description: {
      vi: 'Cây cầu dài 666m mô phỏng hình dáng con rồng thời Lý uốn lượn rực rỡ qua sông Hàn. Mỗi tối cuối tuần, Bé Rồng lại trình diễn màn phun lửa (2 lượt, 9 lần mỗi lượt) và phun nước (3 lượt) khiến cả bầu trời đêm bừng sáng!',
      en: 'Spanning 666 meters across the Han River in the shape of a Ly-dynasty golden dragon. Every weekend night at 9:00 PM, the dragon breathes real fire and cooling mist over cheering crowds!',
      ja: 'ハン川に架かる全長666メートルの黄金の龍の橋。週末の夜21時になると、龍の口から本物の炎と水しぶきを噴き上げる大迫力のショーが開催されます！',
    },
    cuteTip: {
      vi: '💡 Mẹo nhỏ dễ thương: Đứng gần đầu cầu phía đường Trần Hưng Đạo nếu bạn muốn tắm mưa phun nước mát lạnh nhé!',
      en: '💡 Cute Tip: Stand near the eastern dragon head on Tran Hung Dao St. if you want a playful splash during the water show!',
      ja: '💡 ワンポイント：水しぶきを浴びたいなら、チャン・フン・ダオ通り側の龍の頭の近くが特等席です！',
    },
    visualType: 'dragon',
  },
  {
    id: 'golden-bridge',
    number: '02',
    name: {
      vi: 'Cầu Vàng — Bà Nà Hills',
      en: 'Golden Bridge — Ba Na Hills',
      ja: 'ゴールデンブリッジ（神の手の橋）',
    },
    subtitle: {
      vi: 'Dải lụa vàng được nâng niu giữa biển mây bồng bềnh',
      en: 'A golden ribbon cradled by giant mossy hands in the clouds',
      ja: '雲海の中で巨大な手が支える黄金の回廊',
    },
    badge: {
      vi: 'Tuyệt tác trên mây',
      en: 'Cloud Wonderland',
      ja: '雲上の絶景',
    },
    accentColor: 'blue',
    bestTime: {
      vi: '07:30 – 09:00 Sáng (Săn mây đẹp nhất)',
      en: '7:30 – 9:00 AM (Misty cloud hour)',
      ja: '朝 07:30〜09:00（雲海ベストタイム）',
    },
    location: {
      vi: 'Đỉnh Núi Chúa, Hòa Ninh, Hòa Vang (Độ cao 1.414m)',
      en: 'Nui Chua Peak, Hoa Vang (1,414m altitude)',
      ja: 'バナヒルズ標高1,414m地点',
    },
    description: {
      vi: 'Nằm ở độ cao hơn 1.400m so với mực nước biển, Cầu Vàng tựa như bước ra từ thế giới cổ tích với đôi bàn tay khổng lồ phủ rêu phong nâng đỡ lối đi vàng óng ánh giữa bốn mùa mây phủ.',
      en: 'Floating 1,414 meters above sea level, the Golden Bridge looks straight out of a fairytale—held aloft by two colossal, moss-weathered hands emerging from the mountain mist.',
      ja: '標高1,414メートルの雲の上に浮かぶおとぎ話のような橋。苔むした巨大な両手が黄金の歩道を優しく支える姿は、世界中で愛される絶景スポットです。',
    },
    cuteTip: {
      vi: '💡 Mẹo nhỏ dễ thương: Nhớ mang theo một chiếc áo khoác pastel mỏng vì trên đỉnh Bà Nà có4 mùa trong 1 ngày đó!',
      en: '💡 Cute Tip: Pack a cozy pastel cardigan—Ba Na Hills experiences all four seasons in a single day!',
      ja: '💡 ワンポイント：山頂は1日で四季が巡るほど涼しいので、パステルカラーの羽織ものをお忘れなく！',
    },
    visualType: 'golden',
  },
  {
    id: 'my-khe-beach',
    number: '03',
    name: {
      vi: 'Bãi Biển Mỹ Khê',
      en: 'My Khe Pastel Beach',
      ja: 'ミーケー・ビーチ',
    },
    subtitle: {
      vi: 'Cát trắng mịn như kem, sóng biển xanh ngọc dịu dàng',
      en: 'Powder-soft white sand and gentle turquoise waves',
      ja: '粉雪のような白砂とパステルブルーの穏やかな波',
    },
    badge: {
      vi: 'Thiên đường Biển xanh',
      en: 'Coastal Paradise',
      ja: '癒やしのビーチ',
    },
    accentColor: 'blue',
    bestTime: {
      vi: '05:15 Bình minh hoặc 16:30 Hoàng hôn',
      en: '5:15 AM Sunrise or 4:30 PM Golden Hour',
      ja: '日の出 05:15 または 夕方 16:30',
    },
    location: {
      vi: 'Đường Võ Nguyên Giáp, Quận Sơn Trà',
      en: 'Vo Nguyen Giap Coastal Blvd., Son Tra',
      ja: 'ソンチャ区ヴォー・グエン・ザップ海岸通り',
    },
    description: {
      vi: 'Được tạp chí Forbes bình chọn là một trong 6 bãi biển quyến rũ nhất hành tinh. Mỗi sớm bình minh, mặt biển Mỹ Khê chuyển màu từ hồng đào sang xanh pastel trong vắt, điểm xuyết những chiếc thuyền thúng tròn xoe.',
      en: 'Named by Forbes as one of the six most enchanting beaches on the planet. At dawn, the horizon melts from cotton-candy pink into crystal pastel blue dotted with round bamboo basket boats.',
      ja: 'フォーブス誌「世界の魅惑的なビーチ6選」に選ばれた名所。夜明けには空と海がピンクからパステルブルーへと染まり、丸い竹籠舟（トゥンチャイ）がぷかぷか浮かびます。',
    },
    cuteTip: {
      vi: '💡 Mẹo nhỏ dễ thương: Thử chèo SUP đón mặt trời mọc lúc 5h15 sáng, nước biển êm như mặt gương luôn!',
      en: '💡 Cute Tip: Try sunrise paddleboarding (SUP) at 5:15 AM when the ocean is calm like a pastel mirror!',
      ja: '💡 ワンポイント：朝5時15分の日の出SUP体験は、鏡のように穏やかな海の上を散歩できて最高です！',
    },
    visualType: 'mykhe',
  },
  {
    id: 'son-tra-peninsula',
    number: '04',
    name: {
      vi: 'Bán Đảo Sơn Trà & Chùa Linh Ứng',
      en: 'Son Tra Peninsula & Linh Ung Pagoda',
      ja: 'ソンチャ半島＆リンウン寺',
    },
    subtitle: {
      vi: 'Viên ngọc xanh ôm trọn vịnh biển và ngôi nhà của Voọc Chà Vá',
      en: 'Emerald forest sanctuary and home of the Red-shanked Douc Langur',
      ja: '緑豊かな森の宝石とアカアシドゥックラングールの故郷',
    },
    badge: {
      vi: 'Lá phổi Xanh Mint',
      en: 'Green Sanctuary',
      ja: '自然の宝庫',
    },
    accentColor: 'mint',
    bestTime: {
      vi: '15:30 – 17:30 Chiều mát',
      en: '3:30 – 5:30 PM Breezy Afternoon',
      ja: '午後 15:30〜17:30',
    },
    location: {
      vi: 'Bãi Bụt, Bán đảo Sơn Trà',
      en: 'Bai But, Son Tra Peninsula',
      ja: 'ソンチャ半島バイブット',
    },
    description: {
      vi: 'Nơi có tượng Phật Bà Quan Âm cao 67m hiền từ hướng mắt ra biển Đông cầu bình an cho ngư dân. Cung đường ven biển Sơn Trà còn là nơi sinh sống của loài "Nữ hoàng linh trưởng" Voọc Chà Vá chân nâu siêu đáng yêu.',
      en: 'Home to the serene 67-meter Lady Buddha watching over fishermen at sea, and winding coastal roads where rare, colorful Red-shanked Douc Langurs leap playfully through the treetops.',
      ja: '高さ67メートルの優しい微笑みのレディブッダ（観音像）が海を見守る聖地。「霊長類の女王」と呼ばれるカラフルで可愛いアカアシドゥックラングールにも出会えます。',
    },
    cuteTip: {
      vi: '💡 Mẹo nhỏ dễ thương: Giữ yên lặng và nhìn lên tán cây dọc sườn núi, bạn sẽ thấy các bé Voọc Chà Vá mặc "áo" 5 màu đó!',
      en: '💡 Cute Tip: Look quietly into the canopy along the mountain road to spot the 5-colored Douc Langurs waving!',
      ja: '💡 ワンポイント：山道では静かに木々を見上げてみて！5色の毛並みを持つ可愛いサルたちが顔を出してくれます。',
    },
    visualType: 'sontra',
  },
  {
    id: 'marble-mountains',
    number: '05',
    name: {
      vi: 'Danh Thắng Ngũ Hành Sơn',
      en: 'The Marble Mountains (Ngũ Hành Sơn)',
      ja: '五行山（マーブルマウンテン）',
    },
    subtitle: {
      vi: 'Năm ngọn núi Kim • Mộc • Thủy • Hỏa • Thổ kỳ ảo',
      en: 'Five mystical limestone peaks named after the five elements',
      ja: '金・木・水・火・土の五つの神秘的な大理石の山',
    },
    badge: {
      vi: 'Kỳ quan Cẩm thạch',
      en: 'Mystic Caves',
      ja: '神秘の洞窟と石山',
    },
    accentColor: 'mint',
    bestTime: {
      vi: '08:00 – 10:30 Sáng (Ánh nắng chiếu vào động Huyền Không)',
      en: '8:00 – 10:30 AM (Sunbeams inside Huyen Khong Cave)',
      ja: '朝 08:00〜10:30（洞窟に光の柱が差し込む時間）',
    },
    location: {
      vi: '81 Huyền Trân Công Chúa, Quận Ngũ Hành Sơn',
      en: '81 Huyen Tran Cong Chua St., Ngu Hanh Son',
      ja: 'グーハンソン区フエン・チャン・コン・チュア通り81番',
    },
    description: {
      vi: 'Quần thể 5 ngọn núi đá vôi cẩm thạch mọc lên giữa vùng cát ven biển. Khi nắng sớm chiếu qua vòm đá Động Huyền Không, từng luồng sáng lung linh rọi xuống tạo nên khung cảnh huyền diệu như phim hoạt hình.',
      en: 'Five marble and limestone hills rising above the coastal sand. In the morning, natural skylights in Huyen Khong Cave cast dreamy beams of sunlight straight into the mossy cavern.',
      ja: '海岸近くにそびえる5つの大理石の山。午前中にフエンコン洞窟を訪れると、天井の穴から神秘的な光のスポットライトが差し込み、まるでアニメの世界のような美しさです。',
    },
    cuteTip: {
      vi: '💡 Mẹo nhỏ dễ thương: Có thang máy kính trong suốt đưa bạn lên ngọn Thủy Sơn cực kỳ nhẹ nhàng luôn nha!',
      en: '💡 Cute Tip: There is a scenic glass elevator up Thuy Son peak if you want to save your legs for exploring caves!',
      ja: '💡 ワンポイント：ガラス張りのエレベーターでトゥイソン（水山）の上までらくらく登れますよ！',
    },
    visualType: 'marble',
  },
  {
    id: 'love-bridge',
    number: '06',
    name: {
      vi: 'Cầu Tình Yêu & Cá Chép Hóa Rồng',
      en: 'Love Bridge & Dragon Carp Statue',
      ja: '愛の桟橋＆龍魚像（マーライオン風）',
    },
    subtitle: {
      vi: 'Hàng trăm chiếc đèn lồng trái tim đỏ hồng soi bóng sông Hàn',
      en: 'Heart-shaped lanterns glowing softly over the Han River',
      ja: 'ハートのランタンが川面に揺れるロマンチックな散歩道',
    },
    badge: {
      vi: 'Góc Check-in Ngọt ngào',
      en: 'Sweet Romance',
      ja: 'ときめきスポット',
    },
    accentColor: 'pink',
    bestTime: {
      vi: '18:00 – 22:00 Tối (Khi đèn lồng trái tim bật sáng)',
      en: '6:00 – 10:00 PM (When heart lanterns glow)',
      ja: '夜 18:00〜22:00（ハート型ランタン点灯時）',
    },
    location: {
      vi: 'Đường Trần Hưng Đạo, bờ Đông sông Hàn',
      en: 'Tran Hung Dao St., East Bank of Han River',
      ja: 'ハン川東岸チャン・フン・ダオ通り',
    },
    description: {
      vi: 'Cây cầu hình vòng cung vươn ra giữa sông Hàn với những trụ đèn lồng hình trái tim hồng rực rỡ, ngay sát bên tượng Cá Chép Hóa Rồng biểu trưng cho sự may mắn, kiên trì và thịnh vượng của người Đà Nẵng.',
      en: 'An enchanting arc-shaped pier adorned with glowing heart-shaped lanterns right beside the marble Dragon-Carp statue—symbolizing good fortune, perseverance, and warm Da Nang hospitality.',
      ja: 'ハン川に張り出した弧を描く桟橋に、可愛いハート型の赤いランタンが並びます。隣には幸運と飛躍を象徴する「鯉の滝登り（龍魚像）」が立ち、夜のお散歩にぴったり！',
    },
    cuteTip: {
      vi: '💡 Mẹo nhỏ dễ thương: Đây cũng là góc chụp ảnh thấy trọn cả Cầu Rồng ở phía sau siêu xinh!',
      en: '💡 Cute Tip: This pier gives you the cutest photo angle with the entire Dragon Bridge glowing right behind you!',
      ja: '💡 ワンポイント：ハートのランタン越しにドラゴンブリッジ全体を写せる最高のフォトスポットです！',
    },
    visualType: 'love',
  },
];

export const foods: FoodItem[] = [
  {
    id: 'mi-quang',
    name: {
      vi: 'Mì Quảng Tôm Thịt Trứng Cút',
      en: 'Mi Quang (Turmeric Rice Noodles)',
      ja: 'ミークアン（ダナン名物ターメリック麺）',
    },
    pronunciation: 'Mì Quảng • /mì kwǎːŋ/',
    priceRange: '35.000đ – 55.000đ',
    tag: {
      vi: 'Linh hồn ẩm thực xứ Quảng',
      en: 'Soul of Central Vietnam',
      ja: 'ダナン不動のソウルフード',
    },
    description: {
      vi: 'Sợi mì gạo vàng óng ả chan chút nước nhân đậm đà vừa xâm xấp, ăn kèm tôm tươi, thịt xíu, trứng cút, đậu phộng rang thơm lừng và bánh tráng mè nướng bẻ giòn rụm!',
      en: 'Golden turmeric rice noodles served with a rich, concentrated broth, plump shrimp, pork, quail eggs, roasted peanuts, fresh herbs, and crispy sesame rice crackers!',
      ja: 'ウコンで色づいた平打ち米麺に、旨味たっぷりの少なめスープ、海老・豚肉・うずら卵・香ばしいピーナッツとパリパリの胡麻せんべいを割り入れて楽しむ絶品麺！',
    },
    whereToEat: {
      vi: '📍 Gợi ý: Mì Quảng Bà Mua, Mì Quảng 1A Hải Phòng, Mì Quảng Thi',
      en: '📍 Best spots: Mi Quang Ba Mua, Mi Quang 1A Hai Phong, Mi Quang Thi',
      ja: '📍 おすすめ店：Mì Quảng Bà Mua、Mì Quảng 1A Hải Phòng',
    },
    accentColor: 'yellow',
    visualType: 'miquang',
  },
  {
    id: 'banh-trang-thit-heo',
    name: {
      vi: 'Bánh Tráng Cuốn Thịt Heo Hai Đầu Da',
      en: 'Pork Belly & Fresh Herb Rice Paper Rolls',
      ja: '豚バラ肉と高原野菜のライスペーパー巻き',
    },
    pronunciation: 'Bánh Tráng Thịt Heo',
    priceRange: '60.000đ – 120.000đ',
    tag: {
      vi: 'Chấm Mắm Nêm Thần Thánh',
      en: 'Iconic Fermented Anchovy Dip',
      ja: '特製マムネムだれが決め手',
    },
    description: {
      vi: 'Lát thịt heo luộc hai đầu da mềm mọng cuốn cùng bánh tráng phơi sương, bánh ướt mỏng và đĩa rau sống 10 loại xanh mướt, chấm đẫm chén mắm nêm dứa thơm nồng khó cưỡng.',
      en: 'Tender steamed pork with delicate two-end skin wrapped in soft rice paper with 10 varieties of crisp garden herbs, dipped into pineapple-infused savory mam nem sauce.',
      ja: 'しっとり茹で上げた皮付き豚肉を、10種類の新鮮なハーブ野菜と一緒に柔らかいライスペーパーで巻き、パイナップル入りの濃厚発酵ダレにつけて頬張る幸せの味！',
    },
    whereToEat: {
      vi: '📍 Gợi ý: Quán Trần, Quán Mậu (Đỗ Thúc Tịnh), Đại Lộc',
      en: '📍 Best spots: Quan Tran, Quan Mau (Do Thuc Tinh St.), Dai Loc',
      ja: '📍 おすすめ店：Quán Trần、Quán Mậu',
    },
    accentColor: 'mint',
    visualType: 'banhtrang',
  },
  {
    id: 'banh-xeo-nem-lui',
    name: {
      vi: 'Bánh Xèo Tôm Nhảy & Nem Lụi Nướng',
      en: 'Crispy Jumping-Shrimp Crepes & Lemongrass Skewers',
      ja: 'パリパリ・バインセオ＆炭火焼ネムルイ',
    },
    pronunciation: 'Bánh Xèo & Nem Lụi',
    priceRange: '40.000đ – 80.000đ',
    tag: {
      vi: 'Giòn Rụm Nóng Hổi',
      en: 'Crispy & Sizzling',
      ja: 'アツアツ・サクサク食感',
    },
    description: {
      vi: 'Chiếc bánh xèo miền Trung nhỏ xinh vàng ruộm kêu "xèo xèo" giòn tan trên chảo nóng, kết hợp cùng nem lụi nướng sả thơm nức mũi và nước tương gan đậu phộng béo ngậy.',
      en: 'Bite-sized golden sizzling crepes packed with fresh river shrimp and bean sprouts, paired with smoky lemongrass pork skewers and a creamy peanut-sesame dipping sauce.',
      ja: '小ぶりでサクサクに焼き上げた黄金のバインセオと、レモングラスが香る炭火焼つくね（ネムルイ）。濃厚なピーナッツソースとの相性が抜群です！',
    },
    whereToEat: {
      vi: '📍 Gợi ý: Bánh Xèo Bà Dưỡng (K280/23 Hoàng Diệu), Bánh Xèo Cô Mười',
      en: '📍 Best spots: Banh Xeo Ba Duong (K280/23 Hoang Dieu), Co Muoi',
      ja: '📍 おすすめ店：Bánh Xèo Bà Dưỡng（ホアンジエウ通り路地裏の名店）',
    },
    accentColor: 'yellow',
    visualType: 'banhxeo',
  },
  {
    id: 'hai-san-da-nang',
    name: {
      vi: 'Hải Sản Biển Tươi Sống Đà Nẵng',
      en: 'Freshly Caught East Sea Seafood Feast',
      ja: '獲れたて新鮮！ダナン海の幸パラダイス',
    },
    pronunciation: 'Hải Sản Sơn Trà',
    priceRange: '120.000đ – 350.000đ',
    tag: {
      vi: 'Ngọt Tươi Vị Biển',
      en: 'Ocean-to-Table Fresh',
      ja: '漁港直送の贅沢',
    },
    description: {
      vi: 'Từ chíp chíp hấp sả ớt, ốc hương xào bơ tỏi, mực một nắng nướng sa tế đến tôm hùm, cua rang me — hải sản Đà Nẵng vừa đánh bắt từ thuyền về nên ngọt lịm tự nhiên.',
      en: 'From lemongrass-steamed clams and garlic-butter sea snails to grilled sun-dried squid and tamarind crab—picked straight from coastal fishing boats.',
      ja: 'レモングラス蒸しアサリ、ガーリックバター巻貝、イカの炭火焼きからタマリンドクラブまで、海辺の街ならではの獲れたてシーフードを満喫！',
    },
    whereToEat: {
      vi: '📍 Gợi ý: Hải sản Bé Mặn, Năm Đảnh, Thời Cổ (dọc biển Mỹ Khê - Sơn Trà)',
      en: '📍 Best spots: Be Man Seafood, Nam Danh, Thoi Co along My Khe coast',
      ja: '📍 おすすめ店：Bé Mặn、Năm Đảnh（ミーケー海岸エリア）',
    },
    accentColor: 'blue',
    visualType: 'haisan',
  },
  {
    id: 'che-xoa-xoa-kem-bo',
    name: {
      vi: 'Chè Xoa Xoa Hạt Lựu & Kem Bơ Cô Vân',
      en: 'Xoa Xoa Jelly Sweet Soup & Avocado Coconut Ice Cream',
      ja: 'チェー・ソアソア＆濃厚アボカドココナッツアイス',
    },
    pronunciation: 'Chè Xoa Xoa • Kem Bơ',
    priceRange: '15.000đ – 30.000đ',
    tag: {
      vi: 'Ngọt Mát Giải Nhiệt',
      en: 'Sweet Pastel Dessert',
      ja: 'ひんやり可愛いご当地スイーツ',
    },
    description: {
      vi: 'Ly kem bơ xanh bơ mịn màng phủ kem dừa trắng muốt và dừa khô giòn tan ở chợ Bắc Mỹ An, hay ly chè xoa xoa hạt lựu hồng phấn mát lạnh giải nhiệt ngày hè Đà Nẵng!',
      en: 'Velvety whipped avocado topped with coconut ice cream and toasted coconut flakes at Bac My An Market, alongside ruby-pink water-chestnut pearls in chilled coconut milk!',
      ja: 'バックミーアン市場名物のクリーミーなアボカド＆ココナッツアイスや、ルビー色のタピオカと海藻ゼリーが入った「チェー・ソアソア」は見た目も味も最高にキュート！',
    },
    whereToEat: {
      vi: '📍 Gợi ý: Kem Bơ Cô Vân (Chợ Bắc Mỹ An), Chè Xuân Trang (Lê Duẩn)',
      en: '📍 Best spots: Kem Bo Co Van (Bac My An Market), Che Xuan Trang',
      ja: '📍 おすすめ店：バックミーアン市場 Kem Bơ Cô Vân、Chè Xuân Trang',
    },
    accentColor: 'pink',
    visualType: 'che',
  },
];

export const timeline24h: TimelineStop[] = [
  {
    time: '05:30',
    period: 'dawn',
    title: {
      vi: 'Đón Bình Minh Pastel Trên Biển Mỹ Khê',
      en: 'Catch the Pastel Sunrise at My Khe Beach',
      ja: 'ミーケービーチでパステル色の日の出をお出迎え',
    },
    place: {
      vi: '🏖️ Bãi biển Mỹ Khê & Công viên Biển Đông',
      en: '🏖️ My Khe Beach & East Sea Park',
      ja: '🏖️ ミーケー・ビーチ＆東海公園',
    },
    description: {
      vi: 'Dạo chân trần trên cát mịn, ngắm đàn chim bồ câu tung cánh ở Công viên Biển Đông và chèo SUP khi mặt trời nhuộm hồng cả mặt biển.',
      en: 'Walk barefoot on cool white sand, feed the friendly pigeons at East Sea Park, and paddleboard as the sky turns pastel pink and sky blue.',
      ja: '素足で白い砂浜を歩き、東海公園のハトたちと触れ合いながら、空と海がピンクと水色に染まる魔法の時間を楽しみます。',
    },
    badge: {
      vi: 'Bình minh dịu êm 🌅',
      en: 'Golden Dawn 🌅',
      ja: '爽やかな朝 🌅',
    },
  },
  {
    time: '08:30',
    period: 'morning',
    title: {
      vi: 'Thưởng Thức Mì Quảng & Lên Đỉnh Bà Nà Săn Mây',
      en: 'Slurp Mi Quang & Ride the Cable Car to Golden Bridge',
      ja: 'ミークアンの朝食＆世界最長級ロープウェイで雲上の橋へ',
    },
    place: {
      vi: '🍜 Phố Hải Phòng → ☁️ Cầu Vàng Bà Nà Hills',
      en: '🍜 Hai Phong St. → ☁️ Golden Bridge, Ba Na Hills',
      ja: '🍜 市内で朝食 → ☁️ バナヒルズ・ゴールデンブリッジ',
    },
    description: {
      vi: 'Nạp năng lượng bằng tô Mì Quảng nóng hổi và ly cà phê muối béo thơm, sau đó ngồi cáp treo xuyên qua tầng mây lên check-in Cầu Vàng.',
      en: 'Fuel up with a steaming bowl of Mi Quang and salted cream coffee, then glide above waterfalls by cable car to walk across the Golden Bridge.',
      ja: '熱々のミークアンと塩クリームコーヒーで元気をチャージしたら、ロープウェイで雲を突き抜け、黄金の橋でお散歩！',
    },
    badge: {
      vi: 'Phiêu lưu trên mây ☁️',
      en: 'Cloud Adventure ☁️',
      ja: '雲の上の冒険 ☁️',
    },
  },
  {
    time: '15:30',
    period: 'afternoon',
    title: {
      vi: 'Vi Vu Cung Đường Xanh Bán Đảo Sơn Trà',
      en: 'Cruise the Coastal Curve of Son Tra Peninsula',
      ja: 'ソンチャ半島の絶景海岸ドライブ＆リンウン寺参拝',
    },
    place: {
      vi: '🌿 Chùa Linh Ứng & Đỉnh Bàn Cờ',
      en: '🌿 Linh Ung Pagoda & Ban Co Peak',
      ja: '🌿 リンウン寺＆バンコー峰',
    },
    description: {
      vi: 'Hóng gió biển mát rượi trên cung đường ôm trọn vịnh Đà Nẵng, ghé thăm Chùa Linh Ứng và ngắm toàn cảnh thành phố từ Đỉnh Bàn Cờ.',
      en: 'Feel the ocean breeze along the emerald peninsula road, visit the 67m Lady Buddha, and take in the panoramic bay view from Ban Co Peak.',
      ja: '海風を感じながら半島を一周し、67mの観音像にお参り。バンコー峰からはダナンの街と湾を一望できます。',
    },
    badge: {
      vi: 'Chiều gió lộng 🍃',
      en: 'Breezy Afternoon 🍃',
      ja: '癒やしの午後 🍃',
    },
  },
  {
    time: '21:00',
    period: 'night',
    title: {
      vi: 'Xem Cầu Rồng Phun Lửa & Dạo Đêm Sông Hàn',
      en: 'Watch Dragon Bridge Breathe Fire & Cruise Han River',
      ja: 'ドラゴンブリッジの火と水のショー＆夜のハン川散策',
    },
    place: {
      vi: '🐉 Cầu Rồng • Cầu Tình Yêu • Chợ Đêm Sơn Trà',
      en: '🐉 Dragon Bridge • Love Bridge • Son Tra Night Market',
      ja: '🐉 ドラゴンブリッジ・愛の桟橋・ソンチャナイトマーケット',
    },
    description: {
      vi: 'Cùng hàng ngàn du khách reo hò khi Bé Rồng phun lửa và nước lúc 21:00, chụp ảnh đèn lồng trái tim tại Cầu Tình Yêu và thưởng thức hải sản đêm.',
      en: 'Cheer as the Dragon Bridge breathes fire and mist at 9:00 PM, stroll under glowing heart lanterns at Love Bridge, and feast at Son Tra Night Market.',
      ja: '21時ちょうどに龍が炎と水を噴き上げるショーに大歓声！ハートのランタンが輝く愛の桟橋を歩き、ナイトマーケットで夜食を満喫。',
    },
    badge: {
      vi: 'Đêm lung linh ✨',
      en: 'Sparkling Night ✨',
      ja: 'きらめく夜 ✨',
    },
  },
];

export const uiText = {
  brandSub: {
    vi: 'Cẩm Nang Hoạt Hình Dễ Thương',
    en: 'Cute Illustrated City Guide',
    ja: 'かわいいイラスト観光ガイド',
  },
  nav: {
    landmarks: {
      vi: '🗺️ Điểm Đến',
      en: '🗺️ Landmarks',
      ja: '🗺️ 名所ガイド',
    },
    food: {
      vi: '🍜 Ẩm Thực',
      en: '🍜 Foodie Passport',
      ja: '🍜 グルメスタンプ',
    },
    timeline: {
      vi: '⏰ 24h Vi Vu',
      en: '⏰ 24h Itinerary',
      ja: '⏰ 24時間プラン',
    },
    postcard: {
      vi: '💌 Thiệp Mời',
      en: '💌 Postcard',
      ja: '💌 ポストカード',
    },
  },
  hero: {
    pill: {
      vi: '✨ Chào mừng bạn đến với thành phố đáng sống nhất Việt Nam!',
      en: '✨ Welcome to Vietnam’s Most Livable Coastal City!',
      ja: '✨ ベトナムで最も住みやすい海辺の街・ダナンへようこそ！',
    },
    titleLine1: {
      vi: 'Xin chào!',
      en: 'Say Hello to',
      ja: 'こんにちは！',
    },
    titleHighlight: {
      vi: 'Đà Nẵng 🐉🏖️',
      en: 'Đà Nẵng 🐉🏖️',
      ja: 'ダナン 🐉🏖️',
    },
    subtitle: {
      vi: 'Nơi có Bé Rồng phun lửa bên dòng sông Hàn lấp lánh, bãi biển Mỹ Khê xanh pastel dịu dàng, những đám mây bồng bềnh trên Cầu Vàng và vô vàn món ngon xứ Quảng đang chờ bạn khám phá!',
      en: 'Where a friendly golden dragon breathes fire over the Han River, pastel turquoise waves kiss My Khe Beach, clouds hug the Golden Bridge, and unforgettable Central Vietnamese flavors await!',
      ja: 'ハン川で黄金の龍が火を噴き、パステルブルーの波がミーケービーチを包み、雲の上のゴールデンブリッジや絶品グルメがあなたを待っています！',
    },
    btnFire: {
      vi: '🔥 Cho Bé Rồng Phun Lửa!',
      en: '🔥 Breathe Dragon Fire!',
      ja: '🔥 龍に炎を噴かせる！',
    },
    btnWater: {
      vi: '💧 Cho Bé Rồng Phun Nước!',
      en: '💧 Splash Dragon Water!',
      ja: '💧 龍に水を噴かせる！',
    },
    btnDayNight: {
      vi: '🌤️ Đổi Ngày / Đêm Sông Hàn',
      en: '🌤️ Toggle Day / Night Sky',
      ja: '🌤️ 昼と夜の空を切り替え',
    },
    dragonMoodIdle: {
      vi: '🐉 Bé Rồng đang mỉm cười chào bạn! Hãy bấm nút bên dưới để xem biểu diễn nhé~',
      en: '🐉 Baby Dragon is smiling at you! Click the buttons below for a magic show~',
      ja: '🐉 ベビードラゴンがニコニコ手を振っています！下のボタンを押してショーを見よう〜',
    },
    dragonMoodFire: {
      vi: '🔥 PHÙÙÙ! Bé Rồng vừa phun lửa ấm áp & pháo hoa trái tim chúc bạn chuyến đi rực rỡ!',
      en: '🔥 WHOOSH! Baby Dragon breathed cozy fire & heart sparks for your trip!',
      ja: '🔥 ボォォー！ベビードラゴンがハートと炎のショーであなたの旅を祝福しています！',
    },
    dragonMoodWater: {
      vi: '💧 ÀOOO! Mưa bong bóng nước mát lạnh từ sông Hàn giúp bạn xua tan cái nắng mùa hè!',
      en: '💧 SPLASH! Cooling pastel water bubbles from the Han River refresh your summer day!',
      ja: '💧 ザブーン！ハン川の涼しいシャボン玉スプラッシュで気分もリフレッシュ！',
    },
  },
  landmarksSection: {
    tag: {
      vi: '🗺️ BẢN ĐỒ ĐIỂM ĐẾN ĐÁNG YÊU',
      en: '🗺️ CUTE ILLUSTRATED LANDMARKS',
      ja: '🗺️ イラストで見るダナン6大名所',
    },
    title: {
      vi: '6 Biểu Tượng Không Thể Bỏ Lỡ Tại Đà Nẵng',
      en: '6 Unmissable Wonders of Da Nang',
      ja: 'ダナンに来たら絶対外せない6つのシンボル',
    },
    subtitle: {
      vi: 'Mỗi góc phố, cây cầu và bãi biển ở Đà Nẵng đều mang một sắc màu pastel dịu dàng. Di chuột hoặc chạm vào từng thẻ để xem hiệu ứng hoạt hình nhé!',
      en: 'Every bridge, mountain, and beach in Da Nang carries its own pastel charm. Hover or tap each illustrated card to see it come alive!',
      ja: 'ダナンの橋や海、山々はどれも優しいパステルカラー。カードに触れて可愛いアニメーションを楽しんでね！',
    },
    bestTimeLabel: {
      vi: '⏰ Giờ đẹp nhất:',
      en: '⏰ Best time:',
      ja: '⏰ ベストタイム:',
    },
  },
  foodSection: {
    tag: {
      vi: '🍜 HỘ CHIẾU ẨM THỰC ĐÀ NẴNG',
      en: '🍜 DA NANG FOODIE STAMP PASSPORT',
      ja: '🍜 ダナン食いしん坊スタンプパスポート',
    },
    title: {
      vi: 'Đóng Dấu 5 Món Ngon Nức Tiếng Xứ Quảng',
      en: 'Collect Stamps for 5 Iconic Da Nang Delicacies',
      ja: 'ダナン名物グルメ5選のスタンプを集めよう！',
    },
    subtitle: {
      vi: 'Bấm vào nút "Thưởng thức ngay! 😋" trên từng món ăn để đóng dấu mộc vào hộ chiếu ẩm thực của bạn. Sưu tầm đủ 5/5 dấu để nhận danh hiệu Thực Thần Đà Nẵng nhé!',
      en: 'Click "Taste & Stamp! 😋" on each dish to stamp your personal Da Nang Foodie Passport. Collect all 5/5 stamps to unlock the Master Foodie badge!',
      ja: '各料理の「食べてスタンプ！😋」ボタンを押して、パスポートにスタンプを押そう！5つ全部集めると「ダナン美食マスター」の称号をゲット！',
    },
    progressTitle: {
      vi: 'Tiến độ Hộ Chiếu Ẩm Thực của bạn:',
      en: 'Your Foodie Passport Progress:',
      ja: 'あなたのグルメスタンプ進捗：',
    },
    stampBtn: {
      vi: '🍽️ Thưởng thức & Đóng dấu!',
      en: '🍽️ Taste & Stamp!',
      ja: '🍽️ 食べてスタンプを押す！',
    },
    stampedBtn: {
      vi: '💖 Đã Thưởng Thức Ngon Tuyệt!',
      en: '💖 Tasted & Stamped!',
      ja: '💖 ごちそうさま！スタンプ済',
    },
    stampBadge: {
      vi: 'ĐÃ MĂM MĂM ♥',
      en: 'YUMMY STAMP ♥',
      ja: 'おいしかった ♥',
    },
    congratsBadge: {
      vi: '🏆 Chúc mừng! Bạn đã đạt danh hiệu "Thực Thần Đà Nẵng Chính Hiệu 100%"!',
      en: '🏆 Congrats! You unlocked the "100% Certified Da Nang Master Foodie" title!',
      ja: '🏆 おめでとうございます！「100%公認ダナン美食マスター」の称号を獲得しました！',
    },
    resetBtn: {
      vi: 'Làm mới hộ chiếu ↺',
      en: 'Reset passport ↺',
      ja: 'スタンプをリセット ↺',
    },
  },
  timelineSection: {
    tag: {
      vi: '⏰ LỊCH TRÌNH GỢI Ý HOÀN HẢO',
      en: '⏰ PERFECT 1-DAY ITINERARY',
      ja: '⏰ 1日満喫モデルコース',
    },
    title: {
      vi: '24 Giờ Yêu Trọn Đà Nẵng Từ Bình Minh Đến Đêm Sông Hàn',
      en: '24 Hours ofFalling in Love with Da Nang',
      ja: '日の出から夜景まで！24時間ダナン満喫プラン',
    },
    subtitle: {
      vi: 'Lịch trình nhẹ nhàng, thư thả giúp bạn vừa tắm biển, săn mây, thưởng thức đặc sản và xem Cầu Rồng phun lửa trong cùng một ngày.',
      en: 'A breezy, well-paced itinerary letting you catch the beach sunrise, walk in the clouds, feast on local food, and watch the Dragon Bridge show.',
      ja: 'ビーチの日の出から雲上の橋、ローカルグルメ、夜のドラゴンショーまで1日で無理なく巡れるおすすめコースです。',
    },
  },
  postcardSection: {
    tag: {
      vi: '💌 THIỆP MỜI TỪ ĐÀ NẴNG',
      en: '💌 A POSTCARD FROM DA NANG',
      ja: '💌 ダナンからの招待状',
    },
    title: {
      vi: 'Đà Nẵng Luôn Mở Rộng Vòng Tay Chào Đón Bạn!',
      en: 'Da Nang Always Welcomes You with Warm Smiles!',
      ja: 'ダナンはいつでも温かい笑顔であなたを待っています！',
    },
    message: {
      vi: 'Dù bạn đến Đà Nẵng để ngắm bình minh pastel trên biển Mỹ Khê, săn mây trên đỉnh Bà Nà hay chỉ đơn giản là ngồi bên bờ sông Hàn thưởng thức ly nước mía mát lạnh — thành phố biển hiền hòa này luôn dành cho bạn những kỷ niệm ngọt ngào nhất.',
      en: 'Whether you visit for the pastel sunrise over My Khe Beach, the misty clouds of Ba Na Hills, or a breezy evening by the Han River—this gentle coastal city promises your sweetest travel memories.',
      ja: 'ミーケービーチのパステル色の朝日も、バナヒルズの雲海も、ハン川の優しい夜風も。この穏やかな海辺の街で、とびきり素敵な思い出が作れますように。',
    },
    sendLoveBtn: {
      vi: '💖 Thả Tim Cho Đà Nẵng',
      en: '💖 Send Love to Da Nang',
      ja: '💖 ダナンにハートを送る',
    },
    backToTop: {
      vi: 'Bay lên đầu trang ↑',
      en: 'Back to top ↑',
      ja: 'ページトップへ戻る ↑',
    },
  },
};
