"use client"

import { PropsWithChildren } from "react"
import { IntlConfig, IntlProvider } from "react-intl"

export default function ServerIntlProvider({
  locale,
  children,
  messages,
}: PropsWithChildren<IntlConfig>) {
  return (
    <IntlProvider messages={messages} locale={locale}>
      {children}
    </IntlProvider>
  )
}
