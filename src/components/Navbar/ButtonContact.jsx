import { motion } from "framer-motion";

export const ButtonContact = ({ openContactModal, t }) => {
  return (
    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={openContactModal} type="button" className="bg-blue-700 shadow-lg text-sm md:text-base lg:text-lg shadow-blue-600/50 text-white hover:bg-opacity-90 dark:bg-opacity-100 font-medium focus:outline-none dark:hover:bg-opacity-90 py-1.5 w-24 lg:w-32 rounded-xl relative">
      {t("button.contact")}
      <span className="absolute flex w-3 h-3 -top-1 -right-1">
        <span className="absolute inline-flex w-full h-full bg-green-500 rounded-full opacity-75 animate-ping"></span>
        <span className="relative inline-flex w-3 h-3 bg-green-500 rounded-full"></span>
      </span>
    </motion.button>
  )
}
