import React, { Fragment } from "react";
import Collections from "../components/Collections";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import ScrollTop from "../components/ScrollTop";

const Home = (props) => {
  return (
    <Fragment>
      <div id="back-to-top-anchor" />
      <Collections />
      <Categories />
      <Products />
      <ScrollTop {...props}>
        <Fab color="secondary" size="large" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Fragment>
  );
};

export default Home;
