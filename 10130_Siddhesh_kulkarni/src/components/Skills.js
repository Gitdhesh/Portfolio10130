// src/components/Skills.js
import React from 'react';
import './Skills.css';

function Skills() {
  const skills = ["Java", "C", "C++", "React"]; // Add more skills as needed

  return (
    <div className="skills-section">
      <h2>SKILLS</h2>
      <ol className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            {skill}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Skills;
