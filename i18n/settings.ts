import type { InitOptions } from "i18next"

export const fallbackLng = "en"
export const locales = [fallbackLng, "zh-CN"] as const
export type LocaleTypes = (typeof locales)[number]
export const defaultNS = "common"
export const headerName = "x-next-locale"

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

export const backendResources = (language: string, namespace: string) =>
  import(`./locales/${language}/${namespace}.json`)
