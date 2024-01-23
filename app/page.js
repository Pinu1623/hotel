"use client"
import React from 'react';
import Navbar from './components/NavBar';
import './globals.css';
import HDetails from './components/HDetail';
import Hosts from './components/Host';
import AboutUs from './components/About';
import Things from './components/Thing';
import Features from './components/feature';
import Contacts from './components/contact';
import Home2 from './components/Home2';

export default function Home() {
  // const [isClient, setIsClient] = useState(false);
  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      
      {/* homepage */}
      <div className="home-section" >
          <Home2 />

        </div>


        <div>
          <HDetails />
        </div>


        <div>
          <h1 className='host-title'>Meet Your Host</h1>
          <Hosts />
        </div>


        <div className="about-section">
          <h1 className='host-title'>About This Place</h1>
          <h5 className='about-disp'>It's possible that this place is a specific location, hotel, garden, or attraction.</h5>
          <AboutUs />
        </div>


        <div>
          <h1 className="thing-title">Thing To Know</h1>
          <Things />
        </div>


        <div>
          <Features />
        </div>


        <div className="contact-section">
          <Contacts />
        </div>

      
        <div className="Footer-list">
          <ul className="footer-ul">
              <li className="li-footer">News</li>
              <li className="li-footer">Policy</li>
              <li className="li-footer">Copyright @alphadev</li>
          </ul>
        </div>

    </div>
  )
}
