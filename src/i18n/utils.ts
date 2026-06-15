import cv from "./locales/en/cv.json"

const dict: Record<string, string> = cv

/** Returns a translation (`t`) function over the CV strings. */
export function useTranslations() {
  return (key: string): string => dict[key] ?? key
}
