"use client"

import { TypeAnimation } from "react-type-animation"
export const Title = () => {
  return (
    <TypeAnimation
      cursor={false}
      sequence={[
        "Senior Front End",
        1000,
        "Senior Full Stack",
        1000,
        "Senior Front End / Full Stack Developer",
        1000,
      ]}
      wrapper="div"
      speed={50}
      repeat={Infinity}
    />
  )
}
