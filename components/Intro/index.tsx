"use client"

import { useTranslation } from "@/i18n/client"
import i18next from "i18next"
import { TypeAnimation } from "react-type-animation"

export const Intro = () => {
  const { t } = useTranslation("cv")

  return (
    <TypeAnimation
      key={i18next.resolvedLanguage}
      cursor={false}
      sequence={[t("intro")]}
      speed={83}
      style={{ whiteSpace: "pre-line" }}
      repeat={0}
    />
  )
}
