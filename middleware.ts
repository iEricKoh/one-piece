import { NextResponse, NextRequest } from "next/server"
import { LocaleTypes, fallbackLng, headerName, locales } from "./i18n/settings"
import { match as matchLocale } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"

function getLocale(request: NextRequest): string {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    Array.from(locales),
  )

  const locale = matchLocale(languages, locales, fallbackLng)

  return locale
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname

  // Check if the default locale is in the pathname
  if (
    pathname.startsWith(`/${fallbackLng}/`) ||
    pathname === `/${fallbackLng}`
  ) {
    // e.g. incoming request is /en/about
    // The new URL is now /about
    const response = NextResponse.redirect(
      new URL(
        pathname.replace(
          `/${fallbackLng}`,
          pathname === `/${fallbackLng}` ? "/" : "",
        ),
        request.url,
      ),
    )

    return response
  }

  const pathnameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  )

  // console.log(locales, pathname, pathnameIsMissingLocale)

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)

    // Rewrite so Next.js understands
    // e.g. incoming request is /about
    // Tell Next.js it should pretend it's /en/about
    const response = NextResponse.rewrite(
      new URL(`/${locale}${pathname}`, request.url),
    )
    response.headers.set(headerName, locale)

    return response
  } else {
    const response = NextResponse.next()

    const pathLocale = locales.find(
      (locale) =>
        pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
    )

    response.headers.set(headerName, pathLocale!)
    return response
  }
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
}
