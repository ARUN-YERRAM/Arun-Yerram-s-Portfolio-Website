import React from "react";
import styles from "./CodingProfiles.module.css";
import profiles from "../data/profiles.json";

export const CodingProfiles = () => {
  return (
    <section className={styles.container} id="coding-profiles">
      <h2 className={styles.title}>Coding Profiles</h2>
      <div className={styles.content}>
        {profiles.map((profile, id) => (
          <div key={id} className={styles.profile}>
            <div className={styles.profileImageContainer}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/codingprofiles/${profile.avatarUrl}`}
                alt={`${profile.username}`}
                className={styles.avatar}
              />
            </div>
            <div className={styles.profileDetails}>
              <h3>{profile.username}</h3>
              <p>{profile.platform}</p>
              <a href={profile.profileUrl} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
