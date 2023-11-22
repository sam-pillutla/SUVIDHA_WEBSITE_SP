import React, { useEffect, useState } from 'react';
import './Navbar.css'; // Import your CSS for styling
import Logo from './Logo.png'; // Import the image
import { Link } from 'react-router-dom';

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  // Function to add or remove the 'sticky' class based on scroll position
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navba ${isSticky ? 'sticky' : ''}`}>
      <div className="navbar-logo">
        <a href="/">
          <img className="logo" src={Logo} alt="logo suvidha" />
        </a>
      </div>
      <div className="navba-buttons">
        <Link to={"/help"} >
          <div className="containe-button">
            <div className="hover bt-1"></div>
            <div className="hover bt-2"></div>
            <div className="hover bt-3"></div>
            <div className="hover bt-4"></div>
            <div className="hover bt-5"></div>
            <div className="hover bt-6"></div>
              <button className='button1'></button>
          </div>
        </Link>
      </div>

      <Link to={"/intern"} >
          <a href="/internships"><button class="buttonn12"><span>Internship</span></button></a>
        </Link>

      <ul className="navba-links">
        <li>
        <Link to={"/events"} >
          <a href="/events" className="btnn21"><span className="spn2">Events</span></a>
        </Link>
          </li>
        <Link to={"/gallery"} >
          <li><a href="/gallery" className="btnn21"><span className="spn2">Gallery</span></a></li>
        </Link>
        <Link to={"/contact"} >
        <li><a href="/contact" className="btnn21"><span className="spn2">Contact</span></a></li>
        </Link>
      </ul>
      

      
    </nav>
  );
}

export default Navbar;
