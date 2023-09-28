"use client"

import { useSpring, animated } from "@react-spring/web"
import { useInView } from "react-intersection-observer"

export const AnimatedLabel = ({ value }) => {
  const { ref, inView } = useInView({ triggerOnce: true })

  const style = useSpring({
    opacity: inView ? 1 : 0,
    threshold: 1,
    delay: 180,
  })

  return (
    <animated.div ref={ref} style={style} className="my-3">
      - {value}
    </animated.div>
  )
}
