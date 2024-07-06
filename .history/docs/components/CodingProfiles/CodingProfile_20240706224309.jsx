import React from 'react';
import styles from './CodingProfile.module.css';
import { getImageUrl } from '../../utils';

const profiles = [
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/arun_2005/',
    image: 'leetcodeIcon.png'
  },
  {
    name: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/user/arunyerram/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user',
    image: 'geeksforgeeksIcon.png'
  },
  {
    name: 'Codeforces',
    url: 'https://codeforces.com/profile/Arunyerram_12',
    image: 'codeforcesIcon.png'
  },
  {
    name: 'CodeChef',
    url: 'https://www.codechef.com/users/yarun2k05',
    image: 'codechefIcon.png'
  }
];

export const CodingProfile = () => {
  return (
    <section id="coding-profile" className={styles.container}>
      <div className={styles.text}>
        <h2>Coding Profiles</h2>
        <p>Check out my coding profiles on various platforms!</p>
      </div>
      <ul className={styles.links}>
        {profiles.map(profile => (
          <li key={profile.name} className={styles.link}>
            <img src={getImageUrl(`codingProfiles/${profile.image}`)} alt={`${profile.name} icon`} />
            <a href={profile.url} target="_blank" rel="noopener noreferrer">{profile.name}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};
