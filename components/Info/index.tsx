import { MdEmail, MdLocationOn, MdPhoneIphone } from "react-icons/md"
import { Title } from "./Title"
import { useTranslation } from "@/i18n/server"

export const Info = async () => {
  const { t } = await useTranslation("cv")
  return (
    <div className="flex flex-col md:flex-row justify-between mb-16">
      <hgroup>
        <h1 className="text-5xl md:text-8xl font-bold uppercase">
          {t("fullname")}
        </h1>
        <h4 className="md:text-2xl md:text-center mt-2">
          <Title />
        </h4>
      </hgroup>
      <address className="mt-5 md:mt-0 md:text-lg text-right md:text-left">
        <a
          className="mb-2 flex items-center"
          href="mailto:akaerickoh@gmail.com?subject=What's up"
        >
          <div className="mr-2 md:mr-3">
            <MdEmail />
          </div>
          <span>akaerickoh@gmail.com</span>
        </a>
        <a className="mb-2 flex items-center" href="tel:+8616628560990">
          <div className="mr-2 md:mr-3">
            <MdPhoneIphone />
          </div>
          <span>+86 16628560990</span>
        </a>
        <div className="flex items-center">
          <div className="mr-2 md:mr-3">
            <MdLocationOn />
          </div>
          <span>{t("address")}</span>
        </div>
      </address>
    </div>
  )
}
