"use client"

import { useTranslation } from "@/i18n/client"

const About = () => {
  const { t } = useTranslation("common")
  return t("about.me")
}

export default About
