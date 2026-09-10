import "./Footer.css";
import { FaInstagramSquare } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { IoLogoTwitter } from "react-icons/io";

function Footer() {
  return (
    <footer className="footer">
      <div className="bike">🚴‍♂️</div>

      <div className="footer-container">
          <div className="footer-box">
          <h2>Cycle World</h2>
          <p>Ride fast, stay fit, enjoy life 🚴</p>
        </div>

     
        <div className="footer-box">
          <h3>Links</h3>
          <a href="/">Home</a>
          <a href="/aboutus">About Us</a>
          <a href="/products">Products</a>
          <a href="/galleryfaq">Gallery FAQ</a>
          <a href="/contactus">Contact</a>
        </div>

          <div className="footer-box">
          <h3>Contact</h3>
          <p>📍 India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ cycle@world.com</p>
        </div>

         <div className="footer-box">
          <h3>Follow</h3>

          <p>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram <FaInstagramSquare />
            </a>
          </p>

          <p>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook <BsFacebook />
            </a>
          </p>

          <p>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              Twitter <IoLogoTwitter />
            </a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Cycle World | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
