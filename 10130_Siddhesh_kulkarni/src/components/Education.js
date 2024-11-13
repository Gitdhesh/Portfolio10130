// src/components/Education.js
import React from 'react';
import './Education.css'; // Ensure this file is created for styling

function Education() {
  return (
    <div className="education-section">
      <h2>EDUCATION</h2>
      <div className="roadmap">
        <div className="roadmap-item">
          <div className="circle">1</div>
          <div className="info">
            <h3>Dav Public School, Thane</h3>
            <h4>School Education</h4>
            <p>2008-2021</p>
          </div>
        </div>

        {/* Add other education milestones */}
        <div className="roadmap-item">
          <div className="circle">2</div>
          <div className="info">
            <h3>People's Education Soceity Trust,Kopri</h3>
            <h4>Science Stream</h4>
            <p>2021-2023</p>
          </div>
        </div>
        <div className="roadmap-item">
          <div className="circle">3</div>
          <div className="info">
            <h3>Fr Conceicao Rodrigues College Of Engineering,Bandra</h3>
            <h4>BE in Electronics and Computer Science</h4>
            <p>current</p>
          </div>
        </div>
        
        {/* Add more education steps as needed */}
      </div>
    </div>
  );
}

export default Education;

