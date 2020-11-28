import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  productItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spacing(0.5),
  },
}));

const ProductItem = ({ name, handleClick }) => {
  const classes = useStyles();

  return (
    <Fragment key={name}>
      <Grid item xs={5} sm={3} md={2} lg={1}>
        
      </Grid>
    </Fragment>
  );
};

export default ProductItem;
