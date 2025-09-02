import React, { useContext, useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Home/Footer';
import { apiValue } from '../Data/AllData';
import { useCart } from 'react-use-cart';

function AllCategories() {
  const data = useContext(apiValue);
  const { addItem } = useCart();

  const [filteredData, setFilteredData] = useState(data);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortMethod, setSortMethod] = useState("default");

  useEffect(() => {
    let filtered = categoryFilter === "all" ? data : data.filter(item => item.category.toLowerCase() === categoryFilter);
    
    if(sortMethod === "price-asc") filtered.sort((a,b)=> a.price - b.price);
    if(sortMethod === "price-desc") filtered.sort((a,b)=> b.price - a.price);
    if(sortMethod === "rating") filtered.sort((a,b)=> b.rating - a.rating);

    setFilteredData(filtered);
  }, [data, categoryFilter, sortMethod]);

  return (
    <div>
      <Navbar/>
      <div className="top-bar"></div>

      
      <div className="products-title">
        <h2>Products</h2>
      </div>

      {/* Browse + Sort */}
      <div className="products-filters">
        <div className="browse">
          <label htmlFor="browse-select">Browse:</label>
          <select id="browse-select" value={categoryFilter} onChange={(e)=>setCategoryFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="jackets">Jackets</option>
            <option value="jeans">Jeans</option>
            <option value="shirts">Shirts</option>
            <option value="hoodies">Hoodies</option>
          </select>
        </div>

        <div className="sort">
          <label htmlFor="sort-select">Sort by:</label>
          <select id="sort-select" value={sortMethod} onChange={(e)=>setSortMethod(e.target.value)}>
            <option value="default">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className='section properties'>
        <div className='container'>
          <div className='row properties-box'>
            {filteredData.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6 align-self-center mb-30 properties-items adv">
                <div className="item">
                  <a href="property-details.html">
                    <img src={item.images[0]} alt={item.title}/>
                  </a>
                  <span className="category">{item.title}</span>
                  <h6>${item.price}</h6>
                  <h4>
                    <a href="property-details.html">{item.category}</a>
                  </h4>
                  <ul>
                    <li>Rating: <span>{item.rating}</span></li>
                    <li>Stock: <span>{item.stock}</span></li>
                  </ul>
                  <div className="main-button">
                    <button className="add-to-cart" onClick={()=>addItem(item)}>Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default AllCategories;
