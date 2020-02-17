import React from "react";
import { Link } from "react-router-dom";
import SusieLogo from "./images/SusieLogo.png";

function Header() {
  return (
    <div className="header">
      <img
          src={SusieLogo}
          alt="Susie's South Forty logo"
          className="susie-logo"
        />
      
      <h1>Susie's South Forty Confections</h1>
      <h2>"Every Batch Made From Scratch"</h2>

      <ul>
      <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="link">
            Products
          </Link>
        </li>
        <li>
          <Link to="/occasions" className="link">
            Occasions
          </Link>
        </li>
        <li>
          <Link to="/baskets" className="link">
            Baskets
          </Link>
        </li>
        <li>
          <Link to="/business-gifts" className="link">
            Business Gifts
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
