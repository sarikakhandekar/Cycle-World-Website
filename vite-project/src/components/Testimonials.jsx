import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./Testimonials.css";

const reviews = [
  {
    image:
      
      "https://cdn.shopify.com/s/files/1/0026/4110/0861/files/Ladakh_Ace_7s_Red_1_70x70.jpg?v=1772280091",
    title: "Nice bike",
    review: "Great experience till now 👍👍",
  },
  {
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=500",
    title: "Very good hybrid bike in pocket friendly budget",
    review:
      "I am writing this review after riding this bike more than 500+ km and believe me this bike performed really well.",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0026/4110/0861/files/CoorgLite1sBlue_70x70.jpg?v=1769334997",
    title: "Rear hub with free wheel is super",
    review:
      "Last month I ordered Rear hub with free wheel and completed 1000BRM without wheel sound problem.",
  },
  {
    image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=500",
    title: "Best Cycle",
    review: "Comfortable riding and premium quality frame. Highly recommended.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonial-section">
      <h2>Voice Of Our Customers</h2>

      <div className="rating">
        ⭐⭐⭐⭐⭐
        <p>from 1942 reviews</p>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={20}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {reviews.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="review-card">
              <img src={item.image} alt={item.title} />

              <div className="review-content">
                <div className="stars">⭐⭐⭐⭐⭐</div>

                <h3>{item.title}</h3>

                <p>{item.review}</p>

                <h4>{item.name}</h4>

                <span>{item.date}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
