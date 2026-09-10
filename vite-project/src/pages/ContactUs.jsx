import {React} from "react";
import { products } from "../components/products";
import Marquee from "../components/Marquee";
import Navbar from "../components/Navbar";
import Navbar1 from "../components/Navbar1";
import Footer from "../components/Footer";
import Map from "../components/Map.jsx";
import "./ContactUs.css";
import { MdOutlineSubject } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";

const ContactUs = () => {
  return (
    <>
      <Marquee />
      <Navbar1 />
      <Navbar />
      

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <div className="overlay">
              <div className="info-content">
                <h1>Ride With Us</h1>

                <p>
                  Have questions about our bicycles, accessories, or repairs?
                  Our team is ready to help you find the perfect ride.
                </p>

                <div className="contact-details">
                  <div>📍 Mumbai, India</div>
                  <div>📞 +91 98765 43210</div>
                  <div>✉ support@velocitycycles.com</div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="contact-form">
            <h2>Contact Us</h2>
            <p>Send us a message and we’ll reply soon.</p>

            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>

              <div className="form-group">
                <input type="email" placeholder="Your Email" required /><del className="icon1"><MdOutlineMailOutline /></del>
              </div>

              <div className="form-group">
                <input type="text" placeholder="Subject" /><span className="icon"><MdOutlineSubject /></span>
              </div>

              <div className="form-group">
                <textarea placeholder="Write your message..."></textarea>
              </div>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section><br></br><br></br><br></br><br></br><br></br>
      <div className="contact-map">
          <Map />
        </div><br></br><br></br><br></br><br></br>
      <Footer />
    </>
  );
};

export default ContactUs;
