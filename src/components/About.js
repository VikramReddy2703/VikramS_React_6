import React from 'react';
import './About.css';
import profilePicture from './vikram.jpg';

const About = () => {
  return (
    <div className="about-container">
            <div className="about-image">
              <img src={profilePicture} alt="Profile Picture" />
            </div>
            <div className="about-content">
              <h1>Vikram S</h1>
              <p>A trainee doing MERN Stack!!</p>
              <p>Mtech CSE in VIT Vellore</p>
            </div>
          </div>
  );
};

export default About;
