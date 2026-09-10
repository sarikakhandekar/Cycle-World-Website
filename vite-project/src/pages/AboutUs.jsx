import React from "react";
import "./About.css";
import Marquee from "../components/marquee";
import Navbar from "../components/Navbar";
import Navbar1 from "../components/Navbar1";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
    <Marquee/>
  <Navbar1/>
    <Navbar/><br></br>
    
    <div className="about-container">
      <div className="about-banner">
        <h1>About Multiple Cycle</h1>
        <p>Your Trusted Partner for Quality Bicycles & Accessories</p>
      </div>

      <div className="about-content">
        <h3>Who We Are</h3>

<p>
  Multiple Cycle is a trusted bicycle store committed to providing
  high-quality bicycles, premium accessories, and exceptional customer
  service. Since our beginning, we have focused on helping people enjoy a
  healthier, more active, and eco-friendly lifestyle through cycling.
  Whether you are purchasing your first bicycle, looking for a reliable
  daily commuter, or searching for a high-performance mountain or road
  bike, we offer a wide range of options to meet every rider's needs.
</p>

<p>
  Our collection includes bicycles for children, teenagers, adults, and
  professional cyclists, ensuring that every customer can find the perfect
  ride. We carefully select products from trusted brands that are known
  for their durability, safety, comfort, and innovative designs. Along
  with bicycles, we also provide a complete range of accessories,
  including helmets, locks, lights, pumps, gloves, and maintenance
  equipment to enhance your riding experience.
</p>

<p>
  At Multiple Cycle, customer satisfaction is our highest priority. Our
  experienced team is always available to help you choose the right
  bicycle, provide expert advice, and offer reliable after-sales support,
  including maintenance and repair services. We believe that every ride
  should be safe, enjoyable, and memorable, which is why we strive to
  deliver quality products at affordable prices with outstanding service.
</p>

<p>
  Whether you ride for fitness, adventure, transportation, or leisure,
  Multiple Cycle is dedicated to being your trusted cycling partner. We
  continuously work to build long-lasting relationships with our customers
  by delivering value, reliability, and excellence in everything we do.
</p>

<h3>Our Mission</h3>
<p>
  Our mission is to inspire people of all ages to embrace cycling as a
  healthier, more enjoyable, and environmentally friendly way of life. We
  are committed to offering high-quality, durable, and affordable bicycles
  that meet the needs of every rider, from beginners to professional
  cyclists. By combining premium products with exceptional customer
  service, expert guidance, and reliable after-sales support, we aim to
  make every cycling experience safe, comfortable, and memorable.
</p>
<p>
  We continuously strive to build lasting relationships with our customers
  by delivering value, innovation, and trust. Our goal is to encourage
  active lifestyles while promoting sustainable transportation that
  benefits both individuals and the environment.
</p>
<h3>Our Vision</h3>

<p>
  Our vision is to become one of the most trusted and preferred bicycle
  retailers by consistently delivering quality products, innovative
  solutions, and outstanding customer service. We aspire to create a
  community where cycling is embraced as a practical, healthy, and
  enjoyable mode of transportation and recreation.
</p>

<p>
  We aim to expand our range of bicycles and accessories while maintaining
  the highest standards of quality and customer satisfaction. Through
  continuous improvement, innovation, and a passion for cycling, we seek to
  make Multiple Cycle the first choice for every cycling enthusiast and
  family looking for reliable and affordable bicycles.
</p>

        <h2>Why Choose Us?</h2>

        <div className="features">
          <div className="feature-card">
            <h3>🚲 Premium Quality</h3>
            <p>Wide collection of branded and durable bicycles.</p>
          </div>

          <div className="feature-card">
            <h3>💰 Affordable Prices</h3>
            <p>Best prices with exciting offers and discounts.</p>
          </div>

          <div className="feature-card">
            <h3>🛠 Expert Service</h3>
            <p>Professional repair and maintenance support.</p>
          </div>

          <div className="feature-card">
            <h3>😊 Customer Satisfaction</h3>
            <p>Friendly support and hassle-free shopping experience.</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    </>
  );
};

export default About;