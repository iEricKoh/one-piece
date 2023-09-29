"use client"

import { animated, useSpring } from "@react-spring/web"
import { useState } from "react"
import { FormattedMessage } from "react-intl"
import useMeasure from "react-use-measure"
import { BsChevronRight, BsChevronDown } from "react-icons/bs"

export const Projects = ({
  projects,
}: {
  projects: Array<{ name: string; desc: string }>
}) => {
  const [open, toggle] = useState(false)

  const [ref, { height }] = useMeasure()
  const styles = useSpring({ height: open ? height : 0 })

  return (
    <div>
      <a
        onClick={() => toggle((val) => !val)}
        className="relative block cursor-pointer"
      >
        <hr className="absolute w-full top-1/2" />
        <span className="bg-white dark:bg-slate-900 relative z-10 pr-2 items-center inline-flex text-gray-400 dark:text-white">
          {open ? (
            <BsChevronDown className="inline relative mr-1" />
          ) : (
            <BsChevronRight className="inline relative mr-1" />
          )}
          <FormattedMessage id="projects" />
        </span>
      </a>
      <animated.div className="overflow-hidden" style={styles}>
        <div ref={ref}>
          {projects.map((proj, index) => (
            <dl key={index} className="py-2">
              <dt className="inline">
                * <em>{proj.name}:</em>{" "}
              </dt>
              <dd className="inline">{proj.desc}</dd>
            </dl>
          ))}
        </div>
      </animated.div>
    </div>
  )
}

export default Projects
