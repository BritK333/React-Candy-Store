import React from "react";
import MainSusie01 from "./images/MainSusie01.png";
import TeacherBasket from "./images/Baskets-TeacherBasket.jpg";
import BlackGold from "./images/Baskets-BlackGold.JPG";
import ChocolateTin from "./images/Baskets-ChocolateTin.JPG";
import OilfieldTin from "./images/Baskets-OilfieldTin.png";
import OilDerrick from "./images/Baskets-OilDerrick.png";
import SnowmanTrash from "./images/Baskets-SnowmanTrash.JPG";
import CowboyChristmas from "./images/Baskets-CowboyChristmas.JPG";
import PumpJack from "./images/Baskets-PumpJack.png";
import TexasCrude from "./images/Baskets-TexasCrude.png";
import TexasRedTrim from "./images/Baskets-TexasRedTrim.jpg";

function Occasions() {
  return (
    <div>
      <div className="hero-img-occasions">
        <img src={MainSusie01} alt="Texas basket" className="basketsHero" />
      </div>

      <div className="allRowImgs">
        <div className="basketsTopRow">
          <row className="rowImgsBasket">
            <div>
              <h3>Baskets for Any Occasion</h3>
              <br />
              <p>
                LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM
                LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM
                LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM
                LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM
                LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM
                LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM
                LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM
                LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM
                LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM
                LOREM IPSUM LOREM IPSUM LOREM IPSUM
              </p>
            </div>

            <img
              src={TeacherBasket}
              alt="Teacher's Candy Gift Basket"
              className="teacher-basket"
            />
          </row>
        </div>

        <br />

        <row className="rowImgs">
          <img src={ChocolateTin} alt="Chocolate Tin" className="chocTin" />
          <img
            src={CowboyChristmas}
            alt="Cowboy Christmas"
            className="cowboyChristmas"
          />
          <img src={BlackGold} alt="Black Gold" className="blackGold" />
        </row>
        <br />
        <row className="rowImgs">
          <img src={OilDerrick} alt="Oil Derrick" className="oilDerrick" />

          <img
            src={SnowmanTrash}
            alt="Snowman Texas Trash Bin"
            className="snowmanTrash"
          />
          <img src={OilfieldTin} alt="Oilfield Tin" className="oilfieldTin" />
        </row>
        <row className="rowImgs">
          <img src={TexasCrude} alt="Texas Crude" className="texasCrude" />
          <img src={PumpJack} alt="Pump Jack" className="pumpJack" />
          <img
            src={TexasRedTrim}
            alt="Texas Red Trim Basket"
            className="texasRedTrim"
          />
        </row>
      </div>
    </div>
  );
}

export default Occasions;
