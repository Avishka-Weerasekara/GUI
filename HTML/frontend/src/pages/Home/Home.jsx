import React from 'react'
import './Home.css'
import FN from '../../components/FrontAName/FN'

import HH from '../../components/HeaderHome/HH'
import HHT from '../../components/HeardeHomeTwo/HHT'

function Home() {
  return (
    <div class="home">
      <div className="fn"><FN/></div>
      <div className="home-content">
        <h1><u>Welcome to Bliss & Bite</u></h1>
        <p> 
        Discover a world of flavors with our diverse menu, featuring Indian, Italian, Mexican,
         Chinese cuisines, indulgent desserts, and refreshing beverages. Enjoy dishes crafted 
         by our world-renowned chef and served by our friendly staff for an unforgettable dining 
         experience!</p>
      </div>
      
      <HH/>
      <HHT/>
      
    </div>
  )
}

export default Home

