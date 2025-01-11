import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">Bite & Bliss</Link>
      <Navigation />
      <div className="auth-buttons">
        <button className="search-btn">
          <i className="fas fa-search"></i>
        </button>
        <button className="cart-btn">
          <i className="fas fa-shopping-cart"></i>
        </button>
        <button className="sign-in-btn">Sign In</button>
      </div>
    </header>
  );
};

export default Header;