// AllCollections.js
import React from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../Home/Footer";

function AllCollections() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="top-bar"></div> 
      {/* ===== All Collections ===== */}
      <section className="all-collections">
        <h3 className="section-title">Featured Collections</h3>
        <div className="collections-cards">
          <div className="collection-card">
            <img src="/img/collections/1.jpg" alt="Summer Collection" />
            <h4>Summer Collection</h4>
            <p>Fresh, light fabrics perfect for sunny days.</p>
            <button className="shop-now-btn" onClick={() => navigate("/Shop")}>
              Shop Now
            </button>
          </div>
          <div className="collection-card">
            <img src="/img/collections/2.jpg" alt="Street Style" />
            <h4>Street Style</h4>
            <p>Casual and trendy looks for your everyday wear.</p>
            <button className="shop-now-btn" onClick={() => navigate("/Shop")}>
              Shop Now
            </button>
          </div>
          <div className="collection-card">
            <img src="/img/collections/3.jpg" alt="Jeans Collection" />
            <h4>Jeans Collection</h4>
            <p>Casual and stylish denim for your everyday outfits.</p>
            <button className="shop-now-btn" onClick={() => navigate("/Shop")}>
              Shop Now
            </button>
          </div>
        </div>
      </section>
      {/* ===== Lookbook Grid ===== */}{" "}
      <section className="about-lookbook">
        {" "}
        <h3 className="section-title">Lookbook</h3>{" "}
        <div className="lookbook-grid">
          {" "}
          <img src="/img/collections/4.jpg" alt="Look 1" />{" "}
          <img src="/img/collections/5.jpg" alt="Look 2" />{" "}
          <img src="/img/collections/6.jpg" alt="Look 3" />{" "}
          <img src="/img/collections/7.jpg" alt="Look 4" />{" "}
        </div>{" "}
      </section>
      {/* ===== CTA ===== */}
      <section className="about-cta">
        <button className="shop-now-btn" onClick={() => navigate("/Shop")}>
          Explore Our Collection
        </button>
      </section>
      <Footer />
    </div>
  );
}

export default AllCollections;
