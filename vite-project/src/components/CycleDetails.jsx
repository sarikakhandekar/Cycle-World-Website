import React from "react";
import "./CycleDetails.css";
import Marquee from "../components/Marquee";
import Navbar from "../components/Navbar";
import Navbar1 from "../components/Navbar1";
import Footer from "../components/Footer";


const cycles = [

  {
    id: 1,
    name: "Mountain Bike",
    price: "₹25,000",
    type: "MTB Cycle",
    description:
      "Mountain bike rough roads, hills aur off-road riding ke liye best hoti hai.",
    features: [
      "21 Speed Gear",
      "Strong Frame",
      "Disc Brake",
      "Heavy Duty Tyres",
    ],
  },

  {
    id: 2,
    name: "Road Bike",
    price: "₹35,000",
    type: "Speed Cycle",
    description:
      "Road bike smooth roads aur fast riding ke liye design ki gayi hoti hai.",
    features: [
      "Light Weight Frame",
      "Drop Handlebar",
      "High Speed",
      "Thin Tyres",
    ],
  },

  {
    id: 3,
    name: "Hybrid Cycle",
    price: "₹20,000",
    type: "City Cycle",
    description:
      "Hybrid cycle daily use aur long distance travel ke liye comfortable hoti hai.",
    features: [
      "Comfort Seat",
      "Easy Riding",
      "Strong Wheels",
      "Low Maintenance",
    ],
  },

  {
    id: 4,
    name: "Electric Cycle",
    price: "₹60,000",
    type: "E-Bike",
    description:
      "Electric cycle battery power se chalti hai aur long rides ke liye useful hai.",
    features: [
      "Battery Powered",
      "Fast Charging",
      "Eco Friendly",
      "Long Range",
    ],
  },

  {
    id: 5,
    name: "Folding Cycle",
    price: "₹18,000",
    type: "Folding Bike",
    description:
      "Folding cycle compact design ke saath city travel, office aur easy storage ke liye perfect hai.",
    features: [
      "Foldable Frame",
      "Lightweight Design",
      "7 Speed Gear",
      "Easy Storage",
    ],
  },

  {
    id: 6,
    name: "Kids Cycle",
    price: "₹12,000",
    type: "Kids Bike",
    description:
      "Kids cycle specially children ke liye designed hai jo safe, comfortable aur easy to ride hai.",
    features: [
      "Strong Frame",
      "Safety Brakes",
      "Comfort Seat",
      "Durable Tyres",
    ],
  },

];

const CycleDetails = () => {
 
  return (
    <>
    <Marquee />
    <Navbar1 />
    <Navbar />

    <div className="cycle-container">
      <h1 className="cycle-title"> 🚲 Cycle Details</h1>

      <div className="cycle-grid">
        {cycles.map((cycle) => (
          <div className="cycle-card" key={cycle.id}>
            <h2>{cycle.name}</h2>

            <h3>{cycle.price}</h3>

            <p>
              <b>Type:</b> {cycle.type}
            </p>

            <p>{cycle.description}</p>

            <h4>Features:</h4>

            <ul>
              {cycle.features.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <button className="buy-btn">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
     <Footer />
     </>
  );
};

export default CycleDetails;
