import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ProductCard } from "@/components/ProductCard";
import { productCategories, products } from "@/src/data/products";
import { locales, siteConfig, type Locale } from "@/src/config/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = locale as Locale;
  const tHome = await getTranslations("home");
  const tCommon = await getTranslations("common");

  return (
    <div>
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-700 text-stone-50 shadow-[0_25px_60px_rgba(28,25,23,0.2)]">
          <div className="grid items-center gap-8 px-6 py-8 md:grid-cols-[1.2fr_0.8fr] md:px-10 md:py-12 lg:px-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-300">{tHome("eyebrow")}</p>
              <h1 className="mt-5 max-w-xl text-4xl font-black leading-tight md:text-5xl">
                {siteConfig.brand}
              </h1>
              <p className="mt-4 max-w-xl text-lg leading-8 text-stone-200">{siteConfig.slogan[safeLocale]}</p>
            </div>

            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-stone-200">
                <Image src="/images/hero-warehouse.svg" alt="Japanese second-life warehouse" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border-l-2 border-amber-700 px-5 py-2">
              <p className="text-base font-semibold leading-7 text-stone-800">{tHome(`feature${item}`)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mb-7">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">{tCommon("featured")}</p>
            <h2 className="mt-2 text-3xl font-black text-stone-900">{tCommon("featured")}</h2>
          </div>
        </div>

        <div className="grid items-start gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} locale={safeLocale} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mb-7">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">{tCommon("catalogLabel")}</p>
          <h2 className="mt-2 text-3xl font-black text-stone-900">{tCommon("catalogLabel")}</h2>
        </div>

        <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category) => (
            <div key={category.key} className="border-t border-stone-300 py-4">
              <h3 className="text-base font-bold text-stone-900">{category.name[safeLocale]}</h3>
              <p className="mt-1 text-sm text-stone-500">
                {products.filter((product) => product.category === category.key).length} {tCommon("items")}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
          <div className="relative min-h-[260px] overflow-hidden rounded-[1.5rem] bg-stone-100">
            <Image src="/images/hero-warehouse.svg" alt="Showroom JAPAN 2ND LIFE" fill className="object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">{tHome("aboutTitle")}</p>
            <h2 className="mt-3 text-3xl font-black text-stone-900">{tHome("aboutTitle")}</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-stone-600">{tHome("aboutText")}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="border-t border-stone-300 pt-7">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">{tHome("contactTitle")}</p>
          <h2 className="mt-2 text-2xl font-black text-stone-900">{siteConfig.contactText}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-stone-600">{tHome("contactText")}</p>
        </div>
      </section>
    </div>
  );
}
