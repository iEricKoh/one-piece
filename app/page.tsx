import Graph from "@/components/Graph"
import { Experiences } from "@/components/Experiences"
import { Info } from "@/components/Info"
import { FaGithub } from "react-icons/fa"
import { SectionHeader } from "@/components/SectionHeader"
import { Intro } from "@/components/Intro"
import getIntl from "@/lib/intl"
import Image from "next/image"

export default async function Home() {
  const intl = await getIntl("cv")

  return (
    <main className="app min-h-screen px-4 md:px-10">
      <div className="max-w-screen-xl m-auto pb-10 md:py-20">
        <Info />
        <Experiences />

        <SectionHeader
          icon={
            <Image
              src="/terminal.svg"
              width={25}
              height={25}
              alt="skills"
              className="dark:invert"
            />
          }
          heading={intl.formatMessage({ id: "skills" })}
        />
        <div className="grid gap-y-8 md:grid-cols-3 md:gap-14 md:mt-10 min-w-full">
          <section className="col-span-3 md:col-span-1">
            <Intro />
          </section>
          <div className="col-span-3 md:col-span-2">
            <Graph />
          </div>
        </div>
      </div>
    </main>
  )
}
