import React, { useState } from 'react'
import './Menu.css'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';


const Menu = () => {
    const [category, setCategory] = useState("All");

    return (
        <div>
            <div className="main-content-menu">
                <section className="menu-section">
                <div className="menu-content">
        <h2>Explore Bliss & Bite</h2>
        <hr/>
        <h4>Our menu at Bliss & Bite is a celebration of global flavors, featuring expertly crafted Indian, Italian, Mexican, and Chinese cuisines. Indulge in decadent desserts and refreshing beverages, all prepared by world-class chefs for an unforgettable dining experience. 
        </h4>
         
      </div>
                    <ExploreMenu category={category} setCategory={setCategory}/>
                    <FoodDisplay category={category}/>
                </section>
            </div>  
        </div>
    )
}

export default Menu