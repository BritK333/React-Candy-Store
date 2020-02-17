import React from "react";
import "./App.css";
import "bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Products from "./Products";
import Occasions from "./Occasions";
import Baskets from "./Baskets";
import BusinessGifts from "./BusinessGifts";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <nav>
        <Header />
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/products">
          <Products />
        </Route>

        <Route path="/occasions">
          <Occasions />
        </Route>

        <Route path="/baskets">
          <Baskets />
        </Route>

        <Route path="/business-gifts">
          <BusinessGifts />
        </Route>
      </Switch>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
