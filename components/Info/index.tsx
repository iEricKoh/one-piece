import getIntl from "@/lib/intl"
import { MdContactPhone, MdEmail, MdPhone, MdPhoneIphone } from "react-icons/md"
export const Info = async () => {
  const intl = await getIntl("cv")

  return (
    <div className="flex flex-col md:flex-row justify-between mb-16">
      <section>
        <div className="text-5xl md:text-8xl font-bold fullname">
          {intl.formatMessage({ id: "fullname" })}
        </div>
        <div className="md:text-2xl md:text-center mt-2">
          {intl.formatMessage({ id: "title" })}
        </div>
      </section>
      <ul className="mt-5 md:mt-0 md:text-lg text-right md:text-left">
        <li>
          <a
            className="flex items-center"
            href="mailto:akaerickoh@gmail.com?subject=What's up"
          >
            <div className="mr-3">
              <MdEmail />
            </div>
            <span>akaerickoh@gmail.com</span>
          </a>
        </li>
        <li>
          <a className="flex items-center" href="tel:+8616628560990">
            <div className="mr-3">
              <MdPhoneIphone />
            </div>
            <span>+86 16628560990</span>
          </a>
        </li>
      </ul>
    </div>
  )
}
