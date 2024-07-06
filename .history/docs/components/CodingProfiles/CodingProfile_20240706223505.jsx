import React from 'react';
import './CodingProfiles.module.css'; // Make sure to create this CSS file

const profiles = [
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/arun_2005/',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png'
  },
  {
    name: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/user/arunyerram/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg'
  },
  {
    name: 'Codeforces',
    url: 'https://codeforces.com/profile/Arunyerram_12',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Codeforces_logo.svg'
  },
  {
    name: 'CodeChef',
    url: 'https://www.codechef.com/users/yarun2k05',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Codechef_Icon.png'
  }
];

const CodingProfile = () => {
  return (
    <div className="coding-profiles-container">
      {profiles.map(profile => (
        <div key={profile.name} className="coding-profile-card" onClick={() => window.open(profile.url, '_blank')}>
          <img src={profile.image} alt={profile.name} className="profile-image" />
          <h3>{profile.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default CodingProfile;
