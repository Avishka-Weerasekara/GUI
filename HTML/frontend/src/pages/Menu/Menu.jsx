import React, { useState } from 'react'
import './Menu.css'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'

const Menu = () => {

        const [category,setCategory] = useState("All");


    return (
        <div>
            <div class="main-content-menu">
                <section class="menu-section">
                    <div class="menu-content">
                        <h1>Menu</h1>
                        <p>Experience the perfect blend of taste and luxury</p>
                    </div>
                    <ExploreMenu category={category} setCategory={setCategory}/>
                </section>
    
                
            
                
                
                
            </div>  
        </div>
      )
    }


export default Menu
