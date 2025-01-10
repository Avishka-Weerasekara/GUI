import React from 'react'
import './Home.css'




const Home = () => {
  return (
    <div>
        <div class="main-content">
            <section class="home-section">
                <div class="home-content">
                    <h1>Welcome to Bite & Bliss</h1>
                    <p>Experience the perfect blend of taste and luxury</p>
                </div>
            </section>
        
            <div class="container">
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
        </div>  
    </div>
  )
}

export default Home
