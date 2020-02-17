import React from "react";
import MainSusie03 from "./images/MainSusie03.png";
import TexasTrash from "./images/Products-TexasTrash.jfif";
import PecanToffee from "./images/Products-PecanToffee.jpg";
import WinnerCaramels from "./images/Products-WinnerCaramels.jpg";
import FudgeRichey from "./images/Products-FudgeRichey.jpg";
import KickerPralines from ".//images/Products-KickerPralines.jpg";
import AssortedChocolates from "./images/Products-AssortedChocolates.jpg";
import OtherConfections from "./images/Products-OtherConfections.jpg";
import FunStuff from "./images/Products-FunStuff.jpg";
import WhatsNew from "./images/Products-WhatsNew.jpg";

function Products() {
  return (
    <div>
      <div className="hero-img-products">
        <img
          src={MainSusie03}
          alt="image of Texas Trash"
          className="productsHero"
        />
      </div>

      <div className="allRowImgs">
        <row className="rowImgs">
          <img
            src={TexasTrash}
            alt="Texas Trash Products image"
            className="texasTrash"
          />
          <img
            src={PecanToffee}
            alt="Pecan Toffee Products image"
            className="pecanToffee"
          />
          <img
            src={WinnerCaramels}
            alt="Winner Caramels Products image"
            className="winnerCaramels"
          />
        </row>

        <row className="rowImgs">
          <img
            src={FudgeRichey}
            alt="Fudge Richey Products image"
            className="fudgeRichey"
          />
          <img
            src={KickerPralines}
            alt="Kicker Pralines Products image"
            className="kickerPralines"
          />
          <img
            src={AssortedChocolates}
            alt="Assorted Chocolates Products image"
            className="assortedChocolates"
          />
        </row>

        <row className="rowImgs">
          <img
            src={OtherConfections}
            alt="Other Confections Products image"
            className="otherConfections"
          />
          <img
            src={FunStuff}
            alt="Fun Stuff Products image"
            className="funStuff"
          />
          <img
            src={WhatsNew}
            alt="Whats New Products image"
            className="whatsNew"
          />
        </row>
      </div>
    </div>
  );
}

export default Products;
