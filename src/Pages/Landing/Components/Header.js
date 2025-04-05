import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import '../../../css/Header.css';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="brand">
        <a href="/"><img src='logo_only_transparent.png'/></a>
      </div>
      <ul className={`nav-links ${isMobile ? 'mobile' : ''}`}>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/Signup">Sign up</Link></li>
      </ul>
      <div className="menu-icon" onClick={handleToggle}>
        <span>&#9776;</span>
      </div>
    </nav>
  );
};

export default Header;
