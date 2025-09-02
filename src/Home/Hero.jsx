import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Hero() {
  const fullText = `Browse through our diverse range of meticulously crafted garments,
designed to bring out your individuality and cater to your sense of style.`;
  
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 40); // سرعة الكتابة
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section
      className="hero-section set-bg"
      style={{ backgroundImage: `url("img/background3.jpg")` }}
    >
      {/* Title */}
      <h2 className="hero-title aurora-text">
        FIND CLOTHES THAT MATCHES YOUR STYLE
      </h2>

      {/* Subtitle with Typing effect */}
      <h2 className="hero-subtitle typing-text">{text}</h2>

      {/* Swiper Slider */}
      <div className="hero-slider-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="image-slider"
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <SwiperSlide key={i}>
              <div className="slide-content">
                <img src={`img/banner-image-${i}.jpg`} alt={`slide${i}`} />
                <h3 className="slide-title">Soft Leather Jackets</h3>
                <p className="slide-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec vel sapien eget nunc porta aliquam.
                </p>
                <a href="#" className="discover-btn">
                  Discover Now
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination */}
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
}

export default Hero;

