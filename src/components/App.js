import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppBar from "../components/AppBar";
import CollectionPage from "../components/CollectionPage";
import CategoryPage from "../components/CategoryPage";
import ProductPage from "../components/ProductPage";
import ShoppingCart from "../components/ShoppingCart";


import Footer from "../components/Footer";
import Home from "./Home";

export default function App() {
  return (
    <Router>
      <React.Fragment>
        <AppBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/collection/:id" exact component={CollectionPage} />
          <Route path="/category/:id" exact component={CategoryPage} />
          <Route path="/item/:id" exact component={ProductPage} />
          <Route path="/cart" exact component={ShoppingCart} />
        </Switch>
        <Footer />
      </React.Fragment>
    </Router>
  );
}
