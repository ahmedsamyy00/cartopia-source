import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo + About */}
        <div className="footer-col">
          <img 
            src="img/logoooo.png" 
            alt="Logo" 
            className="footer-logo" 
          />
          <p>Fashion that speaks for you. Crafted with love & style.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Collections</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>Email: support@mystore.com</p>
          <p>Phone: +20 123 456 789</p>
        </div>

        {/* Socials */}
        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} CARTOPIA. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
