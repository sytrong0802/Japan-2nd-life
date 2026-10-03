export const locales = ["lo", "vi"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "lo";

export const siteConfig = {
  brand: "JAPAN 2ND LIFE",
  brandLo: "ຍີ່ປຸ່ນມືສອງ",
  slogan: {
    lo: "ຂອງຍີ່ປຸ່ນຄຸນນະພາບດີ ລາຄາດີ",
    vi: "Hàng Nhật chất lượng tốt, giá tốt.",
  },
  contactText: "SĐT: xxx",
} as const;
