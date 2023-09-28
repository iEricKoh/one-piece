"use client"

import i18nConfig from "@/i18nConfig"
import { useCurrentLocale } from "next-i18n-router/client"
import { TypeAnimation } from "react-type-animation"
export const Title = () => {
  const locale = useCurrentLocale(i18nConfig)

  const sequence =
    locale === "zh"
      ? ["高级前端", 1000, "高级全栈", 1000, "高级前端/全栈工程师", 1000]
      : [
          "Senior Front End",
          1000,
          "Senior Full Stack",
          1000,
          "Senior Front End / Full Stack Developer",
          1000,
        ]

  return (
    <TypeAnimation
      cursor={true}
      sequence={sequence}
      wrapper="div"
      speed={50}
      repeat={Infinity}
    />
  )
}
