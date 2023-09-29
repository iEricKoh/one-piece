"use client"
import { TypeAnimation } from "react-type-animation"
import { animated } from "@react-spring/web"
import { useTextInView } from "@/hooks/useTextInView"

export default function TechStack({ stack }: { stack: string }) {
  const [ref, springs] = useTextInView()

  return (
    <animated.div ref={ref} style={springs}>
      <TypeAnimation sequence={[stack]} wrapper="div" cursor={false} />
    </animated.div>
  )
}
