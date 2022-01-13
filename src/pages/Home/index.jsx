import { About } from "../../components/About";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { Projects } from "../../components/Projects";
import { Skills } from "../../components/Skills";

export const Home = () => {
  return (
    <>
      <div className="h-6"></div>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  )
}
