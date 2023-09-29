"server-only"

import { currentLocale } from "next-i18n-router"

const intro = () => {
  const locale = currentLocale()

  if (locale === "zh") {
    return `
我是一位对技术充满热情，超过10年外企工作背景，拥有丰富的 Web 开发经验，其 中包含7年 React 开发经验。带领过3人的前端开发团队，培养过跨行业的新人。\n

英文是我工作以来的唯一语言，日常无障碍沟通，曾经长期是某技术团队中的唯一中国人。\n
日常工作之余，热爱瑜伽和健身。
`
  }

  return `I am a highly driven and passionate web developer with over 10 years of successful development of interactive web and mobile applications.\n
As a self-motivated web developer, I am always interested in trying new things. I really love diving into new problems and solving them. I believe that the key to progress is trying new think.\n
Programming allows me to constantly explore new things and challenge myself.
`
}

export default intro
