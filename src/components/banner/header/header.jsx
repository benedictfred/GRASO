import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
        <nav className='nav-holder'>
        <nav className='inner-nav'>
          <div className="logo"><Link to="/" className='nav-link'>GRASO</Link></div>
          <ul>
            <li>
              <Link to="/" className='nav-link'>Home</Link>
              </li>
            <li>
              <Link to="/dashboard" className='nav-link'>Dashboard</Link>
              </li>
            <li>
              <Link to="/Launch" className='nav-link'>Features</Link>
              </li>
            <li>Whitepaper</li>
            <li>About us</li>
            <li className="start-btn">Get started</li>
          </ul>
        </nav>
      </nav>

    </div>
  );
};

export default Header;
