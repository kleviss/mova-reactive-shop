import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: "1rem",
    marginRight: "1rem",
  },
}));

const ProductList = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.root}>
        <h1>Tags</h1>
        <Grid container spacing={2}></Grid>
        <h1>Product List</h1>
        <Grid container spacing={2}></Grid>
      </div>
    </Fragment>
  );
};

export default ProductList;
