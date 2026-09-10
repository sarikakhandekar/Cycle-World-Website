import {} from "react";
import { product1 } from "../product1";
import { NavLink } from "react-router-dom";
import "./Galleryfaq.css";
import Marquee from "../components/Marquee";
import Navbar from "../components/Navbar";
import Navbar1 from "../components/Navbar1";
import Footer from "../components/Footer";
import FaqData from "./FaqData";

const Galleryfaq = () => {
  return (
    <>
      <Marquee />
      <Navbar1 />
      <Navbar />
      <div className="container mt-4">
        <h1 style={{marginTop:"70px"}} className="text-center mb-4">GalleryFaq</h1>

        <div className="row">
          {product1.map((item) => (
            <div className="col-md-3 mt-3" key={item.id}>
              <div className="card h-100 shadow">
                <img
                  src={item.image}
                  alt={item.title}
                  className="card-top-img"
                />

                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>

                  <p className="card-text">{item.desc}</p>

                  <div className="btn-group-custom">
                    <NavLink to="#" className="btn btn-dark">
                      ₹{item.price}
                    </NavLink>

                    <NavLink
                      to={`/details/${item.id}`}
                      className="btn btn-info"
                    >
                      Details
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FaqData />
      <Footer />
    </>
  );
};

export default Galleryfaq;
