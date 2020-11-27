import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import EcoIcon from "@material-ui/icons/Eco";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  categoryItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const CategoryItem = ({ name, catId, pId }) => {
  const classes = useStyles();

  const handleClick = () => {
    console.log("Chip was clicked.");
  };

  return (
    <Fragment key={pId}>
      <Grid item xs sm={3} md={2} lg={1}>
        <Link
          className={classes.categoryLink}
          key={name}
          to={`/category/${catId}`}
        >
          <Chip
            className={classes.categoryItem}
            icon={<EcoIcon />}
            label={name}
            color="secondary"
            component="p"
            onClick={handleClick}
            clickable
          />
        </Link>
      </Grid>
    </Fragment>
  );
};

export default CategoryItem;
