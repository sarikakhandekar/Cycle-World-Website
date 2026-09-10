import React, { useEffect, useState } from "react";
import "./marquee.css";

const messages = [
  "Order only and pick up in store",
  "Free Home Delivery for bicycle",
  "Deal This Week! Buy 2 Get 10% off code: DEAL10",
];

const Marquee = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="movecontainer">
      <div className="innerbox">
        <div className="slide">
          {messages[index]}
        </div>
      </div>
    </div>
  );
};

export default Marquee;