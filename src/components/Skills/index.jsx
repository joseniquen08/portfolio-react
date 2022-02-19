import { Tab } from '@headlessui/react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import skills from '../../utils/data/skills';
import { LogoSkill } from './LogoSkill';

export const Skills = () => {

  const [t] = useTranslation("skills");

  return (
    <div id="skills" className="px-5 pt-24 pb-12 mx-auto sm:px-8 lg:px-16 max-w-6xl dark:text-white">
      <div className="space-y-10">
        <div className="flex justify-center md:justify-start">
          <p className="text-4xl font-bold tracking-wide text-center text-transparent md:text-5xl w-max lg:text-left bg-clip-text bg-gradient-to-r from-blue-600 to-sky-600 dark:to-sky-500">{t("title")}</p>
        </div>
        <div className="space-y-6">
          <div className="w-full max-w-3xl mx-auto">
            <Tab.Group>
              <Tab.List className="flex flex-col w-full max-w-2xl py-3 px-3.5 mx-auto space-y-3 text-sm bg-gray-200 sm:flex-row md:text-base sm:space-y-0 sm:space-x-3 bg-opacity-70 dark:bg-white dark:bg-opacity-5 rounded-xl">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.99 }} className="w-full">
                  <Tab className={({ selected }) => `w-full py-2.5 leading-5 font-semibold rounded-lg ${selected ? 'bg-blue-700 text-white shadow-lg shadow-blue-600/50' : 'dark:bg-white dark:bg-opacity-5 rounded-xl font-medium bg-gray-300 bg-opacity-70'}`}>{t("types.languages")}</Tab>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.99 }} className="w-full">
                  <Tab className={({ selected }) => `w-full py-2.5 leading-5 font-semibold text-[0.9rem] rounded-lg ${selected ? 'bg-blue-700 text-white shadow-lg shadow-blue-600/50' : 'dark:bg-white dark:bg-opacity-5 rounded-xl font-medium bg-gray-300 bg-opacity-70'}`}>{t("types.lib-and-fram")}</Tab>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.99 }} className="w-full">
                  <Tab className={({ selected }) => `w-full py-2.5 leading-5 font-semibold rounded-lg ${selected ? 'bg-blue-700 text-white shadow-lg shadow-blue-600/50' : 'dark:bg-white dark:bg-opacity-5 rounded-xl font-medium bg-gray-300 bg-opacity-70'}`}>{t("types.tools")}</Tab>
                </motion.div>
              </Tab.List>
              <Tab.Panels className="flex items-center justify-center w-full max-w-2xl px-10 mx-auto mt-3 bg-gray-200 bg-opacity-50 h-96 dark:bg-white dark:bg-opacity-5 rounded-2xl">
                <Tab.Panel className="w-full">
                  <div className="grid grid-cols-3 gap-10 text-sm font-medium tracking-wide sm:text-base lg:text-lg">
                    {
                      skills.languages.map(skill => (
                        <LogoSkill key={skill.id} img={skill.img} name={skill.name} />
                      ))
                    }
                  </div>
                </Tab.Panel>
                <Tab.Panel className="w-full">
                  <div className="grid grid-cols-3 gap-10 text-sm font-medium tracking-wide sm:text-base lg:text-lg">
                    {
                      skills.lib_fram.map(skill => (
                        <LogoSkill key={skill.id} img={skill.img} name={skill.name} />
                      ))
                    }
                  </div>
                </Tab.Panel>
                <Tab.Panel className="w-full">
                  <div className="grid grid-cols-3 gap-10 text-sm font-medium tracking-wide sm:text-base lg:text-lg">
                    {
                      skills.tools.map(skill => (
                        <LogoSkill key={skill.id} img={skill.img} name={skill.name} />
                      ))
                    }
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </div>
  )
}
