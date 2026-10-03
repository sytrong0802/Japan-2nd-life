import { locales, siteConfig, type Locale } from "@/src/config/site";

export function Header({ locale }: { locale: Locale }) {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-stone-50/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 bg-stone-900 text-xs font-bold text-stone-100">
            J2
          </div>
          <div>
            <div className="text-base font-black tracking-[0.18em] text-stone-900 sm:text-lg">{siteConfig.brand}</div>
            <div className="text-[10px] uppercase tracking-[0.28em] text-stone-500">{siteConfig.brandLo}</div>
          </div>
        </div>

        <nav aria-label="Language" className="flex rounded-full border border-stone-300 bg-white p-1">
          {locales.map((value) => (
            <a
              key={value}
              href={`/${value}/`}
              aria-current={value === locale ? "page" : undefined}
              className={`rounded-full px-3 py-2 text-xs font-semibold transition-colors sm:px-4 ${
                value === locale ? "bg-stone-900 text-white" : "text-stone-700 hover:bg-stone-100"
              }`}
            >
              {value === "lo" ? "ລາວ" : "Tiếng Việt"}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
