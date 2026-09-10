import { useState, useEffect } from "react";
import "./Slider.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const SliderData = [
  {
    id: 1,
    url: "https://img.freepik.com/free-photo/close-up-person-doing-mountain-biking_23-2151850191.jpg",
  },
  {
    id: 2,
    url: "https://api.cloudly.space/resize/crop/1200/627/60/aHR0cHM6Ly9zdGF0aWMuYXBpZGFlLXRvdXJpc21lLmNvbS9maWxlc3RvcmUvb2JqZXRzLXRvdXJpc3RpcXVlcy9pbWFnZXMvNTcvMTc1LzI0MjkzMTc3LmpwZWc=/image.jpg",
  },
  {
    id: 3,
    url: "https://i0.wp.com/bike-test.com/wp-content/uploads/2023/05/DSC09439-scaled.jpg?w=1240&ssl=1",
  },
  {
    id: 4,
    url: "https://cdn.pixabay.com/photo/2019/04/06/02/20/cyclist-4106536_640.jpg",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div>
      <div className="wrapper">
        <div className="slider-container">
          <img
            src={SliderData[current].url}
            alt="slide"
            className="slide-image"
          />

          <FaChevronLeft className="icon left" onClick={prevSlide} size={50} />

          <FaChevronRight
            className="icon right"
            onClick={nextSlide}
            size={50}
          />
        </div>
      </div>

      <div className="box">
        <div className="b1">
          <img
            src="https://lekeamp.com/wp-content/uploads/2024/10/About-Us.png"
            alt="about"
            className="about-image"
          />
        </div>

        <div className="b2">
          <div className="about-content">
            <Link to="/aboutus">
              <span className="about-tag">About Us</span>
            </Link>

            <h2>INDIAS TRUSTED EBIKE BRAND.</h2>

            <h4 className="slide-up-text">
              At Lekeamp, our mission is to revolutionize commuting with smart,
              eco-friendly solutions. Since 2019, we have been committed to
              innovation and sustainability, constantly pushing boundaries to
              deliver groundbreaking results.
            </h4>

            <Link to="/Products" style={{ "textDecoration": "none", }}>
              <button className="about-btn">
                KNOW MORE
              </button>
            </Link>

            <div className="img1">
              <img
                src="https://lekeamp.com/wp-content/uploads/2024/08/Cycling-Line-Art.png"
                alt="cycling"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="box2">
        <h1>POPULAR CATEGORIES</h1>

        <button className="btn1">
          <Link
            style={{ textDecoration: "none" }}
            to="/ViewAll"
            className="view-all-btn"
          >
            VIEW ALL
          </Link>
        </button>
      </div>

      <div className="grid-container">
        <div className="grid-item">
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2022/8/AS/EQ/SX/48159474/mini-016a5024-jpg-1000x1000.jpg"
            alt=""
          />

          <button className="skew-btn1">
            <span>Cycling</span>
          </button>
        </div>

        <div className="grid-item">
          <img
            src="https://lekeamp.com/wp-content/uploads/2025/04/Popular-Categories-Accessories-Copy-1.png"
            alt=""
          />

          <button className="skew-btn2">Commuting</button>
        </div>

        <div className="grid-item">
          <img
            src="https://lekeamp.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-03-at-17.10.49_e47295d4.jpg"
            alt=""
          />

          <button className="skew-btn3">Carrier</button>
        </div>

        <div className="grid-item">
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2024/12/476377002/YY/KZ/OL/80979251/whatsapp-image-2024-07-23-at-6-47-16-pm.jpeg"
            alt=""
          />

          <button className="skew-btn4">Ebike</button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
