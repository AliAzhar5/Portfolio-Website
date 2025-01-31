import Header from "./Header";
import Footer from "./Footer";
import Home from "../sections/Home";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 lg:px-8">
        <section id="home" className="min-h-screen pt-20">
          <Home />
        </section>
        <section id="about" className="min-h-screen pt-20">
          <About />
        </section>
        <section id="experience" className="min-h-screen pt-20">
          <Experience />
        </section>
        <section id="skills" className="min-h-screen pt-20">
          <Skills />
        </section>
        <section id="projects" className="min-h-screen pt-20">
          <Projects />
        </section>
        <section id="contact" className="min-h-screen pt-20">
          <Contact />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
