import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
    const [menu, setMenu] = useState("home")
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const menuItems = [
        { id: "home", label: "Home" },
        { id: "menu", label: "Menu" },
        { id: "reservation", label: "Reservation" },
        { id: "contact-us", label: "Contact Us" }
    ]

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className='navbar'>
            <img src={assets.logo} alt="Restaurant Logo" className="logo" />
            <div className="menu-icon" onClick={toggleMenu}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {isMenuOpen ? (
                        <path d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path d="M3 12h18M3 6h18M3 18h18" />
                    )}
                </svg>
            </div>
            <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
                {menuItems.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => {
                            setMenu(item.id)
                            setIsMenuOpen(false)
                        }}
                        className={menu === item.id ? "active" : ""}
                    >
                        {item.label}
                    </li>
                ))}
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="Search" />
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="Cart" />
                    <div className="dot"></div>
                </div>
                <button>Sign In</button>
            </div>
        </div>
    )
}

export default Navbar