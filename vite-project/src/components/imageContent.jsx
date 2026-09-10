import "./imageContent.css";
import Cycle from "./Cycle";
import { Link } from "react-router-dom";

const products = [
  {
    name: "CYPRO 26 PULSE II GEN E-BICYCLE",
    price: "₹27,999",
    image:
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=800",
  },
  {
    name: "PEDALEZE TOWN AND COUNTRY 2.0",
    price: "₹35,000",
    image:
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=800",
  },
  {
    name: "FIREFOX DRIFT PLUS FS SS BICYCLE",
    price: "₹12,340",
    image:
      "https://images.unsplash.com/photo-1511994298241-608e28f14fde?q=80&w=800",
  },
  {
    name: "HERO LECTRO 29 F3I E-BICYCLE",
    price: "₹38,500",
    image:
      "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=800",
  },
];

export default function App() {
  return (
    <div className="container2">
      <div className="hero">
        <img
          src="https://images.unsplash.com/photo-1511994298241-608e28f14fde?q=80&w=800"
          alt="bike"
        />

        <div className="overlay">
          <h1>WALTX</h1>
          <p>FEATURED PRODUCT</p>
          <span>Discover the best product of the season</span>
        </div>
      </div>

      <div className="product-grid">
        {products.map((item, index) => (
          <div className="card1" key={index}>
            <img className="img4" src={item.image} alt={item.name} />
            <Link to="/Cycledetails" style={{"textDecoration":"none"}}>
              <button className="btn6" >VIEW DETAILS</button>
            </Link>
            <div className="card-content">
              <h3 style={{ fontSize: "19px", marginLeft: "30px" }}>
                {item.name}
              </h3>
              <p style={{ marginLeft: "30px" }}>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
