import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-social">
        <p>
          <AiFillInstagram title="Instagram" />
        </p>
        <p>
          <AiFillFacebook title="Facebook" />
        </p>
        <p>
          <AiFillYoutube title="Youtube" />
        </p>
        <p>
          <AiFillTwitterSquare title="Twitter" />
        </p>
      </div>
      <div>
        <p className="footer-descr">
          DRINK RESPONSIBLY © 2023 The Cliff Cocktail Club, 222 W Merchandise
          Mart. Please drink responsibly.
        </p>
      </div>
    </div>
  );
};

export default Footer;
