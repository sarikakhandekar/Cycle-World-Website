
import React from "react";
import "./ByCycle.css";
import { Link, useNavigate } from "react-router-dom";

const ByCycle = () => {

  const navigate = useNavigate();

  return (
    <div className="box11">
      <div>
        <h1 className="text3">Ready to move into the</h1>
        <h2 className="text4">Future?</h2>

        <h3 className="text5">
          We are ready to take you there. Get Started with
        </h3>

        <h4 className="text6">
          ChooseMyBicycle.com
        </h4>
        
        <div className="button-group">

          <Link to="/contactus" style={{ textDecoration: "none" }}>
            <button className="btn12">
              CONTACT US
            </button>
          </Link>


          <button 
            className="btn13"
            onClick={() => navigate("/products")}
          >
            SHOP NOW
          </button>

        </div>

      </div>
    </div>
  );
};

export default ByCycle;