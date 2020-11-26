import React, { Fragment, useState, useEffect } from "react";
import Collections from "../components/Collections";
import Categories from "../components/Categories";

const Home = () => {
  return(
    <Fragment>
      <Collections />
      <Categories />
    </Fragment>
  )
}

export default Home;