"use client"

import { TypeAnimation } from "react-type-animation"

export const Intro = () => {
  return (
    <TypeAnimation
      cursor={false}
      sequence={[
        `I am a highly driven and passionate web developer with over 10 years of successful development of interactive web and mobile applications.\n
As a self-motivated web developer, I am always interested in trying new things. I really love diving into new problems and solving them. I believe that the key to progress is trying new think.\n
Programming allows me to constantly explore new things and challenge myself.
`,
      ]}
      speed={83}
      style={{ whiteSpace: "pre-line" }}
      repeat={0}
    />
  )
}
