// src/components/Experience.js
import React from 'react';
import './Experience.css'; // Link the specific CSS file for Experience styling

function Experience() {
  return (
    <div className="experience-section">
      <h2>Achievements & Experience</h2>
      <div className="achievement">
        <h3>Internship:Siemens Mobility,Nashik</h3>
        <p><strong>Role:</strong>  Intern</p>
        <p><strong>Duration:</strong>june 2024-july 2024 </p>
        <p><strong>Details:</strong> I had the opportunity to learn about the traction and auxiliary converters and motors,where I explored the shop flooer and saw all the components.I also helped in BOM verification and preparation,along with which i also verified the wire routing charts.I also got to know about not just aout the manufacturing,but also about how the components are packed,and transported,within and outside the nation.Overall it was a very helpful and important experience of my life.</p>
      </div>
      <div className="achievement">
        <h3>Project Cell CRCE</h3>
        <p><strong>Position:</strong> SE representative</p>
        <p><strong>Achievement:</strong> At project cell,we not only work on new projects,but also learn hardware and software and most importantly,how to integrate both of these into an amazing invention.Through project cell,I've participated in the IIT Bombay's techfest,where built a line follower bot.I've aslo participated in national competitions like EYantra,via Project cell.</p>
      </div>
      {/* Add more experiences/achievements as needed */}
    </div>
  );
}

export default Experience;
