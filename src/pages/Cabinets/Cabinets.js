import React from "react";
import Footer from "../../components/Footer/Footer";
import ex4 from "../../photos/home-ex1.jpeg";

const Cabinets = () => {
  return (
    <>
      <div
        className="infoGrid"
        style={{
          height: "40vh",
          maxWidth: "1320px",
          margin: "0 auto",
          backgroundColor: "black",
        }}
      >
        <h2
          id="cabinets"
          style={{
            color: "white",
          }}
        >
          Cabinets
        </h2>
        <div className="infoGridPic">
          <img src={ex4} alt="infoGridImage" />
        </div>
        <div
          className="infoGridText"
          style={{ backgroundColor: "white", height: "30vh" }}
        >
          <h1 style={{ color: "black", textDecoration: "underline" }}>
            Top of the line
          </h1>
          <p style={{ color: "black" }}>
            This is where I will write down some information about the services
            that Elevation Design provides that would be best seen on the home
            page, sales pitch almost
          </p>
        </div>
      </div>
    </>
  );
};

export default Cabinets;
