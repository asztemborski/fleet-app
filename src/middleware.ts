import createMiddleware from "next-intl/middleware";
import { locales } from "./constants/translations";
import { localePrefix } from "./utilities/navigation";

export default createMiddleware({
  defaultLocale: "en",
  locales,
  localePrefix,
});

export const config = {
  matcher: ["/", `/(en|pl)/:path*`],
};
