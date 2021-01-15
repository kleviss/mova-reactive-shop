import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import OrderSummaryItem from "./OrderSummaryItem";
import ShoppingCartItem from "./ShoppingCartItem";
import { useAppContext, AppContextProvider } from "../context";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import ScrollTop from "../components/ScrollTop";

const ShoppingCart = (props) => {
  const pr = useAppContext(AppContextProvider);

  return (
    <React.Fragment>
      <CssBaseline />
      <div id="back-to-top-anchor" />
      <Container fixed>
        <Typography variant="div" component="h1" style={{ marginTop: 25 }}>
          {" "}
          🛒Shopping Cart
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={7} lg={7}>
            <Grid container>
              <Grid item xs>
                {pr.cartItems[0].map((item) => (
                  <ShoppingCartItem
                    image={item.picture}
                    category={item.categoryId}
                    name={item.displayName}
                    // size={location.state.chosenSize}
                    // quantity={location.state.chosenQuantity}
                    price={item.currentPrice}
                    //pass remove from cart function as prop to item
                  />
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={5} lg={5}>
            <OrderSummaryItem />
          </Grid>
        </Grid>
      </Container>
      <ScrollTop {...props}>
        <Fab color="secondary" size="large" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
};

export default ShoppingCart;
