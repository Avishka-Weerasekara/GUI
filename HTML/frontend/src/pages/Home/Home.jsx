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
                    <img src='./home_1.jpg' class="home1"/>
                </div>
                <div class="card">
                    <img src='./home_2.jpg' class="home1"/>
                </div>
                <div class="card">
                    <img src='./home_3.jpg' class="home1"/>
                </div>
                <div class="card">
                    <img src='' class="home1"/>
                </div>
                <div class="card">
                    <img src='' class="home1"/>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Home
