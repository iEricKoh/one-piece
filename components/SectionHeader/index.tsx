import { ReactElement } from "react"

export const SectionHeader = ({
  icon,
  heading,
}: {
  icon: ReactElement
  heading: string
}) => {
  return (
    <>
      <h4 className="mb-2 text-3xl flex items-center">
        <div className="mr-3">{icon}</div> {heading}
      </h4>

      <hr className="mb-5" />
    </>
  )
}
