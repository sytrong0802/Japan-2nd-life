import type { Locale } from "@/src/config/site";

export type CategoryKey =
  | "appliances"
  | "kitchen"
  | "home"
  | "electronics"
  | "tools"
  | "outdoor";

export type Product = {
  id: string;
  code: string;
  category: CategoryKey;
  status: "in_stock" | "sold_out";
  price: number | null;
  currency: string;
  image: string;
  name: Record<Locale, string>;
  short: Record<Locale, string>;
  description: Record<Locale, string>;
  specs: Array<{ label: Record<Locale, string>; value: Record<Locale, string> }>;
};

export const productCategories: Array<{ key: CategoryKey; name: Record<Locale, string> }> = [
  {
    key: "appliances",
    name: { lo: "ເຄື່ອງໃຊ້ງານອາຫານ", vi: "Thiết bị gia dụng" },
  },
  {
    key: "kitchen",
    name: { lo: "ເຄື່ອງຄົວ", vi: "Dụng cụ nhà bếp" },
  },
  {
    key: "home",
    name: { lo: "ເຄື່ອງໃຊ້ງານໃນບ້ານ", vi: "Đồ gia dụng" },
  },
  {
    key: "electronics",
    name: { lo: "ເຄື່ອງໄຟຟ້າ", vi: "Điện tử" },
  },
  {
    key: "tools",
    name: { lo: "ເຄື່ອງມື", vi: "Dụng cụ" },
  },
  {
    key: "outdoor",
    name: { lo: "ເຄື່ອງຂັດແຍກພາຍນອກ", vi: "Dụng cụ ngoài trời" },
  },
];

export const products: Product[] = [
  {
    id: "JP-001",
    code: "JP-001",
    category: "appliances",
    status: "in_stock",
    price: 4200000,
    currency: "VND",
    image: "/images/product-fridge.svg",
    name: {
      lo: "ເຄື່ອງເຢັນລົດທີ່ມີຂະຫນາດນ້ອຍ",
      vi: "Tủ lạnh mini Sakura",
    },
    short: {
      lo: "ມີຄວາມເຢັນໄວ, ໄດ້ຮັບການເບິ່ງເລືອກແລ້ວ.",
      vi: "Mát nhanh, tiện lợi cho căn bếp nhỏ.",
    },
    description: {
      lo: "ເຄື່ອງເຢັນຫຼືເຄື່ອງໃຊ້ງານທີ່ເປັນຄູ່ກັບບ້ານທີ່ມີຊ່ອງຫວ່າງເລື່ອກ. ຊອກຫາຂໍ້ມູນເພື່ອຮັບປະກັນການນໍາໃຊ້ທີ່ດີ." ,
      vi: "Tủ lạnh mini dùng cho căn bếp nhỏ, phòng trọ hoặc không gian lưu trữ phụ. Dễ vận hành, tiết kiệm diện tích và phù hợp cho nhu cầu thực tế.",
    },
    specs: [
      { label: { lo: "ຂະໜາດ", vi: "Kích thước" }, value: { lo: "120L", vi: "120L" } },
      { label: { lo: "ເຮັດວຽກ", vi: "Hoạt động" }, value: { lo: "220V", vi: "220V" } },
    ],
  },
  {
    id: "JP-002",
    code: "JP-002",
    category: "kitchen",
    status: "in_stock",
    price: 6500000,
    currency: "VND",
    image: "/images/product-hood.svg",
    name: {
      lo: "ເຄື່ອງກວດສຽງເບື້ອງອົດທີ່ມີຂະຫນາດເລື່ອກ",
      vi: "Tủ hút mùi mini",
    },
    short: {
      lo: "ຕົກເອົາມູມກາງ, ມີປະສິດທິພາບດີ.",
      vi: "Thiết kế gọn, hút mùi hiệu quả cho bếp nhỏ.",
    },
    description: {
      lo: "ເຄື່ອງຮັດມືໄຟຟ້າທີ່ເຮັດວຽກໄດ້ດີເພື່ອເສີມມວນຄວາມຊັບຊວງໃນບ້ານ. ໂດຍມີຄວາມປອດໄພໃນການໃຊ້ງານ.",
      vi: "Thiết bị hút mùi cho căn bếp hiện đại, hoạt động ổn định và phù hợp với không gian vừa và nhỏ.",
    },
    specs: [
      { label: { lo: "ຄວາມໄວ", vi: "Công suất" }, value: { lo: "700W", vi: "700W" } },
      { label: { lo: "ລະດັບ", vi: "Chất liệu" }, value: { lo: "ອາລູມິນຽມ", vi: "Nhôm" } },
    ],
  },
  {
    id: "JP-003",
    code: "JP-003",
    category: "home",
    status: "in_stock",
    price: 7800000,
    currency: "VND",
    image: "/images/product-washer.svg",
    name: {
      lo: "ເຄື່ອງຫວຽດສິ່ງທີ່ມີເຄື່ອງລຶບ",
      vi: "Máy giặt Nhật",
    },
    short: {
      lo: "ມີຄຸນນະພາບເປັນທີ່ຮູ້ຈັກ, ເຮັດວຽກໄດ້ຫຼາຍ.",
      vi: "Hàng Nhật đã qua sử dụng, vận hành ổn định và tiện dụng.",
    },
    description: {
      lo: "ເຄື່ອງຫວຽດໂດຍມີການປະຕິບັດທີ່ມີເຄື່ອງຊ່ຽວຫາຍ. ເຮັດວຽກດີເພື່ອປຸກຫຸ່ມການສະຫຼາຍໃນບ້ານ.",
      vi: "Máy giặt theo tiêu chuẩn Nhật, hoạt động ổn định và phù hợp cho nhu cầu sinh hoạt gia đình.",
    },
    specs: [
      { label: { lo: "ຄວາມຈ໋າ", vi: "Dung tích" }, value: { lo: "7kg", vi: "7kg" } },
      { label: { lo: "ຊີວິດ", vi: "Tình trạng" }, value: { lo: "ທີ່ໃຊ້ງານດີ", vi: "Sử dụng tốt" } },
    ],
  },
  {
    id: "JP-004",
    code: "JP-004",
    category: "electronics",
    status: "in_stock",
    price: null,
    currency: "VND",
    image: "/images/product-air.svg",
    name: {
      lo: "ເຄື່ອງລະບາຍອາກາດ",
      vi: "Máy lọc không khí",
    },
    short: {
      lo: "ສຽງຫນ້ອຍ, ເຮັດວຽກຄູ່ເຊື່ອມຕໍ່.",
      vi: "Tiếng êm, vận hành ổn định, phù hợp không gian sống.",
    },
    description: {
      lo: "ເຄື່ອງລະບາຍອາກາດທີ່ໃຊ້ເວລາໃນທົ່ວໄປ, ມີການຄົ້ນຫາເພື່ອປັບປຸງຄວາມສະຫງົບຂອງບ້ານ.",
      vi: "Máy lọc không khí cho không gian sống, giúp không khí trong lành hơn và tiện dụng cho gia đình." ,
    },
    specs: [
      { label: { lo: "ຄວາມຮູ້", vi: "Lọc bụi" }, value: { lo: "HEPA", vi: "HEPA" } },
      { label: { lo: "ຮູບແບບ", vi: "Kiểu" }, value: { lo: "ເຊັນເປີ", vi: "Cao cấp" } },
    ],
  },
  {
    id: "JP-005",
    code: "JP-005",
    category: "kitchen",
    status: "sold_out",
    price: 2600000,
    currency: "VND",
    image: "/images/product-rice.svg",
    name: {
      lo: "ເຄື່ອງກົມເອົາເຂົ້າຫຼືໃຫຍ່",
      vi: "Nồi cơm điện Nhật",
    },
    short: {
      lo: "ຈຳເປັນສໍາລັບບ້ານເຂົ້າຮາກເຫຼື້ອມ.",
      vi: "Dùng cho gia đình và bếp ăn hàng ngày.",
    },
    description: {
      lo: "ເຄື່ອງຄຸນນະພາບທີ່ເຮັດວຽກໄດ້ຫຼາຍ, ກະຕຸນໃຫ້ການນໍາໃຊ້ທີ່ດີ.",
      vi: "Nồi cơm điện sản xuất theo tiêu chuẩn Nhật, dễ dùng và phù hợp làm việc trong gia đình.",
    },
    specs: [
      { label: { lo: "ຫົວຂະຫນາດ", vi: "Dung tích" }, value: { lo: "1.8L", vi: "1.8L" } },
      { label: { lo: "ທີ່ມີ", vi: "Trạng thái" }, value: { lo: "ຂາຍແລ້ວ", vi: "Đã bán" } },
    ],
  },
  {
    id: "JP-006",
    code: "JP-006",
    category: "home",
    status: "in_stock",
    price: 3100000,
    currency: "VND",
    image: "/images/product-lamp.svg",
    name: {
      lo: "ເຄື່ອງແສງຂອງຫົວຄົ້ນນ້ຳ",
      vi: "Đèn đứng gỗ Nhật",
    },
    short: {
      lo: "ເພີ່ມລັກສະນະທີ່ມີຄຸນບັນດາທາງຕີ່.",
      vi: "Phù hợp cho phòng khách và không gian sáng tạo.",
    },
    description: {
      lo: "ເຄື່ອງແສງທີ່ໃຊ້ເຮັດເປັນຄູ່ກັບທີ່ຕ້ອງການສະຫຼາຍ, ມີການລະມັດຄວາມລ່ອງເບື່ອ.",
      vi: "Đèn đứng phong cách Nhật với ánh sáng ấm, phù hợp cho phòng khách hoặc góc làm việc.",
    },
    specs: [
      { label: { lo: "ອາຍາຫານ", vi: "Chất liệu" }, value: { lo: "ໄມ້", vi: "Gỗ" } },
      { label: { lo: "ຫນຶ່ງ", vi: "Điện áp" }, value: { lo: "220V", vi: "220V" } },
    ],
  },
  {
    id: "JP-007",
    code: "JP-007",
    category: "tools",
    status: "in_stock",
    price: 4800000,
    currency: "VND",
    image: "/images/product-drill.svg",
    name: {
      lo: "ເຄື່ອງເຊື່ອຫາກກະດານ", 
      vi: "Máy khoan cầm tay",
    },
    short: {
      lo: "ເຊື່ອມຕໍ່ກັບເຄື່ອງມືໂດຍທົ່ວໄປ.",
      vi: "Dùng cho sửa chữa và gia công cơ bản.",
    },
    description: {
      lo: "ເຄື່ອງມືເຄື່ອງເຊື່ອມຕໍ່ທີ່ມີຄວາມເຫງົາດເຢັນ, ເຮັດວຽກໄດ້ເລິກທາງເພື່ອເຮັດວຽກທີ່ຕ້ອງການ.",
      vi: "Máy khoan cầm tay phù hợp cho công việc sửa chữa và lắp đặt trong gia đình.",
    },
    specs: [
      { label: { lo: "ຄວາມໄວ", vi: "Công suất" }, value: { lo: "800W", vi: "800W" } },
      { label: { lo: "ຂະຫນາດ", vi: "Kích thước" }, value: { lo: "ເຢັນສູງ", vi: "Nhỏ gọn" } },
    ],
  },
  {
    id: "JP-008",
    code: "JP-008",
    category: "outdoor",
    status: "in_stock",
    price: 10200000,
    currency: "VND",
    image: "/images/product-generator.svg",
    name: {
      lo: "ເຄື່ອງກະຕຸກເຂດເອກະສານ",
      vi: "Máy phát điện ngoài trời",
    },
    short: {
      lo: "ໃຫ້ຄວາມບໍລິການສໍາລັບເຂດໃຊ້ງານນອກບ້ານ.",
      vi: "Phù hợp cho công việc ngoài trời và thời gian mất điện.",
    },
    description: {
      lo: "ອຸປະກອນທີ່ມີຄວາມສາມາດເຄື່ອງໃຊ້ເກັບຄວາມສູງຫຼາຍໃນການນໍາໃຊ້ເມື່ອບ້ານບໍ່ມີການໃຫ້ຂະບວນ.",
      vi: "Thiết bị điện năng lưu trữ mạnh, phù hợp cho công việc ngoài trời hoặc khi cần nguồn điện dự phòng.",
    },
    specs: [
      { label: { lo: "ຊື່", vi: "Công suất" }, value: { lo: "3.2kW", vi: "3.2kW" } },
      { label: { lo: "ປະເພດ", vi: "Loại" }, value: { lo: "4-ຄົນເຮັດ", vi: "Dự phòng" } },
    ],
  },
];

export function getCategoryByKey(category: CategoryKey) {
  return productCategories.find((item) => item.key === category);
}

