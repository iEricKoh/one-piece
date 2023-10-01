import { Experiences } from "@/components/Experiences"
import Graph from "@/components/Graph"
import Image from "next/image"
import { Info } from "@/components/Info"
import { Intro } from "@/components/Intro"
import { SectionHeader } from "@/components/SectionHeader"
import { useTranslation } from "@/i18n/server"
import terminal from "@/public/terminal.svg"
import { Suspense } from "react"

const IndexPage = async () => {
  const { t } = await useTranslation("cv")
  return (
    <main className="app min-h-screen px-4 md:px-10">
      <div className="max-w-screen-xl m-auto pb-10 md:py-20">
        <Suspense>
          <Info />
          <Experiences />
        </Suspense>

        <SectionHeader
          icon={
            <Image
              src={terminal}
              width={25}
              height={25}
              alt="skills"
              className="dark:invert"
              priority
            />
          }
          heading={t("skills")}
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

export default IndexPage
