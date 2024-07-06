import React, { useState } from 'react';
import styles from './App.module.css';
import { About } from '../components/About/About';
import { CodingProfiles } from '../components/CodingProfiles/CodingProfiles';
import { Contact } from '../components/Contact/Contact';
import { Experience } from '../components/Experience/Experience';
import { Hero } from '../components/Hero/Hero';
import { Navbar } from '../components/Navbar/Navbar';
import { Projects } from '../components/Projects/Projects';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className={`${styles.App} ${darkMode ? styles.darkMode : ''}`}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <CodingProfiles />
      <Contact />
      <button className={styles.darkModeToggle} onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default App;
