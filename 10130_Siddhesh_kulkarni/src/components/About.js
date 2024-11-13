import React from 'react';
import './About.css';
import abutimage from '../images/abutimage.jpg';
import { handleDownloadResume } from '../downloadResume'; // Adjust path if needed

function About() {
  return (
    <div className="about-section">
      <img src={abutimage} alt="About Me" className="profile-photo" />
      <h2>ABOUT ME</h2>
      <p>Hi! I'm Siddhesh Kulkarni, a student of Fr Conceicao Rodrigues College of Engineering, Bandra. I'm currently pursuing a bachelor's degree in Electronics and Computer Science. I'm highly interested in C++, but I'm also fond of front-end development, especially React.js. I plan on pursuing a master's degree in my respective field.</p>
      
      {/* Download Resume Button */}
      <button onClick={handleDownloadResume} className="download-button">
        Download Resume
      </button>
    </div>
  );
}

export default About;
