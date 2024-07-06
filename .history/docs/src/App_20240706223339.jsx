import styles from "./App.module.css";
import { About } from "../components/About/About";
import { Contact } from "../components/Contact/Contact";
import { Experience } from "../components/Experience/Experience";
import { Hero } from "../components/Hero/Hero";
import { Navbar } from "../components/Navbar/Navbar";
import { Projects } from "../components/Projects/Projects";
import {CodingProfiles} from "../components/"
function App() {
  
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <CodingProfiles/>
      <Contact />
    </div>
  );
}

export default App;

