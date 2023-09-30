"server-only"

import { createInstance } from "i18next"
import resourcesToBackend from "i18next-resources-to-backend"
import { initReactI18next } from "react-i18next/initReactI18next"
import { getOptions, LocaleTypes } from "./settings"
import { headers } from "next/headers"
import currentLocale from "./current-locale"

// Initialize the i18n instance
const initI18next = async (lang: LocaleTypes, ns: string) => {
  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: typeof ns) =>
          // load the translation file depending on the language and namespace
          import(`./locales/${language}/${namespace}.json`),
      ),
    )
    .init(getOptions(lang, ns))

  return i18nInstance
}

// It will accept the locale and namespace for i18next to know what file to load
export async function useTranslation(ns: string) {
  const locale = currentLocale()
  const i18nextInstance = await initI18next(locale, ns)

  return {
    t: i18nextInstance.getFixedT(locale, Array.isArray(ns) ? ns[0] : ns),
    i18n: i18nextInstance,
  }
}
