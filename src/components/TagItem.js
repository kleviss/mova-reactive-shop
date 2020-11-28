import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  tagItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spacing(0.5),
  },
}));

const TagItem = ({ name }) => {
  const classes = useStyles();

  return (
    <Fragment key={name}>
      <Grid item xs={5} sm={3} md={2} lg={1}>
        <Chip
          className={classes.tagItem}
          icon={<FaceIcon />}
          label="All Products"
          clickable
          color="secondary"
          
        />
      </Grid>

      <Grid item xs={4} sm={3} md={2} lg={1}>
        <Chip
          className={classes.tagItem}
          icon={<FaceIcon />}
          label={name}
          clickable
          color="primary"
          
        />
      </Grid>
      <Grid item xs={5} sm={3} md={2} lg={1}>
        <Chip
          className={classes.tagItem}
          icon={<FaceIcon />}
          label="onThatAss"
          clickable
          color="primary"
          
        />
      </Grid>
    </Fragment>
  );
};

export default TagItem;
