import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["lo", "vi"],
  defaultLocale: "lo",
  localePrefix: "always",
});
