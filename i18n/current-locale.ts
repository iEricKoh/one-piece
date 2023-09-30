"server-only"

import { headers } from "next/headers"
import { LocaleTypes, headerName } from "./settings"

const currentLocale = (): LocaleTypes => {
  // header should always be present
  return (headers().get(headerName) || undefined) as LocaleTypes
}

export default currentLocale
