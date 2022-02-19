import { useTranslation } from "react-i18next";
import { HiOutlinePlusSm } from 'react-icons/hi';
import { SiGithub, SiInstagram, SiLinkedin, SiReact, SiTailwindcss } from "react-icons/si";

export const Footer = () => {

  const [t] = useTranslation("footer");

  return (
    <footer className="dark:text-white">
      <div className="px-4 sm:px-10 lg:px-16 pt-6 pb-10 md:py-6 mx-auto max-w-7xl">
        <div className="relative flex flex-col md:flex-row space-y-8 md:space-y-0 w-full items-center justify-between">
          <div className="flex flex-col z-20 md:flex-row space-y-3 md:space-y-0 space-x-0 md:space-x-2.5 items-center justify-center">
            <p className="text-sm md:text-base">{t("made-with")}</p>
            <div className="flex items-center space-x-1.5" >
              <SiReact className="w-16 h-16 md:w-9 md:h-9" />
              <HiOutlinePlusSm className="w-6 h-6 md:w-4 md:h-4" />
              <SiTailwindcss className="w-16 h-16 md:w-9 md:h-9" />
            </div>
          </div>
          <p className="text-center md:absolute z-10 inset-0 flex items-center justify-center">{t("copyright")}</p>
          <div className="flex justify-center z-20 space-x-4 md:space-x-2 text-lg dark:text-white text-slate-900">
            <a href="https://github.com/joseniquen08" target='_blank' rel="noreferrer"className="flex items-center justify-center font-medium hover:bg-slate-900 hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5 h-11 w-11 rounded-xl">
              <SiGithub className="w-8 h-8 md:w-6 md:h-6" />
            </a>
            <a href="https://www.linkedin.com/in/jose-niquen/" target='_blank' rel="noreferrer"className="flex items-center justify-center font-medium hover:bg-slate-900 hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5 h-11 w-11 rounded-xl">
              <SiLinkedin className="w-8 h-8 md:w-6 md:h-6" />
            </a>
            <a href="https://www.instagram.com/jose.niquen/" target='_blank' rel="noreferrer"className="flex items-center justify-center font-medium hover:bg-slate-900 hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5 h-11 w-11 rounded-xl">
              <SiInstagram className="w-8 h-8 md:w-6 md:h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
