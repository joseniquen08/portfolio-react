import { Tab } from '@headlessui/react';
import { useTranslation } from 'react-i18next';

export const Skills = () => {

  const [t] = useTranslation("skills");

  return (
    <div id="skills" className=" px-5 sm:px-8 lg:px-16 pt-24 pb-12 mx-auto max-w-7xl dark:text-white">
      <div className="space-y-10">
        <div className="flex justify-center md:justify-start">
          <p className="text-4xl md:text-5xl font-bold text-center w-max lg:text-left tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-sky-600 dark:to-sky-500">{t("title")}</p>
        </div>
        <div className="space-y-6">
          <div className="w-full max-w-3xl mx-auto">
            <Tab.Group>
              <Tab.List className="flex flex-col sm:flex-row w-full max-w-2xl p-3 mx-auto text-sm md:text-base space-y-3 sm:space-y-0 sm:space-x-2 bg-gray-200 bg-opacity-70 dark:bg-white dark:bg-opacity-5 rounded-xl">
                <Tab className={({ selected }) => `w-full py-2.5 leading-5 font-semibold rounded-lg ${selected ? 'bg-blue-700 text-white shadow-lg shadow-blue-600/50' : 'dark:bg-white dark:bg-opacity-5 rounded-xl font-medium bg-gray-300 bg-opacity-70'}`}>{t("types.languages")}</Tab>
                <Tab className={({ selected }) => `w-full py-2.5 leading-5 font-semibold rounded-lg ${selected ? 'bg-blue-700 text-white shadow-lg shadow-blue-600/50' : 'dark:bg-white dark:bg-opacity-5 rounded-xl font-medium bg-gray-300 bg-opacity-70'}`}>{t("types.lib-and-fram")}</Tab>
                <Tab className={({ selected }) => `w-full py-2.5 leading-5 font-semibold rounded-lg ${selected ? 'bg-blue-700 text-white shadow-lg shadow-blue-600/50' : 'dark:bg-white dark:bg-opacity-5 rounded-xl font-medium bg-gray-300 bg-opacity-70'}`}>{t("types.tools")}</Tab>
              </Tab.List>
              <Tab.Panels className="max-w-2xl mx-auto mt-3 bg-gray-200 bg-opacity-50 dark:bg-white dark:bg-opacity-5 px-10 py-8 rounded-2xl">
                <Tab.Panel>
                  <div className="grid grid-cols-3 gap-10 text-sm sm:text-base lg:text-lg font-medium tracking-wide">
                    <div className="flex flex-col items-center space-y-4 text-center lg:space-y-1"><img src="icons/javascript.png" alt="logo_javascript" className="w-24" /><p>JavaScript</p></div>
                    <div className="flex flex-col items-center space-y-4 text-center lg:space-y-1"><img src="icons/html5.png" alt="logo_html5" className="w-24" /><p>Html5</p></div>
                    <div className="flex flex-col items-center space-y-4 text-center lg:space-y-1"><img src="icons/css3.png" alt="logo_css3" className="w-24" /><p>Css3</p></div>
                    <div className="flex flex-col items-center space-y-4 text-center lg:space-y-1"><img src="icons/java.png" alt="logo_java" className="w-24" /><p>Java</p></div>
                    <div className="flex flex-col items-center space-y-4 text-center lg:space-y-1"><img src="icons/python.png" alt="logo_python" className="w-24" /><p>Python</p></div>
                    {/* <div className="flex flex-col items-center space-y-4 text-center lg:space-y-1"><img src="icons/php.png" alt="logo_php" className="w-24" /><p>PHP</p></div> */}
                    <div className="flex flex-col items-center space-y-4 text-center lg:space-y-1"><img src="icons/cplusplus.png" alt="logo_cplusplus" className="w-24" /><p>C++</p></div>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="grid grid-cols-3 gap-10 text-sm sm:text-base lg:text-lg font-medium tracking-wide">
                    <div className="flex flex-col items-center space-y-4 text-center lg:space-y-1"><img src="icons/reactjs.png" alt="logo_reactjs" className="w-24" /><p>React</p></div>
                    <div className="flex flex-col items-center space-y-4 text-center lg:space-y-1"><img src="icons/nextjs.png" alt="logo_nextjs" className="w-24" /><p>Next.js</p></div>
                    {/* <div className="flex flex-col items-center space-y-4 text-center lg:space-y-1"><img src="icons/vuejs.png" alt="logo_vuejs" className="w-24" /><p>Vue.js</p></div>
                    <div className="flex flex-col items-center space-y-4 text-center lg:space-y-1"><img src="icons/expressjs.png" alt="logo_expressjs" className="w-24" /><p>Express</p></div> */}
                    <div className="flex flex-col items-center space-y-4 text-center lg:space-y-1"><img src="icons/tailwindcss.png" alt="logo_tailwindcss" className="w-24" /><p>Tailwind CSS</p></div>
                    <div className="flex flex-col items-center space-y-4 text-center lg:space-y-1"><img src="icons/spring.png" alt="logo_spring" className="w-24" /><p>Spring</p></div>
                    <div className="flex flex-col items-center space-y-4 text-center lg:space-y-1"><img src="icons/codeigniter.png" alt="logo_codeigniter" className="w-24" /><p>CodeIgniter</p></div>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="grid grid-cols-3 gap-10 text-sm sm:text-base lg:text-lg font-medium tracking-wide">
                    <div className="flex flex-col items-center space-y-4 text-center lg:space-y-1"><img src="icons/vscode.png" alt="logo_vscode" className="w-24" /><p>VSCode</p></div>
                    <div className="flex flex-col items-center space-y-4 text-center lg:space-y-1"><img src="icons/intellijidea.png" alt="logo_intellijidea" className="w-24" /><p>Intellij IDEA</p></div>
                    {/* <div className="flex flex-col items-center space-y-4 text-center lg:space-y-1"><img src="icons/git.png" alt="logo_git" className="w-24" /><p>Git</p></div> */}
                    <div className="flex flex-col items-center space-y-4 text-center lg:space-y-1"><img src="icons/mysql.png" alt="logo_mysql" className="w-24" /><p>MySQL</p></div>
                    <div className="flex flex-col items-center space-y-4 text-center lg:space-y-1"><img src="icons/firebase.png" alt="logo_firebase" className="w-24" /><p>Firebase</p></div>
                    <div className="flex flex-col items-center space-y-4 text-center lg:space-y-1"><img src="icons/photoshop.png" alt="logo_photoshop" className="w-24" /><p>Photoshop</p></div>
                    <div className="flex flex-col items-center space-y-4 text-center lg:space-y-1"><img src="icons/illustrator.png" alt="logo_illustrator" className="w-24" /><p>Illustrator</p></div>
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
