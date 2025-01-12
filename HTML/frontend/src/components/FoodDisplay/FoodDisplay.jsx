import React from 'react';

const FoodDisplay = ({ category }) => {
  const menuItems = {
    Appetizers: [
      { name: "Spring Rolls", price: "$8.99", description: "Fresh vegetables wrapped in rice paper" },
      { name: "Chicken Wings", price: "$12.99", description: "Crispy wings with your choice of sauce" },
      { name: "Bruschetta", price: "$7.99", description: "Toasted bread with tomatoes and herbs" },
      { name: "Calamari", price: "$13.99", description: "Crispy fried squid rings with marinara" },
      { name: "Stuffed Mushrooms", price: "$9.99", description: "Mushrooms filled with herbs and cheese" },
      { name: "Shrimp Cocktail", price: "$15.99", description: "Chilled shrimp with cocktail sauce" },
      { name: "Nachos Supreme", price: "$11.99", description: "Loaded nachos with all the toppings" },
      { name: "Spinach Artichoke Dip", price: "$10.99", description: "Creamy dip with toasted pita" },
      { name: "Hummus Platter", price: "$9.99", description: "Classic hummus with fresh vegetables" }
    ],
    Indian: [
      { name: "Butter Chicken", price: "$16.99", description: "Creamy tomato curry with tender chicken" },
      { name: "Paneer Tikka", price: "$14.99", description: "Grilled cottage cheese with spices" },
      { name: "Dal Makhani", price: "$13.99", description: "Creamy black lentils" },
      { name: "Biryani", price: "$17.99", description: "Aromatic rice dish with spices" },
      { name: "Chicken Tikka", price: "$15.99", description: "Grilled spiced chicken pieces" },
      { name: "Palak Paneer", price: "$14.99", description: "Spinach curry with cottage cheese" },
      { name: "Rogan Josh", price: "$18.99", description: "Kashmiri lamb curry" },
      { name: "Malai Kofta", price: "$15.99", description: "Vegetable dumplings in cream sauce" },
      { name: "Chana Masala", price: "$13.99", description: "Spiced chickpea curry" }
    ],
    Italian: [
      { name: "Margherita Pizza", price: "$15.99", description: "Classic tomato and mozzarella" },
      { name: "Pasta Carbonara", price: "$13.99", description: "Creamy pasta with bacon" },
      { name: "Lasagna", price: "$16.99", description: "Layered pasta with meat sauce" },
      { name: "Risotto", price: "$17.99", description: "Creamy arborio rice with mushrooms" },
      { name: "Eggplant Parmesan", price: "$14.99", description: "Breaded eggplant with marinara" },
      { name: "Fettuccine Alfredo", price: "$15.99", description: "Pasta in creamy parmesan sauce" },
      { name: "Osso Buco", price: "$24.99", description: "Braised veal shanks" },
      { name: "Gnocchi", price: "$16.99", description: "Potato dumplings in sage butter" },
      { name: "Chicken Marsala", price: "$18.99", description: "Chicken in marsala wine sauce" }
    ],
    Chinese: [
      { name: "Kung Pao Chicken", price: "$14.99", description: "Spicy diced chicken with peanuts" },
      { name: "Dim Sum", price: "$12.99", description: "Assorted steamed dumplings" },
      { name: "Mapo Tofu", price: "$13.99", description: "Spicy tofu with minced pork" },
      { name: "Peking Duck", price: "$29.99", description: "Classic roasted duck" },
      { name: "Hot Pot", price: "$25.99", description: "DIY soup with choices of meat" },
      { name: "Chow Mein", price: "$13.99", description: "Stir-fried noodles with vegetables" },
      { name: "Sweet & Sour Pork", price: "$15.99", description: "Crispy pork in tangy sauce" },
      { name: "Egg Foo Young", price: "$14.99", description: "Chinese style omelet" },
      { name: "Spring Rolls", price: "$8.99", description: "Crispy rolls with vegetables" }
    ],
    Mexican: [
      { name: "Tacos al Pastor", price: "$13.99", description: "Marinated pork tacos" },
      { name: "Enchiladas", price: "$14.99", description: "Rolled tortillas with filling" },
      { name: "Guacamole", price: "$8.99", description: "Fresh avocado dip" },
      { name: "Chiles Rellenos", price: "$15.99", description: "Stuffed poblano peppers" },
      { name: "Fajitas", price: "$17.99", description: "Sizzling meat with peppers" },
      { name: "Mole Poblano", price: "$18.99", description: "Chicken in chocolate-chili sauce" },
      { name: "Quesadillas", price: "$12.99", description: "Grilled tortillas with cheese" },
      { name: "Tamales", price: "$13.99", description: "Steamed corn dough with filling" },
      { name: "Pozole", price: "$14.99", description: "Traditional hominy soup" }
    ],
    Desserts: [
      { name: "Tiramisu", price: "$7.99", description: "Classic Italian coffee dessert" },
      { name: "Chocolate Lava Cake", price: "$8.99", description: "Warm chocolate cake" },
      { name: "Crème Brûlée", price: "$8.99", description: "Classic French custard" },
      { name: "Apple Pie", price: "$6.99", description: "Traditional American pie" },
      { name: "Cheesecake", price: "$7.99", description: "New York style cheesecake" },
      { name: "Ice Cream Sundae", price: "$6.99", description: "Assorted ice cream with toppings" },
      { name: "Baklava", price: "$7.99", description: "Layered pastry with nuts" },
      { name: "Fruit Tart", price: "$8.99", description: "Fresh fruit with custard" },
      { name: "Brownie Delight", price: "$7.99", description: "Warm brownie with ice cream" }
    ],
    Beverages: [
      { name: "Fresh Lemonade", price: "$4.99", description: "House-made classic lemonade" },
      { name: "Mango Lassi", price: "$5.99", description: "Indian yogurt smoothie" },
      { name: "Iced Tea", price: "$3.99", description: "Fresh brewed tea" },
      { name: "Espresso", price: "$3.99", description: "Double shot espresso" },
      { name: "Fruit Smoothie", price: "$5.99", description: "Blended fresh fruits" },
      { name: "Italian Soda", price: "$4.99", description: "Sparkling flavored drink" },
      { name: "Hot Chocolate", price: "$4.99", description: "Rich chocolate drink" },
      { name: "Green Tea", price: "$3.99", description: "Traditional Japanese tea" },
      { name: "Fresh Juice", price: "$5.99", description: "Selection of fresh juices" }
    ]
  };

  return (
    <div className="menu-items-container">
      {category !== "All" && menuItems[category] && (
        <div className="menu-items">
          {menuItems[category].map((item, index) => (
            <div key={index} className="menu-item">
              <div className="menu-item-content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span className="price">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FoodDisplay;