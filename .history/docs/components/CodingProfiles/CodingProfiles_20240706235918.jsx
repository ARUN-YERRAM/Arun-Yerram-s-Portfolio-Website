import React from "react";
import styles from "./CodingProfiles.module.css";
import profiles from "../../data/codingprofiles.json";

export const CodingProfiles = () => {
  return (
    <section className={`${styles.container} ${styles.animatedBackground}`}>
      <div className={styles.content}>
        <h2 className={styles.title}>Coding Profiles</h2>
        <p className={styles.description}>
          Check out my coding profiles on various platforms!
        </p>
      </div>
      <ul className={styles.links}>
        {profiles.map((profile, id) => (
          <li key={id} className={styles.link}>
            <a href={profile.url} target="_blank" rel="noopener noreferrer">
              {profile.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
