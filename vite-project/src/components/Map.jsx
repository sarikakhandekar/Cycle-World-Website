import React from "react";

function Map() {
  return (
    <div className="map-container">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30108.58582151308!2d72.83262157165356!3d19.38762333622073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a8c4cfd80f07%3A0xa60c53fe213502f1!2sVithal%20Rakhumai%20Mandir!5e0!3m2!1sen!2sin!4v1787621795342!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{
          border: "0",
          borderRadius: "10px",
        }}
        loading="lazy"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Map;