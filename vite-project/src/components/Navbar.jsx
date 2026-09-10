import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import image1 from "../assets/images/img1.webp";
import Signup from "../components/Signup.jsx";

function Navbar() {
  const [productOpen, setProductOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-item">
        Home
      </Link>

      <Link to="/aboutus" className="nav-item">
        About Us
      </Link>

      <div
        className="dropdown"
        onMouseEnter={() => setProductOpen(true)}
        onMouseLeave={() => setProductOpen(false)}
      >
        <Link to="/products" className="nav-item">
          Products ▼
        </Link>

        {productOpen && (
          <div className="dropdown-menu">
            <p>GM360</p>
            <p>HAMMOCK</p>
            <p>JIT</p>
            <p>WALTZ</p>
            <p>ACCESSORIES</p>
          </div>
        )}
      </div>

      <Link to="/galleryfaq" className="nav-item">
        Galleryfaq
      </Link>

      <div
        className="dropdown"
        onMouseEnter={() => setContactOpen(true)}
        onMouseLeave={() => setContactOpen(false)}
      >
        <Link to="/contactus" className="nav-item">
          Contact Us ▼
        </Link>

        {contactOpen && (
          <div className="dropdown-menu">
            <p>Exclusive Showroom</p>
            <p>Support</p>
          </div>
        )}
      </div>
      <div className="number">
        <img src={image1} alt="Logo" />
      </div>
      <div>
        <Link
          to="/login"
          className="nav-item"
          style={{ position: "relative", right: "140px", fontSize: "17px" }}
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
