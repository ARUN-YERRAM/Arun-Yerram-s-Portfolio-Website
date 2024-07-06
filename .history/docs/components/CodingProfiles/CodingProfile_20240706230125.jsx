[
    {
      "name": "LeetCode",
      "url": "https://leetcode.com/u/arun_2005/",
      "image": "leetcodeIcon.png"
    },
    {
      "name": "GeeksforGeeks",
      "url": "https://www.geeksforgeeks.org/user/arunyerram/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user",
      "image": "geeksforgeeksIcon.png"
    },
    {
      "name": "Codeforces",
      "url": "https://codeforces.com/profile/Arunyerram_12",
      "image": "codeforcesIcon.png"
    },
    {
      "name": "CodeChef",
      "url": "https://www.codechef.com/users/yarun2k05",
      "image": "codechefIcon.png"
    }
  ]
  


  import React from "react";
import styles from "./CodingProfile.module.css";
import profiles from "../../data/codingProfiles.json";
import { getImageUrl } from "../../utils";

export const CodingProfile = () => {
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
              src={getImageUrl(`codingProfiles/${profile.image}`)}
              alt={`${profile.name} icon`}
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

export default CodingProfile;
