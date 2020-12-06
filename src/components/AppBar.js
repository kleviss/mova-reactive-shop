import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useAppContext, AppContextProvider } from "../context";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  appBarLogo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "80px",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const pr = useAppContext(AppContextProvider);
  console.log(pr.cartItems[0]);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/">
              <img
                src="https://www.mova.ie/images/MOVA-Logo-White.png"
                className={classes.appBarLogo}
                alt="MOVA logo"
              />
            </Link>
          </Typography>
          <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
            <IconButton aria-label="show new items" color="inherit">
              <Badge badgeContent={pr.cartItems[0].length} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
