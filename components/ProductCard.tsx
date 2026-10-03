import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { type Locale } from "@/src/config/site";
import { getCategoryByKey, type Product } from "@/src/data/products";

export async function ProductCard({ product, locale }: { product: Product; locale: Locale }) {
  const t = await getTranslations("common");
  const category = getCategoryByKey(product.category);

  return (
    <article className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
      <div className="relative aspect-[4/3] overflow-hidden border-b border-stone-200 bg-stone-100">
        <Image src={product.image} alt={product.name[locale]} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover" />
      </div>

      <div className="space-y-3 p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-stone-500">
          <span>{category?.name[locale]}</span>
          <span>{product.code}</span>
        </div>
        <h3 className="text-lg font-bold leading-snug text-stone-900">{product.name[locale]}</h3>
        <p className="text-sm leading-6 text-stone-600">{product.short[locale]}</p>
        <p className="text-sm leading-6 text-stone-600">{product.description[locale]}</p>
        <dl className="grid grid-cols-2 gap-x-3 gap-y-2 border-t border-stone-200 pt-3 text-sm">
          {product.specs.map((spec) => (
            <div key={`${product.code}-${spec.label[locale]}`}>
              <dt className="text-xs text-stone-500">{spec.label[locale]}</dt>
              <dd className="mt-0.5 font-medium text-stone-800">{spec.value[locale]}</dd>
            </div>
          ))}
        </dl>
        <div className="flex items-center justify-between gap-3 border-t border-stone-200 pt-3">
          <div className="text-xs font-medium text-stone-600">
            {product.status === "sold_out" ? t("soldOut") : t("inStock")}
          </div>
          <div className="text-right">
            <div className="text-[10px] uppercase tracking-[0.14em] text-stone-500">{t("price")}</div>
            <div className="text-base font-bold text-stone-900">
              {product.price ? `${product.price.toLocaleString("vi-VN")} ${product.currency}` : "—"}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
