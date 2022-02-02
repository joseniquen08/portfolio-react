import { Tab } from '@headlessui/react';
import { useTranslation } from 'react-i18next';
import { LogoSkill } from './LogoSkill';

const skills = {
  languages: [
    { id: '1', img: 'javascript', name: 'JavaScript' },
    { id: '2', img: 'html5', name: 'HTML5' },
    { id: '3', img: 'css3', name: 'CSS3' },
    { id: '4', img: 'java', name: 'Java' },
    { id: '5', img: 'python', name: 'Python' },
    { id: '6', img: 'php', name: 'PHP' },
  ],
  lib_fram: [
    { id: '7', img: 'reactjs', name: 'React' },
    { id: '8', img: 'nextjs', name: 'Next.js' },
    { id: '9', img: 'tailwindcss', name: 'Tailwind CSS' },
    { id: '10', img: 'spring', name: 'Spring' },
    { id: '11', img: 'codeigniter', name: 'CodeIgniter' },
  ],
  tools: [
    { id: '12', img: 'vscode', name: 'VSCode' },
    { id: '13', img: 'intellijidea', name: 'Intellij IDEA' },
    { id: '14', img: 'mysql', name: 'MySQL' },
    { id: '15', img: 'firebase', name: 'Firebase' },
    { id: '16', img: 'photoshop', name: 'Photoshop' },
    { id: '17', img: 'illustrator', name: 'Illustrator' },
  ],
};

export const Skills = () => {

  const [t] = useTranslation("skills");

  return (
    <div id="skills" className="px-5 pt-24 pb-12 mx-auto  sm:px-8 lg:px-16 max-w-7xl dark:text-white">
      <div className="space-y-10">
        <div className="flex justify-center md:justify-start">
          <p className="text-4xl font-bold tracking-wide text-center text-transparent md:text-5xl w-max lg:text-left bg-clip-text bg-gradient-to-r from-blue-600 to-sky-600 dark:to-sky-500">{t("title")}</p>
        </div>
        <div className="space-y-6">
          <div className="w-full max-w-3xl mx-auto">
            <Tab.Group>
              <Tab.List className="flex flex-col w-full max-w-2xl p-3 mx-auto space-y-3 text-sm bg-gray-200 sm:flex-row md:text-base sm:space-y-0 sm:space-x-2 bg-opacity-70 dark:bg-white dark:bg-opacity-5 rounded-xl">
                <Tab className={({ selected }) => `w-full py-2.5 leading-5 font-semibold rounded-lg ${selected ? 'bg-blue-700 text-white shadow-lg shadow-blue-600/50' : 'dark:bg-white dark:bg-opacity-5 rounded-xl font-medium bg-gray-300 bg-opacity-70'}`}>{t("types.languages")}</Tab>
                <Tab className={({ selected }) => `w-full py-2.5 leading-5 font-semibold rounded-lg ${selected ? 'bg-blue-700 text-white shadow-lg shadow-blue-600/50' : 'dark:bg-white dark:bg-opacity-5 rounded-xl font-medium bg-gray-300 bg-opacity-70'}`}>{t("types.lib-and-fram")}</Tab>
                <Tab className={({ selected }) => `w-full py-2.5 leading-5 font-semibold rounded-lg ${selected ? 'bg-blue-700 text-white shadow-lg shadow-blue-600/50' : 'dark:bg-white dark:bg-opacity-5 rounded-xl font-medium bg-gray-300 bg-opacity-70'}`}>{t("types.tools")}</Tab>
              </Tab.List>
              <Tab.Panels className="max-w-2xl px-10 py-8 mx-auto mt-3 bg-gray-200 bg-opacity-50 dark:bg-white dark:bg-opacity-5 rounded-2xl">
                <Tab.Panel>
                  <div className="grid grid-cols-3 gap-10 text-sm font-medium tracking-wide sm:text-base lg:text-lg">
                    {
                      skills.languages.map(skill => (
                        <LogoSkill key={skill.id} img={skill.img} name={skill.name} />
                      ))
                    }
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="grid grid-cols-3 gap-10 text-sm font-medium tracking-wide sm:text-base lg:text-lg">
                    {
                      skills.lib_fram.map(skill => (
                        <LogoSkill key={skill.id} img={skill.img} name={skill.name} />
                      ))
                    }
                  </div>
                </Tab.Panel>
                <Tab.Panel>
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
