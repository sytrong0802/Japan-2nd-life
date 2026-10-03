import type { Metadata } from "next";
import { Noto_Sans_Lao, Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSansLao = Noto_Sans_Lao({
  variable: "--font-lao",
  subsets: ["lao"],
  weight: ["400", "500", "600", "700", "800"],
});

const notoSans = Noto_Sans({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "JAPAN 2ND LIFE",
  description: "Japanese second-life goods store with bilingual Lao and Vietnamese storefront.",
  alternates: {
    languages: {
      lo: "/lo",
      vi: "/vi",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="lo" className={`${notoSans.variable} ${notoSansLao.variable} h-full antialiased`}>
      <body className="min-h-full bg-stone-50 text-stone-900">
        {children}
      </body>
    </html>
  );
}
