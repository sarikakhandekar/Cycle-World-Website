
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

import Product from "./components/Product";
import Galleryfaq from "./components/Galleryfaq";
import Details from "./components/Details";
import Login from "./components/Login";
import Signup from "./components/Signup";
import FaqData from "./components/FaqData";
import CycleDetails from "./components/CycleDetails";
import ViewAll from "./components/ViewAll";
import CycleDetails1 from "./components/CycleDetails1";
import Map from "./components/Map.jsx";

function App() {
  return (
    <div>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/aboutus" element={<AboutUs />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/products" element={<Product />} />

        <Route path="/galleryfaq" element={<Galleryfaq />} />

        <Route path="/contactus" element={<ContactUs />} />

        <Route path="/details/:prodId" element={<Details />} />

        <Route path="/FaqData" element={<FaqData />} />

        <Route path="/Cycledetails" element={<CycleDetails />} />

        <Route path="/ViewAll" element={<ViewAll />} />

        <Route path="/cycle/:id" element={<CycleDetails1 />} />

        <Route path="/map" element={<Map />} />

      </Routes>
    </div>
  );
}

export default App;
