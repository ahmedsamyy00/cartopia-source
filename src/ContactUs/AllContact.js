// ContactUs.js
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Home/Footer";

function ContactUs() {
  return (
    <div className="contact-page">
      <Navbar />
      <div className="top-bar"></div> 

      {/* ===== Page Title ===== */}
      <section className="contact-title">
        <h2>Contact Us</h2>
        <p>Get in touch with us or visit one of our branches</p>
      </section>

      {/* ===== Our Branches ===== */}
      <section className="our-branches">
        <h3 className="section-title">Our Branches</h3>
        <div className="branches-list">
          <div className="branch-card">
            <h4>Downtown Store</h4>
            <p>123 Main Street, City Center</p>
            <p>+1 234 567 890</p>
          </div>
          <div className="branch-card">
            <h4>Uptown Store</h4>
            <p>456 High Street, Uptown</p>
            <p>+1 234 567 891</p>
          </div>
          <div className="branch-card">
            <h4>Suburb Store</h4>
            <p>789 Elm Street, Suburb</p>
            <p>+1 234 567 892</p>
          </div>
        </div>
      </section>

      {/* ===== Send us an Email ===== */}
      <section className="send-email">
        <h3 className="section-title">Send us an email</h3>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="send-btn">Send Message</button>
        </form>
      </section>

      <Footer />
    </div>
  );
}

export default ContactUs;
