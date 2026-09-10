import {} from "react";
import Slider from "../components/Slider";
import Card from "../components/Card";
import ImageContent from "../components/imageContent";
import Cycle from "../components/Cycle";
import ByCycle from "../components/Bycycle";
import Signup from "../components/Signup";
import Marquee from "../components/marquee";
import Navbar1 from "../components/Navbar1";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Marquee />
      <Navbar1 />
      <Navbar />
      <Slider />
      <Card />
      <ImageContent />
      <Cycle />
      <ByCycle />
      <Signup />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
