import React from 'react'
import './HH.css'

const HH = () => {
  return (
    <div>
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

        <button class="btn_menu"><a href="/menu">View Full Menu </a></button>
    </div>
  )
}

export default HH
