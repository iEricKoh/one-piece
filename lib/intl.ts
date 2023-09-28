"server-only"

import i18nConfig from "@/i18nConfig"
import { createIntl } from "@formatjs/intl"
import { currentLocale } from "next-i18n-router"

export default async function getIntl(namespace: string) {
  const locale = currentLocale()

  return createIntl({
    locale: locale ?? i18nConfig.defaultLocale,
    messages: await import(`@/i18n/${locale}/${namespace}.json`),
  })
}
