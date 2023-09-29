"use client"

import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import { useCurrentLocale } from "next-i18n-router/client"
import i18nConfig from "@/i18nConfig"
import { IoLanguageOutline } from "react-icons/io5"

export default function LanguageChanger() {
  const router = useRouter()
  const currentPathname = usePathname()
  const currentLocale = useCurrentLocale(i18nConfig)

  const handleChange = () => {
    const newLocale = currentLocale === "zh" ? "en" : "zh"

    // set cookie for next-i18n-router
    const days = 30
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    const expires = "; expires=" + date.toUTCString()
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`

    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname)
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`))
    }

    router.refresh()
  }

  return (
    <a
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-teal-400 transition-all text-2xl"
      onClick={handleChange}
    >
      <IoLanguageOutline />
    </a>
  )
}
