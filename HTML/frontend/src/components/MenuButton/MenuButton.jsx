import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MenuButton.css'

const MenuButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the menu page
    navigate('/menu');

    // Scroll to top of page smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={handleClick}>
      EXPLORE OUR MENU
    </button>
  );
};

export default MenuButton;