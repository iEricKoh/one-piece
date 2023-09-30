"use client"

import i18next from "i18next"
import {
  useSelectedLayoutSegments,
  useParams,
  useRouter,
} from "next/navigation"
import { useEffect } from "react"
import { IoLanguageOutline } from "react-icons/io5"

export default function LanguageChanger() {
  const locale = useParams()?.locale
  const router = useRouter()
  const urlSegments = useSelectedLayoutSegments()

  useEffect(() => {
    if (locale !== i18next.resolvedLanguage) {
      router.refresh()
    }
  }, [locale, router])

  const handleChange = () => {
    const newLocale = locale === "zh-CN" ? "en" : "zh-CN"

    router.push(`/${newLocale}/${urlSegments.slice(1).join("/")}`)

    router.refresh()
  }

  return (
    <a
      className="p-2 cursor-pointer rounded-full hover:bg-gray-200 dark:hover:bg-teal-400 transition-all text-2xl"
      onClick={handleChange}
    >
      <IoLanguageOutline />
    </a>
  )
}
