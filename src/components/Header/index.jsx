import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

const hoverVariants = {
  "hover": { x: -4, y: -4 }
}

export const Header = () => {

  const [t] = useTranslation("header");

  return (
    <div className="flex flex-col-reverse space-y-reverse space-y-12 lg:flex-row w-full px-2 lg:px-16 py-10 lg:pt-36 lg:pb-16 mx-auto max-w-6xl">
      <div className="flex flex-col justify-center flex-none space-y-14">
        <div className="flex flex-col justify-center space-y-1 lg:space-y-4 text-center lg:text-left">
          <p className="text-4xl lg:text-[3.5rem] leading-[0.9] font-bold lg:tracking-wide dark:text-white text-stone-800 py-1.5">{t("hi")}</p>
          <p className="text-[3.5rem] break-words lg:tracking-wide leading-tight lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:to-cyan-500 font-extrabold py-1.5">{t("name")}</p>
          <p className="text-[1.75rem] break-words lg:text-[2.65rem] py-1 font-bold lg:tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">{t("junior")}</p>
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
        <motion.div whileHover="hover" className="relative h-60 w-60 lg:w-72 lg:h-72">
          <img src="images/perfil.jpg" alt="Perfil" className="absolute object-scale-down rounded-2xl h-60 lg:h-72 z-20" />
          <motion.div
            variants={hoverVariants}
            className="border-2 border-blue-600 dark:border-blue-500 absolute w-60 h-60 z-10 hidden lg:block lg:w-72 lg:h-72 rounded-2xl -bottom-[1.15rem] -right-[1.15rem]"></motion.div>
        </motion.div>
      </div>
    </div>
  )
}
