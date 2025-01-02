import { useSelector } from "react-redux";
import "./App.css";
import Header from "./Components/Header";
import { colors } from "./Config/theme";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Resume from "./Components/Resume";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import About from "./Components/About";
import { useEffect, useState } from "react";
import Services from "./Components/Services";

function App() {
  const { newTheme } = useSelector((state) => state.auth);
  const [activeSection, setActiveSection] = useState("home");

  // Handle smooth scrolling to the clicked section
  const handleScrollToSection = (event, newValue) => {
    const section = document.getElementById(newValue);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(newValue); // Update active section on click
    }
  };

  // Track the active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "services",
        "skills",
        "resume",
        "contact",
      ];
      const offset = 150; // Offset to trigger active section a bit earlier

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (
          section &&
          section.getBoundingClientRect().top < offset &&
          section.getBoundingClientRect().bottom > 0
        ) {
          setActiveSection(id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        backgroundColor: colors.background,
        position: "relative",
      }}
    >
      <header
        style={{
          top: 0,
          position: "sticky",
          backgroundColor: colors.primary,
          zIndex: 1000,
        }}
      >
        <Header
          value={activeSection}
          handleChange={(event, newValue) => {
            handleScrollToSection(event, newValue);
          }}
        />
      </header>
      <main className="main">
        <section id="home">
          <Home />
        </section>

        <section id="contact">
          <Contact />
        </section>
        {/* <section id="home">
          <Home />
        </section>
        <section id="about">
          <About
            handleChange={(event) => {
              handleScrollToSection("", event);
            }}
          />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="project">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="resume">
          <Resume />
        </section>
        <section id="contact">
          <Contact />
        </section> */}
      </main>
      <footer>
        <Footer
          handleScrollToSection={(event) => {
            handleScrollToSection(event, "home");
          }}
        />
      </footer>
    </div>
  );
}

export default App;
