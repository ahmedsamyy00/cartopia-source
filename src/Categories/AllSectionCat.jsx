// import React from "react";

// function AllSectionCat({ products }) {
//   return (
//     <>
//       {/* الشريط الأسود اللي فوق النافبار */}
//       <div className="categories-topbar"></div>

//       {/* الصفحة */}
//       <section className="categories-page">
//         <div className="container">
//           {/* Page Header */}
//           <div className="page-header">
//             <h2>Categories</h2>
//             <p>Browse our latest collections</p>
//           </div>

//           {/* Filter Section */}
//           <div className="categorie-filter-warp">
//             <p>Showing {products.length} results</p>
//             <div className="cf-right">
//               <select defaultValue="">
//                 <option value="">Category</option>
//                 <optgroup label="Men">
//                   <option>Shirts</option>
//                   <option>Trousers</option>
//                   <option>Jackets</option>
//                   <option>Shoes</option>
//                 </optgroup>
//                 <optgroup label="Women">
//                   <option>Dresses</option>
//                   <option>Tops</option>
//                   <option>Skirts</option>
//                   <option>Heels</option>
//                 </optgroup>
//                 <optgroup label="Accessories">
//                   <option>Bags</option>
//                   <option>Belts</option>
//                   <option>Watches</option>
//                   <option>Caps</option>
//                 </optgroup>
//               </select>

//               <select defaultValue="Sort by">
//                 <option disabled>Sort by</option>
//                 <option>Price: Low to High</option>
//                 <option>Price: High to Low</option>
//                 <option>Latest</option>
//               </select>
//             </div>
//           </div>

//           {/* Products Grid */}
//           <div className="row">
//             {products.map((item) => (
//               <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
//                 <div className="product-item">
//                   <figure>
//                     <img
//                       src={item.thumbnail || "img/placeholder.jpg"}
//                       alt={item.title}
//                       style={{ width: "100%", height: "220px", objectFit: "cover" }}
//                     />
//                   </figure>
//                   <div className="product-info text-center">
//                     <h6 className="mb-2">{item.title}</h6>
//                     <p className="mb-2">${item.price}</p>
//                     <button className="site-btn w-100">ADD TO CART</button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Pagination */}
//           <div className="pagination">
//             <span className="active">1</span>
//             <span>2</span>
//             <span>3</span>
//             <span>Next ›</span>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default AllSectionCat;
