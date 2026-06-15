export interface TypewriterOptions {
  /** ms per character while typing */
  speed?: number
  /** ms per character while deleting */
  deleteSpeed?: number
  /** ms to hold a fully typed phrase before deleting / finishing */
  pause?: number
  /** cycle through the phrases forever */
  loop?: boolean
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

/**
 * Tiny dependency-free typewriter. Replaces react-type-animation.
 * Writes into `el.textContent`, so the host element should set
 * `white-space` as needed (e.g. `pre-line`) to preserve newlines.
 */
export function typewriter(
  el: HTMLElement,
  phrases: string[],
  opts: TypewriterOptions = {},
): void {
  const speed = opts.speed ?? 45
  const deleteSpeed = opts.deleteSpeed ?? 25
  const pause = opts.pause ?? 1000
  const loop = opts.loop ?? false

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches
  if (reduceMotion) {
    el.textContent = phrases[phrases.length - 1] ?? ""
    return
  }

  let cancelled = false
  el.addEventListener("astro:before-swap", () => (cancelled = true), {
    once: true,
  })

  async function run() {
    do {
      for (let p = 0; p < phrases.length; p++) {
        const text = phrases[p]
        for (let c = 1; c <= text.length; c++) {
          if (cancelled) return
          el.textContent = text.slice(0, c)
          await sleep(speed)
        }
        await sleep(pause)
        const isLast = p === phrases.length - 1
        if (loop || !isLast) {
          for (let c = text.length; c >= 0; c--) {
            if (cancelled) return
            el.textContent = text.slice(0, c)
            await sleep(deleteSpeed)
          }
        }
      }
    } while (loop && !cancelled)
  }

  void run()
}
