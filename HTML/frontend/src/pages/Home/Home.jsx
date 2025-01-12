import React from 'react'
import './Home.css'
import MenuButton from '../../components/MenuButton/MenuButton'





const Home = () => {
  return (
    <div>
        <div class="main-content">
            <section class="home-section">
                <div class="home-content">
                    <h1>Welcome to Bliss & Bite</h1>
                    <p>Experience the perfect blend of taste and luxury</p>
                    <div className="intro-container">
                        <div className="intro-content">
            
                            <div className="description">
                                <h3>Nestled in the heart of the city, Bite & Bliss brings together contemporary cuisine with timeless comfort. Our award-winning chefs craft each dish using locally-sourced ingredients, blending traditional recipes with modern innovation.</h3>
                            </div>
                            <div className="highlights">
                                <div className="highlight-item">
                                    <span>Daily Fresh</span>
                                    <p>Farm-to-Table Ingredients</p>
                                </div>
                                <div className="highlight-item">
                                    <span>Master Chefs</span>
                                    <p>Culinary Excellence</p>
                                </div>
                                <div className="highlight-item">
                                    <span>Ambiance</span>
                                    <p>Modern Elegant Setting</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
        
            <div class="container-1">
                <div class="card">
                    <img src='./indian-home.jpg' class="home1"/>
                    <div class="card__head">Indian</div>
                </div>
                <div class="card">
                    <img src='./italian-home.jpg' class="home1"/>
                    <div class="card__head">Italian</div>
                </div>
                <div class="card">
                    <img src='./chinese-home.jpg' class="home1"/>
                    <div class="card__head">Chinese</div>
                </div>
                <div class="card">
                    <img src='./mexican-home.jpg' class="home1"/>
                    <div class="card__head">Mexican</div>
                </div>
                <div class="card">
                    <img src='./dessert-home.jpg' class="home1"/>
                    <div class="card__head">Desserts</div>
                </div>
                <div class="card">
                    <img src='./beverages-home.jpg' class="home1"/>
                    <div class="card__head">Beverages</div>
                </div>
            </div>

            <MenuButton/>
            
        </div>  
    </div>
  )
}

export default Home
