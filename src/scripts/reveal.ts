/**
 * Adds the `in-view` class to `[data-reveal]` elements once they scroll into
 * view. Replaces the @react-spring useInView scroll animations; the actual
 * transition lives in CSS.
 */
export function initReveal(rootMargin = "-8% 0px"): void {
  const targets = document.querySelectorAll<HTMLElement>("[data-reveal]")
  if (targets.length === 0) return

  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("in-view"))
    return
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view")
          obs.unobserve(entry.target)
        }
      }
    },
    { rootMargin },
  )

  targets.forEach((el) => observer.observe(el))
}

/** Runs `callback` once, when `el` first scrolls into view. */
export function onReveal(
  el: HTMLElement,
  callback: () => void,
  rootMargin = "-8% 0px",
): void {
  if (!("IntersectionObserver" in window)) {
    callback()
    return
  }
  const observer = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          obs.disconnect()
          callback()
        }
      }
    },
    { rootMargin },
  )
  observer.observe(el)
}
