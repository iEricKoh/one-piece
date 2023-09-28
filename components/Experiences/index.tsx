import { Fragment } from "react"
import { FaCodepen } from "react-icons/fa"
import TechStack from "../TechStack"
import { AnimatedLabel } from "../AnimatedLabel"
import { SectionHeader } from "../SectionHeader"
import { Experience } from "@/interfaces/experience"

export const Experiences = ({
  experiences,
}: {
  experiences: Array<Experience>
}) => {
  return (
    <>
      <SectionHeader icon={<FaCodepen />} heading="EXPERIENCE" />
      <div className="grid md:grid-cols-3 md:gap-14">
        {experiences.map((e) => (
          <Fragment key={e.company}>
            <div className="col-span-3 grid grid-cols-2 md:col-span-1 items-center w-full md:block">
              <div className="">
                <div className="text-3xl md:text-4xl mb-1 md:mb-2">
                  {e.company}
                </div>
              </div>
              <div className="text-sm md:text-left text-right">
                {e.duration}
              </div>
            </div>
            <div className="col-span-3 md:col-span-2 mb-12 md:mb-0">
              <div className="md:font-bold text-2xl md:text-3xl mb-5">
                <AnimatedLabel value={e.position} />
              </div>
              <div className="row-span-2 col-span-2 ...">
                <ul>
                  {e.desc.map((desc, index) => (
                    <li key={index}>
                      <AnimatedLabel value={desc} />
                    </li>
                  ))}
                </ul>
                <div className="italic text-sm mt-5">
                  <TechStack stack={e.techStack.join(" / ")} />
                </div>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </>
  )
}
