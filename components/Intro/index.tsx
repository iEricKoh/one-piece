"use client"

import { useIntl } from "react-intl"
import { TypeAnimation } from "react-type-animation"

export const Intro = () => {
  const intl = useIntl()
  return (
    <TypeAnimation
      key={intl.locale}
      cursor={false}
      sequence={[intl.formatMessage({ id: "intro" })]}
      speed={83}
      style={{ whiteSpace: "pre-line" }}
      repeat={0}
    />
  )
}
