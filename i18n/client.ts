"use client"

import { useEffect, useState } from "react"
import i18next, { i18n, KeyPrefix } from "i18next"
import {
  UseTranslationOptions,
  initReactI18next,
  useTranslation as useTranslationOrg,
} from "react-i18next"
import { useCookies } from "react-cookie"
import resourcesToBackend from "i18next-resources-to-backend"
import LanguageDetector from "i18next-browser-languagedetector"
import {
  type LocaleTypes,
  getOptions,
  locales,
  cookieName,
  backendResources,
} from "./settings"
import { useParams } from "next/navigation"

const runsOnServerSide = typeof window === "undefined"

//
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(resourcesToBackend(backendResources))
  .init({
    ...getOptions(),
    lng: undefined, // let detect the language on client side
    detection: {
      order: ["path", "htmlTag", "cookie", "navigator"],
      lookupCookie: cookieName,
      // order: ["path", "htmlTag"],
    },
    preload: runsOnServerSide ? locales : [],
  })

export function useTranslation(ns: string) {
  const lng = useParams()?.locale as LocaleTypes
  // const lng = (i18next.resolvedLanguage as LocaleTypes) ?? paramLocale
  const translator = useTranslationOrg(ns)
  const { i18n } = translator

  // Run when content is rendered on server side
  if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
    i18n.changeLanguage(lng)
  } else {
    // Use our custom implementation when running on client side
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useCustomTranslationImplem(i18n, lng)
  }
  return translator
}

function useCustomTranslationImplem(i18n: i18n, lng: LocaleTypes) {
  const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage)
  const [_, setCookie] = useCookies([cookieName])

  // This effect updates the active language state variable when the resolved language changes,
  useEffect(() => {
    if (activeLng === i18n.resolvedLanguage) return
    setCookie(cookieName, i18n.resolvedLanguage, { path: "/" })
    setActiveLng(i18n.resolvedLanguage)
  }, [activeLng, i18n.resolvedLanguage, setCookie])

  // This effect changes the language of the application when the lng prop changes.
  useEffect(() => {
    if (!lng || i18n.resolvedLanguage === lng) return
    i18n.changeLanguage(lng)
  }, [lng, i18n])
}
