import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">
            <img src="/logo.webp" alt="Logo" />
          </a>
          <div className="navbar-title-container">
            <span className="navbar-title">Objective Artefacts</span>
            <span className="navbar-caption">A place for sharing insights.</span>
          </div>
        </div>
        <button className="navbar-toggle" onClick={toggleNav}>
          ☰
        </button>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Library</a>
          <a href="#contact">Store</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;