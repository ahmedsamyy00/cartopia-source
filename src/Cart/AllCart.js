import React from "react";
import Navbar from "../Components/Navbar";
import { CartProvider, useCart } from "react-use-cart";

function Cart() {
  const {
    isEmpty,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
  } = useCart();

  // قيمة الشحن
  const shipping = 30;

  if (isEmpty)
    return (
      <div className="shopping-cart dark">
        <div className="container">
          <div className="block-heading">
            <h2>Your Cart is Empty 🛒</h2>
            <p>Looks like you haven't added anything yet.</p>
          </div>
        </div>
      </div>
    );

  return (
    <div>
      <main className="page">
        <section className="shopping-cart dark">
          <div className="container">
            <div className="block-heading">
              <h2>Shopping Cart</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                quam urna, dignissim nec auctor in, mattis vitae leo.
              </p>
            </div>
            <div className="content">
              <div className="row">
                
                <div className="col-md-12 col-lg-8">
                  <div className="items">
                    {items.map((item) => {
                      return (
                        <div className="product" key={item.id}>
                          <div className="row">
                            <div className="col-md-3">
                              <img
                                className="img-fluid mx-auto d-block image"
                                src={item.images[0]}
                                alt="product"
                              />
                            </div>
                            <div className="col-md-8">
                              <div className="info">
                                <div className="row">
                                  <div className="col-md-5 product-name">
                                    <div className="product-name">
                                      <a href="#">{item.title}</a>
                                      <div className="product-info">
                                        <div>
                                          Brand:{" "}
                                          <span className="value">
                                            {item.brand}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/*  Quantity Controls */}
                                  <div className="col-md-4 quantity">
                                    <label htmlFor="quantity">Quantity:</label>
                                    <div className="d-flex align-items-center gap-2">
                                      <button
                                        className="btn btn-sm btn-outline-primary"
                                        onClick={() =>
                                          updateItemQuantity(
                                            item.id,
                                            item.quantity - 1
                                          )
                                        }
                                        disabled={item.quantity === 1}
                                      >
                                        ➖
                                      </button>
                                      <span>{item.quantity}</span>
                                      <button
                                        className="btn btn-sm btn-outline-primary"
                                        onClick={() =>
                                          updateItemQuantity(
                                            item.id,
                                            item.quantity + 1
                                          )
                                        }
                                      >
                                        ➕
                                      </button>
                                      <button
                                        className="btn btn-sm btn-outline-danger"
                                        onClick={() => removeItem(item.id)}
                                      >
                                        ❌
                                      </button>
                                    </div>
                                  </div>

                                  {/*  Price */}
                                  <div className="col-md-3 price">
                                    <span>
                                      ${Math.ceil(item.price * item.quantity)}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/*  Summary */}
                <div className="col-md-12 col-lg-4">
                  <div className="summary">
                    <h3>Summary</h3>
                    <div className="summary-item">
                      <span className="text">Subtotal</span>
                      <span className="price">${Math.ceil(cartTotal)}</span>
                    </div>
                    <div className="summary-item">
                      <span className="text">Discount</span>
                      <span className="price">$0</span>
                    </div>
                    <div className="summary-item">
                      <span className="text">Shipping</span>
                      <span className="price">${shipping}</span>
                    </div>
                    <div className="summary-item">
                      <span className="text">Total</span>
                      <span className="price">
                        ${Math.ceil(cartTotal + shipping)}
                      </span>
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
                {/* End Summary */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function AllCart() {
  return (
    <>
      <Navbar />
      <div className="top-bar"></div> {/*  Black Bar */}
      <Cart />
    </>
  );
}

export default AllCart;
