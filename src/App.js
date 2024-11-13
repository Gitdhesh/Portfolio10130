import React from 'react';
import './App.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Experience from './components/Experience';  // Import the new Experience component
import { handleDownloadResume} from './downloadResume';

function App() {
  return (
    <div className="App">
      {/* Header with Navbar */}
      <header>
        <nav className="navbar">
          <ul className="navbar-list">
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li> {/* New nav link for Experience */}
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="header-content">
          <h1>SIDDHESH KULKARNI</h1>
          <h4>STUDENT</h4>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <section id="about">
          <About onDownloadResume={handleDownloadResume} />
        </section>
        <section id="education"><Education /></section>
        <section id="skills"><Skills /></section>
        <section id="experience"><Experience /> </section> {/* Add Experience section here */}
        <section id="contact"><Contact /></section>
      </main>

      {/* Footer */}
      <footer>
        <h3>Connect with me</h3>
        <div className="social-icons">
          <a href="https://www.facebook.com/siddhesh.kulkarni.568" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.instagram.com/siddheshkulkarniii/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://x.com/Siddhes45039246" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
