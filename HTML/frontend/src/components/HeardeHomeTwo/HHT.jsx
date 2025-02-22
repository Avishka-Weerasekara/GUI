import React, { useState } from 'react';
import './HHT.css';

const HHT = () => {
    const [isDebug, setIsDebug] = useState(false);

    const cards = [
      {
        id: 'card_1',
        title: 'Architectural Wonders',
        imageSrc: './home1.jpg',
        content: (
          <div>
            
            <h3>Smoked Truffle Butter Steak</h3>
            <div className="card-text-box">
              <hr></hr>
              <p>Served with garlic-parmesan mashed potatoes and a side of herb-roasted vegetables, this dish is a perfect blend of elegance and indulgence.</p>
            </div>
          </div>
        )
      },
      {
        id: 'card_2',
        title: 'Urban Landscape Perspectives', 
        imageSrc: './home2.jpg',
        content: (
          <div>
            <h3>Golden Lava Shrimp</h3>
            <div className="card-text-box">
              <hr></hr>
              <p>Crispy, golden-fried shrimp coated in a rich, creamy, and slightly spicy lava sauce, bursting with umami flavors. Served with a side of citrus-infused slaw and a drizzle of honey-lime glaze, this dish is the perfect balance of crunch, heat, and sweetness.</p>
            </div>
          </div>
        )
      },
      {
        id: 'card_3',
        title: 'Modern Design Innovations',
        imageSrc: './home3.jpg',
        content: (
          <div>
            <h3>Velvet Berry Cheesecake</h3>
            <div className="card-text-box">
              <hr></hr>
              <p>A luscious, creamy cheesecake infused with vanilla bean and swirled with a rich berry compote. Topped with a velvety blueberry glaze and delicate gold flakes, this dessert melts in your mouth, leaving a perfect balance of sweetness and tanginess in every bite.</p>
            </div>
          </div>
        )
      },
      {
        id: 'card_4',
        title: 'Sustainable Living Spaces',
        imageSrc: './home4.jpg',
        content: (
          <div>
          <h3>Mystic Mint Lime Fizz</h3>
          <div className="card-text-box">
            <hr></hr>
            <p>A refreshing blend of zesty lime, cool mint, and a hint of honey, topped with sparkling soda for the perfect fizzy kick. Served over crushed ice with a sprig of fresh mint, this invigorating drink is a burst of freshness in every sip!</p>
          </div>
        </div>
        )
      }
    ];
  
    return (
      <div className={`stacking-cards ${isDebug ? 'debug-mode' : ''}`}>
        <input 
          type="checkbox" 
          id="debug" 
          checked={isDebug}
          onChange={() => setIsDebug(!isDebug)}
        />
  
        <main>
          <ul id="cards">
            {cards.map((card, index) => (
              <li 
                key={card.id} 
                className="card" 
                id={card.id} 
                style={{ '--index': index + 1 }}
              >
                <div className="card__content">
                  <div>
                    {card.content}
                  </div>
                  <figure>
                    <img src={card.imageSrc} alt="Image description" />
                  </figure>
                </div>
              </li>
            ))}
          </ul>
        </main>
  
        
      </div>
    );
  };

export default HHT