import { useState } from "react";
import "./Card.css";
const cardData = [
  {
    id: 1,
    title: "Card 1",
    text: "Some quick example text the card title.",
    images: {
      default:
        "https://lekeamp.com/wp-content/uploads/2023/03/gm360-Series-1024x733.png",
      black:
        "https://lekeamp.com/wp-content/uploads/2023/03/GM-360-Grey-1-2-1024x733.png",
      green:
        "https://lekeamp.com/wp-content/uploads/2023/03/gm360-Series-1024x733.png",
    },
  },
  {
    id: 2,
    title: "Card 2",
    text: "Some quick example text for card title.",
    images: {
      default:
        "https://lekeamp.com/wp-content/uploads/2023/03/gm360-Series-1024x733.png",
      black:
        "https://lekeamp.com/wp-content/uploads/2023/03/GM-360-Grey-1-2-1024x733.png",
      green:
        "https://lekeamp.com/wp-content/uploads/2023/03/gm360-Series-1024x733.png",
    },
  },
  {
    id: 3,
    title: "Card 3",
    text: "Some quick example text for card title.",
    images: {
      default:
        "https://lekeamp.com/wp-content/uploads/2023/03/gm360-Series-1024x733.png",
      black:
        "https://lekeamp.com/wp-content/uploads/2023/03/GM-360-Grey-1-2-1024x733.png",
      green:
        "https://lekeamp.com/wp-content/uploads/2023/03/gm360-Series-1024x733.png",
    },
  },
  {
    id: 4,
    title: "Card 4",
    text: "Some quick example text for card title.",
    images: {
      default:
        "https://lekeamp.com/wp-content/uploads/2023/03/gm360-Series-1024x733.png",
      black:
        "https://lekeamp.com/wp-content/uploads/2023/03/GM-360-Grey-1-2-1024x733.png",
      green:
        "https://lekeamp.com/wp-content/uploads/2023/03/gm360-Series-1024x733.png",
    },
  },
];
const Card = () => {
  const [activeImage, setActiveImage] = useState({});

  const handleHover = (id, type) => {
    setActiveImage((prev) => ({
      ...prev,
      [id]: type,
    }));
  };

return (
  <div className="main4">
    <div className="container1">
      <div className="cards" style={{ marginTop: "80px" }}>
        {cardData.map((card) => {
          const currentType = activeImage[card.id] || "default";

          return (
            <div className="col-3" key={card.id}>
              <div className="card">
                <img
                  src={card.images[currentType]}
                  className="card-img-top"
                  alt={card.title}
                />

                <div className="card-body">
                  <h5>{card.title}</h5>
                  <p>{card.text}</p>

                  <div className="button-group">
                    <button
                      className="btn3"
                      onMouseEnter={() => handleHover(card.id, "black")}
                      onMouseLeave={() => handleHover(card.id, "default")}
                    >
                      Black
                    </button>

                    <button
                      className="btn4"
                      onMouseEnter={() => handleHover(card.id, "green")}
                      onMouseLeave={() => handleHover(card.id, "default")}
                    >
                      Green
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
)};

export default Card