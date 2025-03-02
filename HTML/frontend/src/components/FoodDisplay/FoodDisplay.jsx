import React from 'react';
import './FoodDisplay.css';

// Appetizers
import SpringRolls from '../../assets/SpringRolls.jpg';
import ChickenWings from '../../assets/ChickenWings.jpg';
import Bruschetta from '../../assets/Bruschetta.jpg';
import Calamari from '../../assets/Calamari.jpg';
import StuffedMushrooms from '../../assets/StuffedMushrooms.jpg';
import ShrimpCocktail from '../../assets/ShrimpCocktail.jpg';
import NachosSupreme from '../../assets/NachosSupreme.jpg';
import SpinachArtichokeDip from '../../assets/SpinachArtichokeDip.jpg';
import HummusPlatter from '../../assets/HummusPlatter.jpg';

// Indian
import ButterChicken from '../../assets/ButterChicken.jpg';
import PaneerTikka from '../../assets/PaneerTikka.jpg';
import DalMakhani from '../../assets/DalMakhani.jpg';
import Biryani from '../../assets/Biryani.jpg';
import ChickenTikka from '../../assets/ChickenTikka.jpg';
import PalakPaneer from '../../assets/PalakPaneer.jpg';
import RoganJosh from '../../assets/RoganJosh.jpg';
import MalaiKofta from '../../assets/MalaiKofta.jpg';
import ChanaMasala from '../../assets/ChanaMasala.jpg';



const FoodDisplay = ({ category }) => {
  const menuItems = {
    Appetizers: [
      { name: "Spring Rolls", price: "$8.99", description: "Fresh vegetables wrapped in rice paper", image: SpringRolls },
      { name: "Chicken Wings", price: "$12.99", description: "Crispy wings with your choice of sauce", image: ChickenWings },
      { name: "Bruschetta", price: "$7.99", description: "Toasted bread with tomatoes and herbs", image: Bruschetta },
      { name: "Calamari", price: "$13.99", description: "Crispy fried squid rings with marinara", image: Calamari }, 
      { name: "Stuffed Mushrooms", price: "$9.99", description: "Mushrooms filled with herbs and cheese", image: StuffedMushrooms },
      { name: "Shrimp Cocktail", price: "$15.99", description: "Chilled shrimp with cocktail sauce", image: ShrimpCocktail },
      { name: "Nachos Supreme", price: "$11.99", description: "Loaded nachos with all the toppings", image: NachosSupreme },
      { name: "Spinach Artichoke Dip", price: "$10.99", description: "Creamy dip with toasted pita", image: SpinachArtichokeDip },
      { name: "Hummus Platter", price: "$9.99", description: "Classic hummus with fresh vegetables", image: HummusPlatter },
   
    ],
    Indian: [
      { name: "Butter Chicken", price: "$16.99", description: "Creamy tomato curry with tender chicken", image: ButterChicken },
      { name: "Paneer Tikka", price: "$14.99", description: "Grilled cottage cheese with spices", image: PaneerTikka },
      { name: "Dal Makhani", price: "$13.99", description: "Creamy black lentils", image: DalMakhani },
      { name: "Biryani", price: "$17.99", description: "Aromatic rice dish with spices", image: Biryani },
      { name: "Chicken Tikka", price: "$15.99", description: "Grilled spiced chicken pieces", image: ChickenTikka },
      { name: "Palak Paneer", price: "$14.99", description: "Spinach curry with cottage cheese", image: PalakPaneer },
      { name: "Rogan Josh", price: "$18.99", description: "Kashmiri lamb curry", image: RoganJosh },
      { name: "Malai Kofta", price: "$15.99", description: "Vegetable dumplings in cream sauce", image: MalaiKofta },
      { name: "Chana Masala", price: "$13.99", description: "Spiced chickpea curry", image: ChanaMasala },
    ],

    
  };

  const getAllItems = () => {
    return Object.values(menuItems).flat();
  };

  const displayItems = category === "All" ? getAllItems() : menuItems[category] || [];

  return (
    <div className="food-display">
      <div className="menu-items">
        {displayItems.map((item, index) => (
          <div key={index} className="menu-item">
            {item.image && <img src={item.image} alt={item.name} className="menu-item-image" />}
            <div className="menu-item-content">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span className="price">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;