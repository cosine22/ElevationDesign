import React from "react";
import Footer from "../../components/Footer/Footer";
import ex4 from "../../photos/home-ex1.jpeg";

import "./Cabinets.css";

const Cabinets = () => {
  return (
    <>
      <div
        className="parent"
        id="cabinets"
        style={{
          height: "95vh",
          maxWidth: "1320px",
          margin: "0 auto",
          marginBottom: "2vh",
          marginTop: "40vh",
          backgroundColor: "black",
        }}
      >
        <h2
          className="div1"
          style={{
            color: "white",
            display: "evenly",
          }}
        >
          Cabinets
        </h2>
        <div className="productPic">
          <img src={ex4} alt="infoGridImage" />
        </div>
        <div
          className="div3"
          style={{ backgroundColor: "white", height: "100%" }}
        >
          <h2 style={{ color: "black", textDecoration: "underline" }}>
            Top of the line
          </h2>
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
