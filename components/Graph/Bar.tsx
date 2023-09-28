import { useSpring, animated } from "@react-spring/web"
import { useInView } from "react-intersection-observer"

export const Bar = ({ label, width }: { width: number; label: string }) => {
  const { ref, inView } = useInView()
  const style = useSpring({
    width: inView ? `${width}%` : "0%",
    borderRadius: "5px",
    threshold: 1,
  })

  const labelStyle = useSpring({
    opacity: inView ? 1 : 0,
    threshold: 1,
    delay: 180,
  })

  return (
    <div className="mb-5" ref={ref}>
      <animated.div style={labelStyle} className="mb-2">
        {label}
      </animated.div>
      <animated.div className="bg-orange-400 h-5" style={style}></animated.div>
    </div>
  )
}
