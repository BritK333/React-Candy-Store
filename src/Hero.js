import React from "react";
import "./App.css";
import ssfStorefront from "./images/SSF-storefront.jfif";

class Hero extends React.Component {
  render() {
    return (
      <div>
        <img
          src={ssfStorefront}
          alt="Susies South Forty storefront"
          className="ssf-storefront"
        />
      </div>
    );
  }
}

export default Hero;
