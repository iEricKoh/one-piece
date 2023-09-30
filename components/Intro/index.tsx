"use client"

import { useTranslation } from "@/i18n/client"
import { TypeAnimation } from "react-type-animation"

export const Intro = () => {
  const { t } = useTranslation("cv")

  return (
    <TypeAnimation
      cursor={false}
      sequence={[t("intro")]}
      speed={83}
      style={{ whiteSpace: "pre-line" }}
      repeat={0}
    />
  )
}
