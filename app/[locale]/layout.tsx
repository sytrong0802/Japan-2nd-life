import type { ReactNode } from "react";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { locales, type Locale } from "@/src/config/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = locale as Locale;

  if (!locales.includes(safeLocale)) {
    notFound();
  }

  setRequestLocale(safeLocale);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <Header locale={safeLocale} />
      <main className="min-h-[60vh]">{children}</main>
      <Footer locale={safeLocale} />
    </div>
  );
}
