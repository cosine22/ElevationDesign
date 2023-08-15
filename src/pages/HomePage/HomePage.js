import React, { useEffect, useState, useRef } from "react";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Footer from "../../components/Footer/Footer";
import ex1 from "../../photos/home-ex1.jpeg";
import ex2 from "../../photos/home-ex2.jpeg";
import ex3 from "../../photos/home-ex4.jpeg";
import ex4 from "../../photos/home-ex3.jpeg";
import mapPicture from "../../photos/mapPicture.png";
import CounterTops from "../CounterTops/CounterTops";
import Slideshow from "../../components/Slideshow/Slideshow";
import "./HomePage.css";
import Cabinets from "../Cabinets/Cabinets";
import ContactForm from "../../components/ContactForm/ContactForm";
const HomePage = () => {
  const [dimensions, setDimensions] = useState({
    width: window.width * 0.9,
    height: window.height / 4,
  });

  const handleResize = () => {
    setDimensions({
      width: window.innerWidth * 0.9,
      height: window.innerHeight / 5,
    });
  };
  const slides = [
    {
      url: ex1,
      title: "Code",
    },
    {
      url: ex2,
      title: "Code2",
    },
    {
      url: ex3,
      title: "Code3",
    },
  ];

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  const containerStyles = {
    width: window.width * 0.9,
    height: "400px",
    margin: "0 auto",
    paddingTop: "1vh",
    position: "relative",
  };

  return (
    <div>
      <h1 style={{ fontWeight: 600 }}>Granite. Cabinets. Tile.</h1>

      <Slideshow style={{ maxWidth: "1320px" }} />

      <div
        className="infoGrid"
        style={{ height: "80vh", maxWidth: "1320px", margin: "0 auto" }}
      >
        <h1 className="areaText">
          Servicing the Sarasota & Charollette Counties of Florida
        </h1>
        <div className="infoGridPic">
          <img src={mapPicture} alt="infoGridImage" />
        </div>
        <div className="infoGridText">
          <h1>Elevation Design LLC</h1>
          <p>
            This is where I will write down some information about the services
            that Elevation Design provides that would be best seen on the home
            page, sales pitch almost
          </p>
        </div>
      </div>

      <CounterTops id="#counterTops" />

      <Cabinets />

      <ContactForm />

      <Footer />
    </div>
  );
};

export default HomePage;
