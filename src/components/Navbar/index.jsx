import { MenuIcon, XIcon } from '@heroicons/react/outline';
import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ModalContact } from './ModalContact';
import { MenuLanguage } from './MenuLanguage';
import { MenuTheme } from './MenuTheme';
import { ButtonContact } from './ButtonContact';

export const Navbar = () => {

  const [t, i18n] = useTranslation("navbar");

  const [showBg, setShowBg] = useState(false);
  const [lngSelected, setLngSelected] = useState("en");
  const [themeSelected, setThemeSelected] = useState("sys");
  const [menu, setMenu] = useState(false);
  const [contactModalIsOpen, setContactModalIsOpen] = useState(false);

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
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 24) {
        setShowBg(true);
      } else {
        setShowBg(false);
      }
    });
  }, [themeSelected]);

  const pressButton = () => {
    if (menu) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  }

  const changeTheme = (theme) => {
    if (theme === "sys") {
      localStorage.removeItem("theme");
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.getElementsByTagName("HTML")[0].setAttribute("class", "dark");
      } else {
        document.getElementsByTagName("HTML")[0].setAttribute("class", theme);
      }
    } else {
      localStorage.setItem("theme", theme);
      document.getElementsByTagName("HTML")[0].setAttribute("class", theme);
    }
    setThemeSelected(theme);
  }

  const closeContactModal = () => {
    setContactModalIsOpen(false);
  }

  const openContactModal = () => {
    setContactModalIsOpen(true);
  }

  return (
    <>
      <nav className={`dark:text-white text-gray-700 mt-1 z-40 sticky top-0 w-full bg-white bg-gradient-to-r from-gray-50 to-gray-50/95 dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-900/95 ${showBg ? 'border-b shadow-lg shadow-gray-200/50 dark:shadow-slate-900/50' : ''}`}>
        <div className="relative flex flex-row items-center justify-between px-2 py-3 mx-auto lg:py-2 sm:px-4 lg:px-16 max-w-7xl">
          <div className="flex">
            <div className="flex items-center md:hidden">
              <button onClick={pressButton} type="button" className="inline-flex items-center justify-center p-1.5 text-slate-700 dark:text-slate-300 rounded-md hover:bg-gray-200/50 dark:hover:bg-slate-700/50 focus:outline-none" aria-expanded="false">
                {
                  menu ? (
                    <XIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                  ) : (
                    <MenuIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                  )
                }
              </button>
            </div>
            <div className="z-10 flex items-center pl-1 sm:pl-2">
              <Link to='/' className="text-xl font-semibold tracking-wide sm:text-2xl lg:text-3xl dark:text-gray-200 text-slate-800 focus:outline-none">jose<span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">niquen</span><span className="font-black text-green-600">.</span></Link>
            </div>
          </div>
          <div className="hidden md:block">
            <ul className="top-0 left-0 z-0 flex flex-row items-center justify-center w-full h-full space-x-10 text-lg font-semibold dark:font-medium">
              <li>
                <a href="/#about" className="focus:outline-none tracking-wide [text-decoration:underline_2px_rgba(255,255,255,0)] [transition:text-decoration-color_500ms] hover:[text-decoration-color:rgba(90,90,90,1)] dark:hover:[text-decoration-color:rgba(255,255,255,1)] underline-offset-8 hover:underline-offset-8">{t("ul.about-me")}</a>
              </li>
              <li>
                <a href="/#skills" className="focus:outline-none tracking-wide [text-decoration:underline_2px_rgba(255,255,255,0)] [transition:text-decoration-color_500ms] hover:[text-decoration-color:rgba(90,90,90,1)] dark:hover:[text-decoration-color:rgba(255,255,255,1)] underline-offset-8 hover:underline-offset-8">{t("ul.skills")}</a>
              </li>
              <li>
                <a href="/#projects" className="focus:outline-none tracking-wide [text-decoration:underline_2px_rgba(255,255,255,0)] [transition:text-decoration-color_500ms] hover:[text-decoration-color:rgba(90,90,90,1)] dark:hover:[text-decoration-color:rgba(255,255,255,1)] underline-offset-8 hover:underline-offset-8">{t("ul.projects")}</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-row items-center space-x-1.5 sm:space-x-2 lg:space-x-3">
            <MenuLanguage lngSelected={lngSelected} setLngSelected={setLngSelected} i18n={i18n} />
            <MenuTheme themeSelected={themeSelected} setThemeSelected={setThemeSelected} changeTheme={changeTheme} t={t} />
            <div className="pr-1.5">
              <ButtonContact openContactModal={openContactModal} t={t} />
            </div>
          </div>
        </div>
        {
          menu ? (
            <div className="block font-medium text-gray-800 md:hidden dark:text-white bg-gray-200/70 dark:bg-slate-800">
              <div className="px-2.5 sm:px-4 py-3 space-y-1.5">
                <a onClick={pressButton} href="/#about" className="block rounded-xl focus:bg-gray-300 dark:focus:bg-slate-900 tracking-wide px-3 py-1.5">{t("ul.about-me")}</a>
                <a onClick={pressButton} href="/#skills" className="block rounded-xl focus:bg-gray-300 dark:focus:bg-slate-900 tracking-wide px-3 py-1.5">{t("ul.skills")}</a>
                <a onClick={pressButton} href="/#projects" className="block rounded-xl focus:bg-gray-300 dark:focus:bg-slate-900 tracking-wide px-3 py-1.5">{t("ul.projects")}</a>
              </div>
            </div>
          ) : (
            <></>
          )
        }
      </nav>
      <ModalContact theme={themeSelected} contactModalIsOpen={contactModalIsOpen} closeContactModal={closeContactModal} language={lngSelected} />
    </>
  )
}
