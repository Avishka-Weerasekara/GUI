import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="footer-content">
            <div class="footer-section">
                <h3>About Us</h3>
                <p>Experience fine dining at its best. Our restaurant offers exceptional cuisine and atmosphere.</p>
            </div>
            <div class="footer-section">
                <h3>Quick Links</h3>
                <a href="/">Home</a>
                <a href="/menu">Menu</a>
                <a href="/reservation">Reservations</a>
                <a href="/contact">Contact Us</a>
                
            </div>
            <div class="footer-section">
                <h3>Contact Info</h3>
                <p>123 Bite & Bliss</p>
                <p>North City, State 12345</p>
                <p>Phone: (123) 456-7890</p>
                <p>Email: info@Bite&Bliss.com</p>
            </div>
            <div class="footer-section">
                <h3>Opening Hours</h3>
                <p>Monday - Friday: 11am - 11pm</p>
                <p>Saturday: 11am - 11pm</p>
                <p>Sunday: 11am - 11pm</p>
            </div>
        </div>
        <div class="copyright">
            <p>&copy; 2024 Bite & Bliss. All rights reserved.</p>
        </div>
    </footer>
    </div>
  )
}

export default Footer
