import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Arun Yerram</h1>
        <p className={styles.description}>
          {/* I'm a full-stack developer with 5 years of experience using React and */}
          {/* NodeJS. Reach out if you'd like to learn more! */}
          I am Pursing my Bachelor's 2nd year and having keen interest in Problem Solving ,Web Development, and Data Science.

        </p>
        <a href="mailto:arunyerram12022005@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/Passport1.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
        width="50"
        height="40"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
