import LanguageChanger from "@/components/LanguageChanger"
import Graph from "@/components/Graph"
import { Experiences } from "@/components/Experiences"
import experiences from "./data.json"
import { Info } from "@/components/Info"
import { FaGithub, FaTerminal, FaTools } from "react-icons/fa"
import { SectionHeader } from "@/components/SectionHeader"
import { HelloWorld } from "@/components/HelloWorld"

export default async function Home() {
  return (
    <main className="app min-h-screen px-4 md:px-10">
      <div className="max-w-screen-xl m-auto py-10 md:py-20">
        <Info />
        <Experiences experiences={experiences} />

        <SectionHeader icon={<FaGithub />} heading="SKILLS" />
        <div className="grid gap-8 md:grid-cols-3 md:gap-14 md:mt-10 min-w-full">
          <div>
            <HelloWorld />
          </div>
          <div className="col-span-2">
            <Graph />
          </div>
        </div>
      </div>
      {/* <LanguageChanger /> */}
      {/* <div className="max-w-screen-xl m-auto"> */}
      {/*   <div className="min-w-full"> */}
      {/*   </div> */}
      {/* </div> */}
    </main>
  )
}
