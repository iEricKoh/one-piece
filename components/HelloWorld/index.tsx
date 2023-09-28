"use client"

import { TypeAnimation } from "react-type-animation"

export const HelloWorld = () => {
  return (
    <TypeAnimation
      cursor={false}
      className="hello"
      sequence={[
        `I am a highly driven and passionate web developer with over 10 years of successful development of interactive web and mobile applications.\n
Proven record of escalating customer satisfaction and increasing user interaction through timely implementation of cutting-edge designs, cutting development time, and integration of third-party services.`,
      ]}
      wrapper="div"
      speed={85}
      style={{ whiteSpace: "pre-line" }}
      repeat={0}
    />
  )
}
