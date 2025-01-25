import React, { useState } from 'react';
import './HHT.css';

const HHT = () => {
    const [isDebug, setIsDebug] = useState(false);

    const cards = [
      {
        id: 'card_1',
        title: 'Card One',
        imageSrc: 'https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-1.jpg'
      },
      {
        id: 'card_2',
        title: 'Card Two', 
        imageSrc: 'https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-2.jpg'
      },
      {
        id: 'card_3',
        title: 'Card Three',
        imageSrc: 'https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-3.jpg'
      },
      {
        id: 'card_4',
        title: 'Card Four',
        imageSrc: 'https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-2.jpg'
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
  
        <header>
          <div>
            <h1>Stacking Cards</h1>
            <p>👇 Scroll down to see the effect.</p>
          </div>
        </header>
  
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
                    <h2>{card.title}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p><a href="#top" className="btn btn--accent">Read more</a></p>
                  </div>
                  <figure>
                    <img src={card.imageSrc} alt="Image description" />
                  </figure>
                </div>
              </li>
            ))}
          </ul>
        </main>
  
        <aside>
          {[...Array(5)].map((_, i) => (
            <p key={i}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem repellat non ratione eum provident quaerat obcaecati dicta autem voluptates sit cum quis distinctio, atque sint commodi reprehenderit perspiciatis iure velit molestiae eos molestias ipsa nihil quia?
            </p>
          ))}
        </aside>
      </div>
    );
  };

export default HHT
