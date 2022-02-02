import { GlobeAltIcon } from '@heroicons/react/outline';
import { Github } from '@icons-pack/react-simple-icons';
import { useTranslation } from 'react-i18next';

export const Projects = () => {

  const [t] = useTranslation("projects");

  const projects = [
    {
      name: "Edullka (Landing)",
      github: "https://github.com/edullka/edullka-react",
      href: "https://edullka.com/",
      image: "images/edullka_template.png",
      alert: "",
    },
    {
      name: "BootcamPe (E-commerce)",
      github: "https://github.com/joseniquen08/bootcampe_niquen",
      href: "https://react-coder-988f2.web.app/",
      image: "images/bootcampe_template.png",
      alert: t("db.alert"),
    },
    {
      name: "Portfolio",
      github: "https://github.com/joseniquen08/portfolio-react",
      href: "https://joseniquen.me/",
      image: "images/portfolio_template.png",
      alert: "",
    },
    {
      name: "Music Player",
      github: "https://github.com/joseniquen08/music-player-react",
      href: "https://music-player-react-nine.vercel.app/",
      image: "images/music_player_template.png",
      alert: t("db.message"),
    }
  ];

  return (
    <div id="projects" className="px-4 pt-24 pb-12 mx-auto lg:px-16 max-w-7xl dark:text-white">
      <div className="space-y-10">
        <div className="flex justify-center md:justify-start">
          <p className="py-1 text-4xl font-bold tracking-wide text-center text-transparent md:text-5xl w-max lg:text-left bg-clip-text bg-gradient-to-r from-blue-600 to-sky-600 dark:to-sky-500">{t("title")}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {
            projects.map((project, index) => (
              <button key={index} type="button" className="relative my-3 overflow-hidden cursor-pointer card rounded-xl bg-slate-800/80">
                <img src={project.image} alt="image_random" className="object-cover object-center w-full img opacity-40 md:opacity-100" />
                <div className="absolute bottom-0 flex items-center w-full h-10 px-6 text-white footer sm:duration-500 sm:translate-y-full bg-slate-900/70">
                  <p className="text-lg font-medium">{project.name}</p>
                </div>
                <p className="absolute inset-0 flex items-center justify-center text-xl font-medium text-white alert md:hidden md:font-normal">{project.alert}</p>
                <a href={`${project.href}`} target="_blank" rel="noreferrer"className="absolute p-2 text-white links sm:duration-500 sm:-translate-y-20 top-4 right-5 bg-slate-900/40 hover:bg-slate-900/60 rounded-xl">
                  <GlobeAltIcon className="w-6 h-6" />
                </a>
                <a href={`${project.github}`} target="_blank" rel="noreferrer"className="absolute p-2 text-white links sm:duration-500 sm:-translate-y-20 top-4 left-5 bg-slate-900/40 hover:bg-slate-900/60 rounded-xl">
                  <Github className="w-6 h-6" />
                </a>
              </button>
            ))
          }
        </div>
      </div>
    </div>
  )
}
