"use client"

import { useEffect, useState } from "react"
import i18next, { dir, i18n } from "i18next"
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
} from "react-i18next"
import resourcesToBackend from "i18next-resources-to-backend"
import LanguageDetector from "i18next-browser-languagedetector"
import {
  type LocaleTypes,
  getOptions,
  locales,
  backendResources,
  cookieName,
} from "./settings"
import { useParams } from "next/navigation"
import { useCookies } from "react-cookie"

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
    },
    preload: runsOnServerSide ? locales : [],
  })

export function useTranslation(ns?: string) {
  const lng = useParams()?.locale as LocaleTypes
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
  const [cookies, setCookie] = useCookies([cookieName])
  const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage)

  // This effect updates the active language state variable when the resolved language changes,
  useEffect(() => {
    if (activeLng === i18n.resolvedLanguage) return

    if (i18n.resolvedLanguage) {
      document.documentElement.lang = i18n.resolvedLanguage
    }
    setActiveLng(i18n.resolvedLanguage)
  }, [activeLng, i18n.resolvedLanguage])

  // This effect changes the language of the application when the lng prop changes.
  useEffect(() => {
    if (!lng || i18n.resolvedLanguage === lng) return
    i18n.changeLanguage(lng)
  }, [lng, i18n])

  useEffect(() => {
    if (cookies.i18next === lng) return
    setCookie(cookieName, lng, { path: "/" })
  }, [lng, cookies.i18next, setCookie])
}
