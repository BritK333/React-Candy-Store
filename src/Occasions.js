import React from "react";
import MainSusie02 from "./images/MainSusie02.png";
import Anniversary from "./images/Occasions-Anniversary.png";
import Birthday from "./images/Occasions-Birthday.jpg";
import Christmas from "./images/Occasions-Christmas.jpg";
import Congrats from "./images/Occasions-Congrats.jpg";
import Halloween from "./images/Occasions-Halloween.png";
import ThankYou from "./images/Occasions-ThankYou.png";
import VDay from "./images/Occasions-VDay.jpg";

function Occasions() {
  return (
    <div>
      <div className="hero-img-occasions">
        <img
          src={MainSusie02}
          alt="image of Toffee"
          className="occasionsHero"
        />
      </div>

      <div className="allRowImgs">
        <div className="vdayRow">
          <row className="rowImgsVday">
            <div>
              <h3>Valentine's Day Special</h3>
              <br />
              <p>
                LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM
                LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM
                LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM
                LOREM IPSUM
              </p>
            </div>

            <img
              src={VDay}
              alt="Valentine's Day Occasions image"
              className="vDay"
            />
          </row>
        </div>

        <br />

        <row className="rowImgs">
          <img
            src={Birthday}
            alt="Birthday Occasions image"
            className="birthday"
          />
          <img
            src={ThankYou}
            alt="Thank You Occasions image"
            className="thankYou"
          />
          <img
            src={Anniversary}
            alt="Anniversary Occasions image"
            className="anniversary"
          />
        </row>
        <br />
        <row className="rowImgs">
          <img
            src={Congrats}
            alt="Congrats Occasions image"
            className="congrats"
          />

          <img
            src={Halloween}
            alt="Halloween Occasions image"
            className="halloween"
          />
          <img
            src={Christmas}
            alt="Christmas Occasions image"
            className="christmas"
          />
        </row>
      </div>
    </div>
  );
}

export default Occasions;
