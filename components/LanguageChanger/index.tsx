"use client"

import i18next from "i18next"
import {
  useSelectedLayoutSegments,
  useParams,
  useRouter,
} from "next/navigation"
import { IoLanguageOutline } from "react-icons/io5"

export default function LanguageChanger() {
  const locale = useParams()?.locale
  const router = useRouter()
  const urlSegments = useSelectedLayoutSegments()

  const handleChange = () => {
    const newLocale = locale === "zh-CN" ? "en" : "zh-CN"

    i18next.changeLanguage(newLocale, (err) => {
      if (err) {
        return console.log("something went wrong loading", err)
      }
    })

    router.push(`/${newLocale}/${urlSegments.slice(1).join("/")}`)

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
