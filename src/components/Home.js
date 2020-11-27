import React, { Fragment } from "react";
import Collections from "../components/Collections";
import Categories from "../components/Categories";
import Products from "../components/Products";

const Home = () => {
  return (
    <Fragment>
      <Collections />
      <Categories />
      <Products />
    </Fragment>
  );
};

export default Home;
