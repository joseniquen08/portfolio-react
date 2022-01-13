import { About } from "../../components/About"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Navbar } from "../../components/Navbar"
import { Projects } from "../../components/Projects"
import { Skills } from "../../components/Skills"

export const Home = () => {
  return (
    <>
      <div className="relative bg-white bg-gradient-to-r from-gray-50 to-gray-50/95 dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-900/95">
        <div className="h-6"></div>
        <Navbar />
        <main>
          <Header />
          <About />
          <Skills />
          <Projects />
        </main>
        <Footer />
      </div>
    </>
  )
}
