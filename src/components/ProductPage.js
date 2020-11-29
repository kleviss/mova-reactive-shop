import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    border: "2px solid black",
  },
}));

var images = [
  {
    name: "Random Name #1",
    description: "Hello World!",
    image:
      "https://1pqhh33i8vp3w759l43a3pz1-wpengine.netdna-ssl.com/wp-content/uploads/2011/10/535015w_taslan_shorts_w_navy.jpg",
  },

  {
    name: "Random Name #2",
    description: "Hello World!",
    image:
      "https://1pqhh33i8vp3w759l43a3pz1-wpengine.netdna-ssl.com/wp-content/uploads/2011/10/535015w_taslan_shorts_w_navy.jpg",
  },
];

const ProductPage = ({ match }) => {
  const classes = useStyles();

  console.log(match);

  const [productItem, setProductItem] = useState([]);

  const url = `https://5m6exoj3o7.execute-api.eu-west-1.amazonaws.com/prod/items`;

  useEffect(() => {
    console.log("useEffect has been run");

    const fetchProductItem = async () => {
      try {
        const result = await axios(url);
        setProductItem(result.data);
        console.log(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProductItem();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item lg={6} md sm={12} xs={12}>
            <Paper className={classes.paper}>
              <div>
                <Carousel animation="slide" autoPlay={false}>
                  {images.map((item) => (
                    <img style={{ width: "95%" }} src={item.image} alt="rand" />
                  ))}
                </Carousel>
              </div>
            </Paper>
          </Grid>
          <Grid item lg={6} md sm={12} xs={12}>
            <Paper className={classes.paper}>
              {productItem.map((product) => (
                <div>
                  {" "}
                  <h1>{product.displayName}</h1>
                  <h1>
                    {product.collectionId}/{product.tags[0]}
                  </h1>
                  <h1>
                    {product.originalPrice}/{product.currentPrice}
                  </h1>
                  <h2>
                    Select size:
                    {product.availableSizes.map((size) => (
                      <p>{size}</p>
                    ))}
                  </h2>
                  <h3>{product.description}</h3>
                </div>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ProductPage;
