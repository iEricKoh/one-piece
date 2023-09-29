import { useInView } from "@react-spring/web"

export const useTextInView = () => {
  return useInView(
    () => ({
      from: {
        opacity: 0.2,
      },
      to: {
        opacity: 1,
      },
    }),
    {
      rootMargin: "-8% 0%",
    },
  )
}
