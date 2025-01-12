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
                        <h1>Menu</h1>
                        <p>Experience the perfect blend of taste and luxury</p>
                    </div>
                    <ExploreMenu category={category} setCategory={setCategory}/>
                    <FoodDisplay category={category}/>
                </section>
            </div>  
        </div>
    )
}

export default Menu