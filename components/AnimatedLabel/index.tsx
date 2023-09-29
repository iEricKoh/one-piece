"use client"

import { useTextInView } from "@/hooks/useTextInView"
import { animated } from "@react-spring/web"

export const AnimatedLabel = ({
  prefix,
  value,
  className,
}: {
  className?: string
  prefix?: string
  value: string
}) => {
  const [ref, springs] = useTextInView()

  return (
    <animated.div ref={ref} style={springs} className={className}>
      {prefix} {value}
    </animated.div>
  )
}
