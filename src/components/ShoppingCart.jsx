import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import OrderSummaryItem from "./OrderSummaryItem";
import ShoppingCartItem from "./ShoppingCartItem";

export default function ShoppingCart({ match, location }) {
  console.log(match);
  console.log(location);

  const [items, setItems] = useState([location.state.item]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography variant="div" component="h1" style={{ marginTop: 25 }}>
          {" "}
          🛒Shopping Cart
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={7} lg={7}>
            <Grid container>
              <Grid item xs>
                {items.map((item) => (
                  <ShoppingCartItem
                    image={item.picture}
                    category={item.categoryId}
                    name={item.displayName}
                    size={location.state.chosenSize}
                    quantity={location.state.chosenQuantity}
                    price={item.currentPrice}
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
    </React.Fragment>
  );
}
