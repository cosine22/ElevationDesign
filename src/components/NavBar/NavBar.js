import React, { useRef, useState } from "react";
import { HashLink } from "react-router-hash-link";
import CounterTops from "../../pages/CounterTops/CounterTops";
import scrollIntoView from "react";
import "./NavBar.css";
const NavBar = () => {
  const [showNavBar, setShowNavBar] = useState(false);
  const ref = useRef(null);
  const handleShowNavBar = () => {
    setShowNavBar(!showNavBar);
  };

  const handleClick = () => {};

  return (
    <nav className="navbar" id="navbar">
      <div className="container">
        <div className="logo">
          {/* <img src={logo} alt="Elevation Design" /> */}
          <li>Elevation Design</li>
        </div>
        <div className="menu-icon" onClick={handleShowNavBar}>
          <Hamburger />
        </div>
        <div className={`nav-elements ${showNavBar && "active"}`}>
          <ul>
            <li style={{ color: "black" }}>
              <HashLink smooth to="#counterTops">
                Countertops
              </HashLink>
            </li>

            <li style={{ color: "black" }}>
              <HashLink smooth to="#cabinets">
                Cabinets
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#contact">
                Contact
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
const Hamburger = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="52"
    height="24"
    viewBox="0 0 52 24"
  >
    <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
      <rect
        id="Rectangle_3"
        data-name="Rectangle 3"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 47)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_5"
        data-name="Rectangle 5"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 67)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_4"
        data-name="Rectangle 4"
        width="52"
        height="4"
        rx="2"
        transform="translate(294 57)"
        fill="#574c4c"
      />
    </g>
  </svg>
);

export default NavBar;
