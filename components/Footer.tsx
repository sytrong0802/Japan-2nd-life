import { siteConfig, type Locale } from "@/src/config/site";

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="border-t border-stone-200 bg-stone-900 text-stone-200">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div>
          <div className="text-lg font-black tracking-[0.18em] text-white">{siteConfig.brand}</div>
          <p className="mt-2 text-sm leading-6 text-stone-300">{siteConfig.slogan[locale]}</p>
        </div>
      </div>
      <div className="border-t border-stone-800 px-4 py-4 text-center text-xs text-stone-400 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} {siteConfig.brand}.
      </div>
    </footer>
  );
}
