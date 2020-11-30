import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import LoyaltyIcon from "@material-ui/icons/Loyalty";

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

const TagItem = ({ name, handleClick }) => {
  const classes = useStyles();

  return (
    <Fragment key={name}>
      <Grid item xs={4} sm={3} md={2} lg={1}>
        <Chip
          className={classes.tagItem}
          icon={<LoyaltyIcon />}
          label={name}
          clickable
          color="primary"
          onClick={(event) => handleClick(name)}
          value={name}
        />
      </Grid>
    </Fragment>
  );
};

export default TagItem;
