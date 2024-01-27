// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className={`navbar ${isNavOpen ? 'open' : ''}`}>
      <div className="container-nav">
        <div className="navbar-toggle" onClick={toggleNav}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <div className={`nav-links ${isNavOpen ? 'open' : ''}`}>
          <Link
            className='nav-link'
            activeClass="active"
            to="home-section"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Home
          </Link>
          <Link
            className='nav-link'
            activeClass="active"
            to="about-section"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            About Us
          </Link>
          <Link
            className='nav-link'
            activeClass="active"
            to="contact-section"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
