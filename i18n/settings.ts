import type { InitOptions } from "i18next"

export const fallbackLng = "en"
export const locales = [fallbackLng, "zh-CN"] as const
export type LocaleTypes = (typeof locales)[number]
export const defaultNS = "common"
export const headerName = "x-next-locale"
export const cookieName = "i18next"

export function getOptions(lang = fallbackLng, ns = defaultNS): InitOptions {
  return {
    supportedLngs: locales,
    fallbackLng,
    lng: lang,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
    // debug: true,
    load: "currentOnly",
  }
}

export const backendResources = (lng: string, ns: string) =>
  import(`./locales/${lng}/${ns}.json`)
