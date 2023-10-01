import { PropsWithChildren } from "react"

export interface PageWithLocale extends PropsWithChildren {
  params: {
    locale: string
  }
}
