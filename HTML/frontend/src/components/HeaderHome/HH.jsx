import React from 'react'
import './HH.css'

const HH = () => {
  return (
    <div>
       <div class="container-1">
                <div class="card">
                    <img src='./in.jpg' class="home1"/>
                    <div class="card__head">Dinning Area</div>
                </div>
                <div class="card">
                    <img src='./out.jpg' class="home1"/>
                    <div class="card__head">Outside Dinning Area</div>
                </div>
                <div class="card">
                    <img src='./bar.jpg' class="home1"/>
                    <div class="card__head">Bar Area</div>
                </div>
                
                
        </div>

        <button class="btn_menu"><a href="/reservation">Make a Reservation</a></button>
    </div>
  )
}

export default HH
