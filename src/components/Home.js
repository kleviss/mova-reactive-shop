import React, { Fragment } from "react";
import Collections from "../components/Collections";
import Categories from "../components/Categories";
import Products from "../components/Products";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";

const ScrollTop = (props) => {
  const { children } = props;
  const classes = useStyles();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
};

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

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    // Position bottom-right
    bottom: theme.spacing(4),
    right: theme.spacing(3),
    // Position to center
    // top: "85%",
    // left: "47%",
  },
}));

export default Home;
