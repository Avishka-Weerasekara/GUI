import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">Bite & Bliss</Link>
      <Navigation />
      
    </header>
  );
};

export default Header;