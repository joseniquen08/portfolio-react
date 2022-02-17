import { useTranslation } from "react-i18next";
import { v4 } from "uuid";
import { CardProject } from './CardProject';

export const Projects = () => {

  const [t] = useTranslation("projects");

  const projects = [
    {
      id: v4(),
      name: "Licius (Social Network)",
      github: "https://github.com/joseniquen08/licius-react",
      href: "https://licius-react.vercel.app/",
      image: "images/licius_template.png",
      alert: "",
    },
    {
      id: v4(),
      name: "Edullka (Landing)",
      github: "https://github.com/edullka/edullka-react",
      href: "https://edullka.com/",
      image: "images/edullka_template.png",
      alert: "",
    },
    {
      id: v4(),
      name: "BootcamPe (E-commerce)",
      github: "https://github.com/joseniquen08/bootcampe_niquen",
      href: "https://react-coder-988f2.web.app/",
      image: "images/bootcampe_template.png",
      alert: t("db.alert"),
    },
    {
      id: v4(),
      name: "Portfolio",
      github: "https://github.com/joseniquen08/portfolio-react",
      href: "https://joseniquen.me/",
      image: "images/portfolio_template.png",
      alert: "",
    },
    {
      id: v4(),
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
            projects.map(({id, name, image, href, alert, github}) => (
              <CardProject
                key={id}
                name={name}
                image={image}
                href={href}
                alert={alert}
                github={github}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}
