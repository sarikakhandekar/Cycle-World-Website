
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import Marquee from "../components/Marquee";
import Navbar from "../components/Navbar";
import Navbar1 from "../components/Navbar1";
import Footer from "../components/Footer";

import "./CycleDetails1.css";

import cycle2 from "../assets/images/img2.jpg";
import cycle3 from "../assets/images/img3.jpg";
import cycle4 from "../assets/images/img4.jpg";
import cycle5 from "../assets/images/img5.jpg";
import cycle6 from "../assets/images/img6.jpg";
import cycle7 from "../assets/images/img7.jpg";
import cycle8 from "../assets/images/img8.jpg";
import cycle9 from "../assets/images/img9.jpg";

const cycles = [
  {
    id: 1,
    name: "Mountain Rider 500",
    category: "Mountain",
    price: 15999,
    oldPrice: 18999,
    rating: 4.8,
    reviews: 124,
    image: cycle2,
    description:
      "Mountain Rider 500 is a powerful mountain cycle designed for adventure, fitness and rough terrain riding.",
    features: [
      "21 Speed Gear System",
      "Front Suspension",
      "Double Disc Brakes",
      "Lightweight Alloy Frame",
      "Mountain Tyres",
    ],
  },

  {
    id: 2,
    name: "Winter Rider Cycle",
    category: "E-Cycle",
    price: 24999,
    oldPrice: 29999,
    rating: 4.7,
    reviews: 98,
    image: cycle3,
    description:
      "Winter Rider is a modern electric cycle perfect for daily commuting, long rides and city travel.",
    features: [
      "250W Powerful Motor",
      "Long Range Battery",
      "LED Headlight",
      "Digital Display",
      "Comfortable Seat",
    ],
  },

  {
    id: 3,
    name: "Folding Cycle",
    category: "Folding E-Bikes",
    price: 17999,
    oldPrice: 21999,
    rating: 4.6,
    reviews: 76,
    image: cycle4,
    description:
      "Folding Cycle is compact, lightweight and easy to carry. It is ideal for city rides and travelling.",
    features: [
      "Foldable Frame",
      "7 Speed Gear",
      "Compact Design",
      "Lightweight Body",
      "Comfort Seat",
    ],
  },

  {
    id: 4,
    name: "Kids Beast",
    category: "Kids",
    price: 21999,
    oldPrice: 25999,
    rating: 4.9,
    reviews: 145,
    image: cycle3,
    description:
      "Kids Beast is a stylish and safe cycle specially designed for kids with a comfortable and strong frame.",
    features: [
      "Strong Steel Frame",
      "Safety Brakes",
      "Comfortable Handlebar",
      "Premium Tyres",
      "Strong Frame",
    ],
  },

  {
    id: 5,
    name: "Speed X1",
    category: "Road",
    price: 28999,
    oldPrice: 32999,
    rating: 4.8,
    reviews: 89,
    image: cycle6,
    description:
      "Speed X1 is a high-performance road cycle designed for speed, smooth rides and long-distance cycling.",
    features: [
      "18 Speed Gear",
      "Aerodynamic Frame",
      "Road Racing Tyres",
      "Disc Brakes",
      "Lightweight Design",
    ],
  },

  {
    id: 6,
    name: "Road E-Cycle",
    category: "Road Electric",
    price: 13999,
    oldPrice: 16999,
    rating: 4.5,
    reviews: 64,
    image: cycle7,
    description:
      "Road E-Cycle provides smooth electric assistance for daily commuting and comfortable city rides.",
    features: [
      "250W Motor",
      "Rechargeable Battery",
      "LED Lights",
      "Digital Meter",
      "Comfortable Saddle",
    ],
  },

  {
    id: 7,
    name: "Mountain Cycle",
    category: "Mountain",
    price: 19999,
    oldPrice: 23999,
    rating: 4.7,
    reviews: 112,
    image: cycle8,
    description:
      "Mountain Cycle is built for adventurous riders who want stability, comfort and excellent performance on trails.",
    features: [
      "24 Speed Gear",
      "Front Suspension",
      "All Terrain Tyres",
      "Disc Brakes",
      "Strong Alloy Frame",
    ],
  },

  {
    id: 8,
    name: "City Flash",
    category: "City",
    price: 16999,
    oldPrice: 19999,
    rating: 4.6,
    reviews: 87,
    image: cycle9,
    description:
      "City Flash is a comfortable city bicycle designed for daily commuting, fitness and smooth urban rides.",
    features: [
      "7 Speed Gear",
      "Comfort Seat",
      "City Tyres",
      "Lightweight Frame",
      "LED Reflectors",
    ],
  },
];

function CycleDetails1() {
  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Black");

 
  const cycle = cycles.find(
    (item) => item.id === Number(id)
  );

  
  if (!cycle) {
    return (
      <div className="details-not-found">
        <h1>Cycle Not Found 😕</h1>

        <Link to="/products">
          Back to All Cycles
        </Link>
      </div>
    );
  }

  
  const discount = Math.round(
    ((cycle.oldPrice - cycle.price) / cycle.oldPrice) * 100
  );

  return (
    <>
      <Marquee />

      <Navbar1 />

      <Navbar />

      <div className="details-page">

       
        <Link
          to="/products"
          className="back-link"
        >
          ← Back to All Cycles
        </Link>


        <div className="details-container">

          <div className="details-left">

           

            <div className="details-image">

              <span className="details-discount">
                {discount}% OFF
              </span>

              <button className="details-heart">
                ♡
              </button>

              <img
                src={cycle.image}
                alt={cycle.name}
              />

            </div>

            <div className="small-images">

              {cycles.map((item) => (

                <Link
                  key={item.id}
                  to={`/cycle/${item.id}`}
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className={
                      Number(id) === item.id
                        ? "selected-thumbnail"
                        : ""
                    }
                  />

                </Link>

              ))}

            </div>

          </div>

          <div className="details-right">

          

            <p className="details-category">
              {cycle.category}
            </p>


            <h1>
              {cycle.name}
            </h1>

            <div className="details-rating">

              <span className="rating-star">
                ⭐ {cycle.rating}
              </span>

              <span>
                {cycle.reviews} Customer Reviews
              </span>

            </div>


            <div className="details-price">

              <strong>
                ₹{cycle.price.toLocaleString()}
              </strong>

              <del>
                ₹{cycle.oldPrice.toLocaleString()}
              </del>

              <span>
                {discount}% OFF
              </span>

            </div>

            <p className="details-description">
              {cycle.description}
            </p>

            <div className="details-features">

              <h3>
                Key Features
              </h3>

              {cycle.features.map(
                (feature, index) => (

                  <div
                    className="feature"
                    key={index}
                  >

                    <span>
                      ✓
                    </span>

                    <p>
                      {feature}
                    </p>

                  </div>

                )
              )}

            </div>


             {/* <div className="color-section">

              <h3>
                Choose Color
              </h3>

              <div className="colors">

                <button
                  className={
                    selectedColor === "Black"
                      ? "active-black"
                      : ""
                  }
                  onClick={() =>
                    setSelectedColor("Black")
                  }
                >
                  Black
                </button>


                <button
                  className={
                    selectedColor === "Blue"
                      ? "active-blue"
                      : ""
                  }
                  onClick={() =>
                    setSelectedColor("Blue")
                  }
                >
                  Blue
                </button>


                <button
                  className={
                    selectedColor === "Red"
                      ? "active-red"
                      : ""
                  }
                  onClick={() =>
                    setSelectedColor("Red")
                  }
                >
                  Red
                </button>

              </div>

            </div>  */}


            <div className="quantity-section">

              <h3>
                Quantity
              </h3>

              <div className="quantity">

                <button
                  onClick={() => {
                    if (quantity > 1) {
                      setQuantity(quantity - 1);
                    }
                  }}
                >
                  −
                </button>

                <span>
                  {quantity}
                </span>

                <button
                  onClick={() =>
                    setQuantity(quantity + 1)
                  }
                >
                  +
                </button>

              </div>

            </div>

            <div className="details-buttons">

              <button className="add-cart">
                Add to Cart
              </button>

              <button className="buy-now">
                Buy Now
              </button>

            </div>

            <div className="product-info">

              <div>
                🚚

                <span>
                  <strong>
                    Free Delivery
                  </strong>

                  <small>
                    Available across India
                  </small>
                </span>
              </div>


              <div>
                🔄

                <span>
                  <strong>
                    7 Days Return
                  </strong>

                  <small>
                    Easy return policy
                  </small>
                </span>
              </div>


              <div>
                🛡️

                <span>
                  <strong>
                    1 Year Warranty
                  </strong>

                  <small>
                    Manufacturer warranty
                  </small>
                </span>
              </div>

            </div>

          </div>

        </div>


        <div className="about-cycle">

          <h2>
            About {cycle.name}
          </h2>

          <p>
            {cycle.description} This cycle is designed
            with premium materials and modern technology
            to provide excellent comfort, performance
            and durability.
          </p>

        </div>

      </div>


      <Footer />

    </>
  );
}

export default CycleDetails1;
