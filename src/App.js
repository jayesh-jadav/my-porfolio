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

function App() {
  const { newTheme } = useSelector((state) => state.auth);

  return (
    <div
      className="main"
      style={{
        backgroundColor: colors.background,
        paddingRight: 30,
        paddingLeft: 30,
        paddingTop: 20,
      }}
    >
      <header
        style={{
          top: 20,
          marginBottom: 10,
          position: "sticky",
          backgroundColor: colors.background,
        }}
      >
        <Header />
      </header>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
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
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
