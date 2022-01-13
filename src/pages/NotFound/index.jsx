import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const NotFound = () => {

  const [t, i18n] = useTranslation("not_found");

  const [themeSelected, setThemeSelected] = useState("sys");

  useEffect(() => {
    if (!('theme' in localStorage)) {
      setThemeSelected("sys");
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.getElementsByTagName("HTML")[0].setAttribute("class", "dark");
      }
    } else {
      document.getElementsByTagName("HTML")[0].setAttribute("class", localStorage.getItem("theme"));
      if (localStorage.getItem('theme') === "dark") {
        setThemeSelected("dark");
      } else if (localStorage.getItem('theme') === "light") {
        setThemeSelected("light");
      }
    }

    if (!('lng' in localStorage)) {
      localStorage.setItem('lng', "en");
      i18n.changeLanguage("en");
    } else {
      if (localStorage.getItem('lng') === "en") {
        i18n.changeLanguage("en");
      } else if (localStorage.getItem('lng') === "es") {
        i18n.changeLanguage("es");
      }
    }
  }, [themeSelected, i18n]);

  return (
    <div className="h-screen w-screen bg-white bg-gradient-to-r from-gray-50 to-gray-50/95 dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-900/95">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-center">
        <div className="flex flex-col md:flex-row md:space-x-5 px-3">
          <div className="flex items-center md:items-start justify-center">
            <p className="text-9xl md:text-8xl font-extrabold md:text-blue-600 text-transparent bg-clip-text bg-gradient-to-b from-blue-600 to-sky-500">404</p>
          </div>
          <div className="space-y-8">
            <div className="md:border-l md:border-gray-200 md:dark:border-slate-700 md:pl-5 space-y-1">
              <p className="text-6xl md:text-6xl font-bold pb-3 text-transparent bg-clip-text bg-gradient-to-b from-sky-500 to-green-500 md:bg-gradient-to-r md:from-blue-600 md:to-green-600 md:text-left text-center">{t("title")}</p>
              <p className="dark:text-gray-300 text-gray-500 md:text-left text-center">{t("description")}</p>
            </div>
            <div className="md:pl-5 flex items-center justify-center md:justify-start">
              <Link to="/" className="bg-blue-600 px-4 text-white font-medium rounded-xl shadow-lg shadow-blue-600/50 py-2 focus:outline-none">{t("button")}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
