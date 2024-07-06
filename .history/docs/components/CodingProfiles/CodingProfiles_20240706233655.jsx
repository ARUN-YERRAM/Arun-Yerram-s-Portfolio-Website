import React from "react";
import styles from "./CodingProfiles.module.css";
import profiles from "../../data/codingprofiles.json";
import { getImageUrl } from "../../utils";

export const CodingProfiles = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Coding Profiles</h2>
        <p className={styles.description}>
          Check out my coding profiles on various platforms!
        </p>
      </div>
      <ul className={styles.links}>
        {profiles.map((profile, id) => (
          <li key={id} className={styles.link}>
            <img
              src={getImageUrl(`/${profile.image}`)}  // Assuming the images are in the root directory
              alt={`.${profile.name} icon`}
              className={styles.profileImg}
            />

            
            <a href={profile.url} target="_blank" rel="noopener noreferrer">
              {profile.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CodingProfiles;
