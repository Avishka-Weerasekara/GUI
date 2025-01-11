import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();

  return (
    
    <nav className="navigation">
        <div className="logo">
            <h1>Bliss & Bite</h1>
        </div>
        <div className="nav-links">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                Home
            </Link>
            <Link to="/menu" className={`nav-link ${location.pathname === '/menu' ? 'active' : ''}`}>
                Menu
            </Link>
            <Link to="/reservation" className={`nav-link ${location.pathname === '/reservation' ? 'active' : ''}`}>
                Reservation
            </Link>
            <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
                Contact Us
            </Link>
        </div>
      
    </nav>
  );
};

export default Navigation;