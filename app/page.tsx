import Graph from "@/components/Graph"
import { Experiences } from "@/components/Experiences"
import experiences from "./data.json"
import { Info } from "@/components/Info"
import { FaGithub } from "react-icons/fa"
import { SectionHeader } from "@/components/SectionHeader"
import { Intro } from "@/components/Intro"
import getIntl from "@/lib/intl"

export default async function Home() {
  const intl = await getIntl("cv")

  return (
    <main className="app min-h-screen px-4 md:px-10">
      <div className="max-w-screen-xl m-auto pb-10 md:py-20">
        <Info />
        <Experiences experiences={experiences} />

        <SectionHeader
          icon={<FaGithub />}
          heading={intl.formatMessage({ id: "skills" })}
        />
        <div className="grid gap-8 md:grid-cols-3 md:gap-14 md:mt-10 min-w-full">
          <section>
            <Intro />
          </section>
          <div className="col-span-2">
            <Graph />
          </div>
        </div>
      </div>
    </main>
  )
}
