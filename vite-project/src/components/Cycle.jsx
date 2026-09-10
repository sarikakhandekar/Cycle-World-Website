import {} from "react";
import "./Cycle.css";
import { FaPlay } from "react-icons/fa";
import video1 from "../assets/video/video1.mp4";
import { useState } from "react";

const Cycle = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="box10">
      <h3 className="text1">
        With over - 44,000+ cycles sold online, -38+ million visitors
        <br></br>
        exploring CMB before making a purchase, we have become a<br></br>
        trusted choice for cycling enthusiasts.
      </h3>

      <h4 className="text2">We Ship To 95% Of All Pincodes in India</h4>

      <button className="btn11" onClick={() => setShowVideo(true)}>
        <FaPlay /> &nbsp; Watch the video
      </button>

      {showVideo && (
        <div className="modalOverlay">
          <div className="modalContent">
            <button className="closeBtn" onClick={() => setShowVideo(false)}>
              ✖
            </button>

            <video width="100%" controls autoPlay>
              <source
                src={video1}
                type="video/mp4"
              
              />
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cycle;
