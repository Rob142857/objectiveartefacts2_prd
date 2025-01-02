import { useState } from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/">
            <img src="/logo.webp" alt="Logo" />
          </Link>
          <div className="navbar-title-container">
            <span className="navbar-title">Objective Artefacts</span>
            <span className="navbar-caption">A place for sharing insights.</span>
          </div>
        </div>
        <button className="navbar-toggle" onClick={toggleNav}>
          ☰
        </button>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/library">Library</Link>
          <Link to="/store">Store</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;