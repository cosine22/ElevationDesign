import React, { useEffect, useState, useRef, useCallback } from "react";
import Ionicons from "ionicons";
import "./ImageSlider.css";
import { AUTO } from "phaser";

const slidesContainerStyles = {
  display: "flex",
  height: "100%",
  justifyContent: "center",
  transition: "transform ease-out 0.3s",
};

const slideContainerOverflowStyles = {
  overflow: "hidden",
  height: "100%",
};

const ImageSlider = ({ slides, parentWidth }) => {
  const timerRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const getSlideStylesWithBackground = (slideIndex) => ({
    ...slideStyles,
    backgroundImage: `url(${slides[slideIndex].url})`,
    width: `${parentWidth}px`,
  });

  const slideStyles = {
    width: "1000px",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    // backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    paddingLeft: "4vw",
    // color: "#fff",
    color: "black",
    zIndex: 1,
    cursor: "pointer",
  };

  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    paddingRight: "4vw",
    right: "32px",
    fontSize: "45px",
    // color: "#fff",
    color: "black",
    zIndex: 1,
    cursor: "pointer",
  };

  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
  };

  const sliderStyles = {
    //slides
    position: "relative",
    margin: "0 auto",
    height: "100%",
    maxWidth: "800px",
  };

  const dotStyles = {
    margin: "-20px 3px",
    cursor: "pointer",
    fontSize: "20px",
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const getSlidesContainerStylesWithWidth = () => ({
    ...slidesContainerStyles,
    width: parentWidth * slides.length,
    transform: `translateX(${-(currentIndex * parentWidth)}px)`,
  });

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 2000);

    return () => clearTimeout(timerRef.current);
  }, [goToNext]);

  return (
    <div style={sliderStyles}>
      <div>
        <div style={leftArrowStyles} onClick={goToPrevious}>
          {" "}
          <ion-icon name="arrow-back-outline"></ion-icon>{" "}
        </div>
        <div style={rightArrowStyles} onClick={goToNext}>
          {" "}
          <ion-icon name="arrow-forward-outline"></ion-icon>{" "}
        </div>
      </div>
      <div style={slideContainerOverflowStyles}>
        <div style={getSlidesContainerStylesWithWidth()}>
          {slides.map((_, slideIndex) => (
            <div
              className="pictures"
              key={slideIndex}
              style={getSlideStylesWithBackground(slideIndex)}
            />
          ))}
        </div>
      </div>
      {/* <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            style={dotStyles}
            onClick={() => goToSlide(slideIndex)}
          >
            ⚪️
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default ImageSlider;
