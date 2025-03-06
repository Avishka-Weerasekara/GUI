import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-content">
            <div className="footer-section">
                <h3>About Us</h3>
                <p>Experience fine dining at its best. Our restaurant offers exceptional cuisine and atmosphere.</p>
            </div>
            <div className="footer-section">
                <h3>Quick Links</h3>
                <a href="/">Home</a>
                <a href="/menu">Menu</a>
                <a href="/reservation">Reservations</a>
                
                
            </div>
            <div className="footer-section">
                <h3>Contact Info</h3>
                <p>Bite & Bliss</p>
                <p>North City, Sri Lanka</p>
                <p>Phone: (123) 456-7890</p>
                <p>Email: info@Bite&Bliss.com</p>
            </div>
            <div className="footer-section">
                <h3>Opening Hours</h3>
                <p>Monday - Friday: 11am - 11pm</p>
                <p>Saturday: 11am - 11pm</p>
                <p>Sunday: 11am - 11pm</p>
            </div>
        </div>
        <div className="copyright">
            <p>&copy; 2024 Bite & Bliss. All rights reserved.</p>
        </div>
    </footer>
    </div>
  )
}

export default Footer
