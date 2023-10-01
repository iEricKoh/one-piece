"server-only"

import { createInstance } from "i18next"
import resourcesToBackend from "i18next-resources-to-backend"
import { initReactI18next } from "react-i18next/initReactI18next"
import { backendResources, getOptions, LocaleTypes } from "./settings"
import { headers } from "next/headers"
import currentLocale from "./current-locale"

const initI18next = async (lng: LocaleTypes, ns?: string) => {
  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend(backendResources))
    .init(getOptions(lng, ns))

  return i18nInstance
}

export async function useTranslation(ns?: string) {
  const locale = currentLocale()
  const i18nextInstance = await initI18next(locale, ns)

  return {
    t: i18nextInstance.getFixedT(locale, Array.isArray(ns) ? ns[0] : ns),
    i18n: i18nextInstance,
  }
}
