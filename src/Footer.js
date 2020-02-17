import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="oneRow">
        <column className="column1">
          <h3>Customer Service</h3>
          <p>Login</p>
          <p>Create An Account</p>
          <p>Shipping Info</p>
          <p>FAQ</p>
          <p>Return Policy</p>
          <p>Contact Us</p>
        </column>

        <column className="column2">
          <h3>Occasions</h3>
          <p>Birthday</p>
          <p>Thank You</p>
          <p>Anniversary</p>
          <p>Congratulations</p>
          <p>Halloween</p>
          <p>Christmas</p>
          <p>Valentine's Day</p>
        </column>

        <column className="column3">
          <h3>Collections</h3>
          <p>Texas Trash</p>
          <p>Pecan Toffee</p>
          <p>Winner Caramels</p>
          <p>Fudge Richey</p>
          <p>Kicker Pralines</p>
          <p>Other Chocolates</p>
          <p>Other Confections</p>
          <p>Fun Stuff</p>
          <p>What's New</p>
        </column>

        <column className="column4">
          <h3>Business Gifts</h3>
          <p>Top Business Gifts</p>
          <p>Custom Business Gifts</p>
          <p>Business Account</p>
          <p>Business Services</p>
        </column>

        <column className="column5">
          <h3>Our Company</h3>
          <p>Awards</p>
          <p>History</p>
          <p>Locations</p>
        </column>
      </div>

      <div className="copyright">
        <h3>
          Copyright 2020 <br />
          All Rights Reserved.
        </h3>
      </div>
    </div>
  );
}

export default Footer;
