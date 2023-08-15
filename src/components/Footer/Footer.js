import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import { HashLink } from "react-router-hash-link";
import Ionicons from "ionicons";
// import { useBlocker } from "react-router/dist/lib/hooks";

const Footer = () => {
  return (
    <div className="social-container" style={{ marginTop: "vh" }}>
      <div>
        <h3>Elevation Design LLC</h3>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul style={styles}>
          <HashLink smooth to="#navbar" style={styles}>
            Back to Top{" "}
          </HashLink>
          |{" "}
          <HashLink smooth to="#counterTops" style={styles}>
            Countertops{" "}
          </HashLink>
          |
          <HashLink smooth to="#counterTops" style={styles}>
            {" "}
            Cabinets{" "}
          </HashLink>
        </ul>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul style={styles}>
          <ion-item>
            <ion-icon item-start name="mail-outline"></ion-icon>:
            elevancedesigngranite@gmail.com |{" "}
          </ion-item>
          <ion-icon name="call-outline"></ion-icon>: 111-222-3333
        </ul>
      </div>
      <ul style={styles}>
        <p>Port Charolette, FL, USA</p>
      </ul>
      {/* <a
        href="https://www.instagram.com/lorenecertified/"
        className="insta social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>

      <a
        href="https://www.instagram.com/lorenecertified/"
        className="twitter social"
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>

      <a
        href="https://www.instagram.com/lorenecertified/"
        className="tiktok social"
      >
        <FontAwesomeIcon icon={faTiktok} size="2x" />
      </a> */}
    </div>
  );
};

const styles = {
  fontWeight: "400",
  color: "white",
  textDecoration: "none",
  fontSize: "18px",
};
export default Footer;
