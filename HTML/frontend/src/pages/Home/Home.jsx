import React from 'react'
import './Home.css'
import FN from '../../components/FrontAName/FN'
import Footer from '../../components/Footer/Footer'
import HH from '../../components/HeaderHome/HH'

function Home() {
  return (
    <div class="home">
      <div className="fn"><FN/></div>
      <div className="home-content">
        <h1><u>Welcome to Bliss & Bite</u></h1>
      </div>
      
      <HH/>
      
    </div>
  )
}

export default Home

