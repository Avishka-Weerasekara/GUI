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

// Italian
import MargheritaPizza from '../../assets/MargheritaPizza.jpg';
import PastaCarbonara from '../../assets/PastaCarbonara.jpg';
import Lasagna from '../../assets/Lasagna.jpg';
import Risotto from '../../assets/Risotto.jpg';
import EggplantParmesan from '../../assets/EggplantParmesan.jpg';
import FettuccineAlfredo from '../../assets/FettuccineAlfredo.jpg';
import OssoBuco from '../../assets/OssoBuco.jpg';
import Gnocchi from '../../assets/Gnocchi.jpg';
import ChickenMarsala from '../../assets/ChickenMarsala.jpg';

// Chinese
import KungPaoChicken from '../../assets/KungPaoChicken.jpg';
import DimSum from '../../assets/DimSum.jpg';
import MapoTofu from '../../assets/MapoTofu.jpg';
import PekingDuck from '../../assets/PekingDuck.jpg';
import HotPot from '../../assets/HotPot.jpg';
import ChowMein from '../../assets/ChowMein.jpg';
import SweetSourPork from '../../assets/SweetSourPork.jpg';
import EggFooYoung from '../../assets/EggFooYoung.jpg';

// Mexican
import TacosAlPastor from '../../assets/TacosAlPastor.jpg';
import Enchiladas from '../../assets/Enchiladas.jpg';
import Guacamole from '../../assets/Guacamole.jpg';
import ChilesRellenos from '../../assets/ChilesRellenos.jpg';
import Fajitas from '../../assets/Fajitas.jpg';
import MolePoblano from '../../assets/MolePoblano.jpg';
import Quesadillas from '../../assets/Quesadillas.jpg';
import Tamales from '../../assets/Tamales.jpg';
import Pozole from '../../assets/Pozole.jpg';

// Desserts
import Tiramisu from '../../assets/Tiramisu.jpg';
import ChocolateLavaCake from '../../assets/ChocolateLavaCake.jpg';
import CremeBrulee from '../../assets/CremeBrulee.jpg';
import ApplePie from '../../assets/ApplePie.jpg';
import Cheesecake from '../../assets/Cheesecake.jpg';
import IceCreamSundae from '../../assets/IceCreamSundae.jpg';
import Baklava from '../../assets/Baklava.jpg';
import FruitTart from '../../assets/FruitTart.jpg';
import BrownieDelight from '../../assets/BrownieDelight.jpg';

// Beverages
import FreshLemonade from '../../assets/FreshLemonade.jpg';
import MangoLassi from '../../assets/MangoLassi.jpg';
import IcedTea from '../../assets/IcedTea.jpg';
import Espresso from '../../assets/Espresso.jpg';
import FruitSmoothie from '../../assets/FruitSmoothie.jpg';
import ItalianSoda from '../../assets/ItalianSoda.jpg';
import HotChocolate from '../../assets/HotChocolate.jpg';
import GreenTea from '../../assets/GreenTea.jpg';
import FreshJuice from '../../assets/FreshJuice.jpg';

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
    Italian: [
      { name: "Margherita Pizza", price: "$15.99", description: "Classic tomato and mozzarella", image: MargheritaPizza },
      { name: "Pasta Carbonara", price: "$13.99", description: "Creamy pasta with bacon", image: PastaCarbonara },
      { name: "Lasagna", price: "$16.99", description: "Layered pasta with meat sauce", image: Lasagna },
      { name: "Risotto", price: "$17.99", description: "Creamy arborio rice with mushrooms", image: Risotto },
      { name: "Eggplant Parmesan", price: "$14.99", description: "Breaded eggplant with marinara", image: EggplantParmesan },
      { name: "Fettuccine Alfredo", price: "$15.99", description: "Pasta in creamy parmesan sauce", image: FettuccineAlfredo },
      { name: "Osso Buco", price: "$24.99", description: "Braised veal shanks", image: OssoBuco },
      { name: "Gnocchi", price: "$16.99", description: "Potato dumplings in sage butter", image: Gnocchi },
      { name: "Chicken Marsala", price: "$18.99", description: "Chicken in marsala wine sauce", image: ChickenMarsala },
    ],
    Chinese: [
      { name: "Kung Pao Chicken", price: "$14.99", description: "Spicy diced chicken with peanuts", image: KungPaoChicken },
      { name: "Dim Sum", price: "$12.99", description: "Assorted steamed dumplings", image: DimSum },
      { name: "Mapo Tofu", price: "$13.99", description: "Spicy tofu with minced pork", image: MapoTofu },
      { name: "Peking Duck", price: "$29.99", description: "Classic roasted duck", image: PekingDuck },
      { name: "Hot Pot", price: "$25.99", description: "DIY soup with choices of meat", image: HotPot },
      { name: "Chow Mein", price: "$13.99", description: "Stir-fried noodles with vegetables", image: ChowMein },
      { name: "Sweet & Sour Pork", price: "$15.99", description: "Crispy pork in tangy sauce", image: SweetSourPork },
      { name: "Egg Foo Young", price: "$14.99", description: "Chinese style omelet", image: EggFooYoung },
      { name: "Spring Rolls", price: "$8.99", description: "Crispy rolls with vegetables", image: SpringRolls }, 
    ],
    Mexican: [
      { name: "Tacos al Pastor", price: "$13.99", description: "Marinated pork tacos", image: TacosAlPastor },
      { name: "Enchiladas", price: "$14.99", description: "Rolled tortillas with filling", image: Enchiladas },
      { name: "Guacamole", price: "$8.99", description: "Fresh avocado dip", image: Guacamole },
      { name: "Chiles Rellenos", price: "$15.99", description: "Stuffed poblano peppers", image: ChilesRellenos },
      { name: "Fajitas", price: "$17.99", description: "Sizzling meat with peppers", image: Fajitas },
      { name: "Mole Poblano", price: "$18.99", description: "Chicken in chocolate-chili sauce", image: MolePoblano },
      { name: "Quesadillas", price: "$12.99", description: "Grilled tortillas with cheese", image: Quesadillas },
      { name: "Tamales", price: "$13.99", description: "Steamed corn dough with filling", image: Tamales },
      { name: "Pozole", price: "$14.99", description: "Traditional hominy soup", image: Pozole },
    ],
    Desserts: [
      { name: "Tiramisu", price: "$7.99", description: "Classic Italian coffee dessert", image: Tiramisu },
      { name: "Chocolate Lava Cake", price: "$8.99", description: "Warm chocolate cake", image: ChocolateLavaCake },
      { name: "Crème Brûlée", price: "$8.99", description: "Classic French custard", image: CremeBrulee },
      { name: "Apple Pie", price: "$6.99", description: "Traditional American pie", image: ApplePie },
      { name: "Cheesecake", price: "$7.99", description: "New York style cheesecake", image: Cheesecake },
      { name: "Ice Cream Sundae", price: "$6.99", description: "Assorted ice cream with toppings", image: IceCreamSundae },
      { name: "Baklava", price: "$7.99", description: "Layered pastry with nuts", image: Baklava },
      { name: "Fruit Tart", price: "$8.99", description: "Fresh fruit with custard", image: FruitTart },
      { name: "Brownie Delight", price: "$7.99", description: "Warm brownie with ice cream", image: BrownieDelight },
    ],
    Beverages: [
      { name: "Fresh Lemonade", price: "$4.99", description: "House-made classic lemonade", image: FreshLemonade },
      { name: "Mango Lassi", price: "$5.99", description: "Indian yogurt smoothie", image: MangoLassi },
      { name: "Iced Tea", price: "$3.99", description: "Fresh brewed tea", image: IcedTea },
      { name: "Espresso", price: "$3.99", description: "Double shot espresso", image: Espresso },
      { name: "Fruit Smoothie", price: "$5.99", description: "Blended fresh fruits", image: FruitSmoothie },
      { name: "Italian Soda", price: "$4.99", description: "Sparkling flavored drink", image: ItalianSoda },
      { name: "Hot Chocolate", price: "$4.99", description: "Rich chocolate drink", image: HotChocolate },
      { name: "Green Tea", price: "$3.99", description: "Traditional Japanese tea", image: GreenTea },
      { name: "Fresh Juice", price: "$5.99", description: "Selection of fresh juices", image: FreshJuice },
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