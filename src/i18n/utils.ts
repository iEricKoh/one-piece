import { defaultLocale, type Locale } from "./config"
import enCv from "./locales/en/cv.json"
import enCommon from "./locales/en/common.json"
import zhCv from "./locales/zh-CN/cv.json"
import zhCommon from "./locales/zh-CN/common.json"

type Dictionary = Record<string, string>

const resources = {
  en: { cv: enCv, common: enCommon },
  "zh-CN": { cv: zhCv, common: zhCommon },
} as const satisfies Record<Locale, Record<string, Dictionary>>

type Namespace = keyof (typeof resources)[Locale]

/**
 * Returns a transl(`t`) function for the given locale and namespace.
 * Falls back to the default locale, then to the key itself.
 */
export function useTranslations(locale: Locale, ns: Namespace = "cv") {
  const dict: Dictionary =
    resources[locale]?.[ns] ?? resources[defaultLocale][ns]
  return (key: string): string => dict[key] ?? key
}
