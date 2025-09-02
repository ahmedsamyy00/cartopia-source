import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Intro() {
  const swiperRef = useRef(null);

  const handleMouseEnter = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.stop(); // وقف autoplay
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.start(); // شغل autoplay تاني
    }
  };

  return (
    <div>
      <section className="intro-section spad pb-0">
        <div className="section-title">
          <h2>NEW ARRIVALS</h2>
          <p>We recommend</p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={3}
          spaceBetween={20}
          grabCursor={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          onSwiper={(swiper) => (swiperRef.current = swiper)} // نخزن الريفرنس
          className="intro-slider"
        >
          <SwiperSlide>
            <div
              className="intro-item"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <figure>
                <img src="img/wishlist-item1.jpg" alt="#" />
              </figure>
              <div className="product-info">
                <h5>Dark florish onepiece</h5>
                <p>$95.00</p>
                <a href="#" className="site-btn btn-line">
                  ADD TO CART
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="intro-item"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <figure>
                <img src="img/wishlist-item3.jpg" alt="#" />
              </figure>
              <div className="product-info">
                <h5>Dark florish onepiece</h5>
                <p>$70.00</p>
                <a href="#" className="site-btn btn-line">
                  ADD TO CART
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="intro-item"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <figure>
                <img src="img/product-item-4.jpg" alt="#" />
                <div className="bache">NEW</div>
              </figure>
              <div className="product-info">
                <h5>Cotton off-white shirt</h5>
                <p>$65.00</p>
                <a href="#" className="site-btn btn-line">
                  ADD TO CART
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="intro-item"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <figure>
                <img src="img/product-item-6.jpg" alt="#" />
              </figure>
              <div className="product-info">
                <h5>Cotton off-white shirt</h5>
                <p>$95.00</p>
                <a href="#" className="site-btn btn-line">
                  ADD TO CART
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="intro-item"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <figure>
                <img src="img/product-item-10.jpg" alt="#" />
              </figure>
              <div className="product-info">
                <h5>Cotton off-white shirt</h5>
                <p>$50.00</p>
                <a href="#" className="site-btn btn-line">
                  ADD TO CART
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
}

export default Intro;
