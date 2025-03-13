import { getRequestConfig } from "next-intl/server";
import notFound from "./app/[locale]/not-found";

// Can be imported from a shared config
const locales = ["en", "ar"];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as string)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});