import styles from "./App.module.css";
import { About } from "../components/About/About";
import {CodingProfiles} from "../components/CodingProfiles/CodingProfiles";
import { Contact } from "../components/Contact/Contact";
import { Experience } from "../components/Experience/Experience";
import { Hero } from "../components/Hero/Hero";
import { Navbar } from "../components/Navbar/Navbar";
import { Projects } from "../components/Projects/Projects";


// App.js or index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';


function App() {
  
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <CodingProfiles />
      <Contact />
    </div>
  );
}

export default App;


// import CodingProfile from './components/CodingProfiles/CodingProfile';

// const App = () => {
//   return (
//     <div className="App">
      
//     </div>
//   );
// };

// export default App;
