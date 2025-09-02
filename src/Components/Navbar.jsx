import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";

function Navbar() {
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header className="header-section">
        <div className="container-fluid">
          {/* logo */}
          <NavLink to="/" className="site-logo">
            <img src="img/logoooo.png" alt="logo" />
          </NavLink>

          {/* responsive toggle */}
          <div className="nav-switch" onClick={() => setMenuOpen(!menuOpen)}>
            <i className="fa fa-bars"></i>
          </div>

          <div className="header-right">
            <ul>
              <li className="card-bag">
                <NavLink to="/Cart">
                  <i className="fa fa-shopping-bag"></i>
                  <span>{totalItems}</span>
                </NavLink>
              </li>
              <li className="search">
                <i className="fa fa-search"></i>
              </li>
            </ul>
          </div>

          {/* site menu */}
          <ul className={`main-menu ${menuOpen ? "active" : ""}`}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Collections">Collections</NavLink>
            </li>
            <li>
              <NavLink to="/Shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
