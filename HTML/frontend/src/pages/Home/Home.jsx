import React from 'react'
import './Home.css'
import FN from '../../components/FrontAName/FN'

import HH from '../../components/HeaderHome/HH'
import HHT from '../../components/HeardeHomeTwo/HHT'

function Home() {
  return (
    <div className="home">
      <div className="fn"><FN/></div>
      <div className="home-content">
        <h2>Welcome to Bliss & Bite</h2>
        <hr/>
        <h4> 
        Discover a world of flavors with our diverse menu, featuring Indian, Italian, Mexican,
         Chinese cuisines, indulgent desserts, and refreshing beverages. Enjoy dishes crafted 
         by our world-renowned chef and served by our friendly staff for an unforgettable dining 
         experience!</h4>
         
      </div>
      
      
      

      <HHT/>
      
      
      <div className="home-content">
        <h2>Inside Bliss & Bite - A Culinary Heaven</h2>
        <hr/>
        <h4>Bliss & Bite offers a luxurious indoor dining space, a scenic outdoor patio for open-air elegance, and a lively bar serving handcrafted cocktails all designed for a truly unforgettable experience. 
        </h4>
         
      </div>
      <div className="menu_btn">
        <button className="btn_menu"><a href="/menu">View Full Menu </a></button> 
      </div>
      
      <div className="home-content">
        <h2>Inside Bliss & Bite - A Culinary Heaven</h2>
        <hr/>
        <h4>Bliss & Bite offers a luxurious indoor dining space, a scenic outdoor patio for open-air elegance, and a lively bar serving handcrafted cocktails all designed for a truly unforgettable experience. 
        </h4>
         
      </div>
      <HH/>
    </div>
  )
}

export default Home

