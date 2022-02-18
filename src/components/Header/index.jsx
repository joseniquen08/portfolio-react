import { useTranslation } from "react-i18next";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

export const Header = () => {

  const [t] = useTranslation("header");

  return (
    <div className="flex flex-col-reverse space-y-reverse space-y-12 lg:flex-row w-full px-2 lg:px-16 py-10 lg:pt-36 lg:pb-16 mx-auto max-w-7xl">
      <div className="flex flex-col justify-center flex-none space-y-14">
        <div className="flex flex-col justify-center space-y-3 lg:space-y-4 text-center lg:text-left">
          <p className="text-4xl lg:text-6xl font-bold lg:tracking-wide dark:text-white text-slate-900">{t("hi")}</p>
          <p className="text-5xl break-words font-bold lg:tracking-wide leading-tight lg:text-7xl dark:text-white text-slate-900">{t("i-am")} <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:to-cyan-500 font-extrabold">{t("name")}</span></p>
          <p className="text-2xl lg:text-4xl font-bold lg:tracking-wide dark:text-white text-slate-900">{t("junior-one")}</p>
          <p className="text-2xl lg:text-4xl font-bold lg:tracking-wide dark:text-white text-slate-900"><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600" >{t("junior-two")}</span></p>
        </div>
        <div className="flex pl-1 justify-center lg:justify-start space-x-4 text-lg dark:text-white text-slate-900">
          <a href="https://github.com/joseniquen08" target='_blank' rel="noreferrer"className="flex items-center justify-center font-medium bg-slate-900 bg-opacity-5 hover:bg-opacity-10 dark:bg-white dark:bg-opacity-5 dark:hover:bg-opacity-10 h-14 w-14 rounded-xl">
            <SiGithub size={27} />
          </a>
          <a href="https://www.linkedin.com/in/jose-niquen/" target='_blank' rel="noreferrer"className="flex items-center justify-center font-medium bg-slate-900 bg-opacity-5 hover:bg-opacity-10 dark:bg-white dark:bg-opacity-5 dark:hover:bg-opacity-10 h-14 w-14 rounded-xl">
            <SiLinkedin size={27} />
          </a>
          <a href="https://www.instagram.com/jose.niquen/" target='_blank' rel="noreferrer"className="flex items-center justify-center font-medium bg-slate-900 bg-opacity-5 hover:bg-opacity-10 dark:bg-white dark:bg-opacity-5 dark:hover:bg-opacity-10 h-14 w-14 rounded-xl">
            <SiInstagram size={27} />
          </a>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end lg:pr-12 w-full">
        <img src="images/perfil.jpg" alt="Perfil" className="object-scale-down rounded-2xl h-60 lg:h-80" />
      </div>
    </div>
  )
}
