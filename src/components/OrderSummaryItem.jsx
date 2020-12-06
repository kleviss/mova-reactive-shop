import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useAppContext, AppContextProvider } from "../context";

const useStyles = makeStyles({
  root: {
    position: "sticky",
    minWidth: "275",
    top: "1rem",
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OrderSummaryItem() {
  const classes = useStyles();

  const productsToBuy = useAppContext(AppContextProvider);
  console.log(productsToBuy.cartItems[0]);

  let sum = 0;

  productsToBuy.cartItems[0].map((pr) => {
    sum += pr.originalPrice;
  });

  return (
    <Card className={classes.root} elevation={15}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Shopping Cart
        </Typography>
        <Typography variant="div" component="h1">
          {" "}
          Order Summary
        </Typography>
        <Typography variant="subtitle2">
          <hr />
        </Typography>
        <Grid container>
          <Grid item xs={11} sm={11} md={11} lg={11}>
            <Typography variant="body1" component="div">
              Shipping
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1}>
            <Typography variant="h6" component="div">
              €0
            </Typography>
          </Grid>
          <Grid item xs={8} sm={9} md={9} lg={10}>
            <Typography variant="body1" component="div">
              Total
            </Typography>
          </Grid>
          <Grid item xs={4} sm={3} md={3} lg={2}>
            <Typography color="secondary" variant="h6" component="div">
              €{sum}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>

      <CardActions>
        <Button size="large" color="secondary">
          BUY NOW ({productsToBuy.cartItems[0].length})
        </Button>
      </CardActions>
    </Card>
  );
}
