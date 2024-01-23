// Navbar.js
import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav>
      <div className="container-nav">

          <Link className='nav-link' activeClass="active" to="home-section" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
        <Link className='nav-link'
            activeClass="active" 
            to="about-section" 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500} 
          >
            About Us
          </Link>

          <Link className='nav-link'
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
    </nav>
  );
};

export default Navbar;
