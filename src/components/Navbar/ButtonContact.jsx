export const ButtonContact = ({ openContactModal, t }) => {
  return (
    <button onClick={openContactModal} type="button" className="bg-blue-700 shadow-lg text-sm md:text-base lg:text-lg shadow-blue-600/50 text-white hover:bg-opacity-90 dark:bg-opacity-100 font-medium focus:outline-none dark:hover:bg-opacity-90 py-1.5 w-24 lg:w-32 rounded-xl relative">
      {t("button.contact")}
      <span className="flex h-3 w-3 absolute -top-1 -right-1">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
    </button>
  )
}
