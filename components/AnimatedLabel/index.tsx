"use client"

import { useTextInView } from "@/hooks/useTextInView"
import { animated } from "@react-spring/web"

export const AnimatedLabel = ({ value }: { value: string }) => {
  const [ref, springs] = useTextInView()

  return (
    <animated.div ref={ref} style={springs} className="my-3">
      - {value}
    </animated.div>
  )
}
