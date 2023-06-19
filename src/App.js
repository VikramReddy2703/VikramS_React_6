import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';
import profilePicture from './home.JPG';

const App = () => {
  return (
    <Router>
      <div className="main-container">
        <header>
          <Navbar />
        </header>
        <div className="content-container">
          <div className="content">
            <Routes>
              <Route path="/" element={<AppContent />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

const AppContent = () => {
  return (
    <div className="image-container">
      <img src={profilePicture} alt="Vikram" className="profile-image" />
      <span className="blinking-text">I'm a DEVELOPER</span>
    </div>
  );
};

export default App;
