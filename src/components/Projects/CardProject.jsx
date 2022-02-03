import { GlobeAltIcon } from "@heroicons/react/outline";
import { Github } from "@icons-pack/react-simple-icons";
import { motion } from "framer-motion";

export const CardProject = ({ image, name, alert, href, github }) => {
  return (
    <motion.div whileHover={{ scale: 1.03, transition: { duration: 0.4 } }} className="relative my-3 overflow-hidden cursor-pointer card rounded-xl bg-slate-800/80">
      <img src={image} alt="image_random" className="object-cover object-center w-full img opacity-40 md:opacity-100" />
      <div className="absolute bottom-0 flex items-center w-full h-10 px-6 text-white footer sm:duration-500 sm:translate-y-full bg-slate-900/70">
        <p className="text-lg font-medium">{name}</p>
      </div>
      <p className="absolute inset-0 flex items-center justify-center text-xl font-medium text-white alert md:hidden md:font-normal">{alert}</p>
      <a href={`${href}`} target="_blank" rel="noreferrer"className="absolute p-2 text-white links sm:duration-500 sm:-translate-y-20 top-4 right-5 bg-slate-900/40 hover:bg-slate-900/60 rounded-xl">
        <GlobeAltIcon className="w-6 h-6" />
      </a>
      <a href={`${github}`} target="_blank" rel="noreferrer"className="absolute p-2 text-white links sm:duration-500 sm:-translate-y-20 top-4 left-5 bg-slate-900/40 hover:bg-slate-900/60 rounded-xl">
        <Github className="w-6 h-6" />
      </a>
    </motion.div>
  );
};
