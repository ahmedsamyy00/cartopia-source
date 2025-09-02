import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Testimonial() {
  return (
    <section
      className="testimonial-section"
      style={{ backgroundColor: "#f5f5f5", padding: "80px 0" }}
    >
      <div className="container">
        {/* العنوان فوق الكاروسيل */}
        <h2 className="testimonial-title">What Our Clients Say!</h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          <SwiperSlide>
            <div className="testimonial">
              <h4>WE LOVE GOOD COMPLIMENT</h4>
              <p>
                “This is one of the best services I've ever used. Highly recommend!”
              </p>
              <span>— John Doe</span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial">
              <h4>AMAZING QUALITY</h4>
              <p>
                “Amazing quality and super friendly team. Will definitely come back!”
              </p>
              <span>— Sarah Lee</span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial">
              <h4>PERFECT STYLE</h4>
              <p>
                “This product is stylish and very flexible, I definitely
                recommend it.”
              </p>
              <span>— James R</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonial;
