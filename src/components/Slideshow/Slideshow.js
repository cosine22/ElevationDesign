import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import ex1 from "../../photos/home-ex1.jpeg";
import ex2 from "../../photos/home-ex2.jpeg";
import ex3 from "../../photos/home-ex3.jpeg";
import ex4 from "../../photos/home-ex4.jpeg";

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
  maxWidth: "1320px",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  maxWidth: "1320px",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "500px",
};
const slideImages = [
  {
    url: ex1,
    caption: "Slide 1",
  },
  {
    url: ex2,
    caption: "Slide 2",
  },
  {
    url: ex3,
    caption: "Slide 3",
  },
  {
    url: ex4,
  },
];

const Slideshow = () => {
  return (
    <div
      className="slide-container"
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        paddingLeft: "3vw",
        paddingRight: "3vw",
      }}
    >
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              className="slideImg"
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
