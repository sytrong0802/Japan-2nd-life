import { getRequestConfig } from "next-intl/server";
import { routing } from "@/src/i18n/routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  const safeLocale = routing.locales.includes(locale as "lo" | "vi")
    ? (locale as "lo" | "vi")
    : routing.defaultLocale;

  return {
    locale: safeLocale,
    messages: (await import(`@/messages/${safeLocale}.json`)).default,
  };
});
