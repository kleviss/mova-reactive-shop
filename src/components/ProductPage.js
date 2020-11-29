import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  availableSizes: {
    display: "flex",
    justifyContents: "space-around",
  },
  chipItem: {
    marginRight: "1px",
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
      <Container fixed style={{ marginTop: "10px" }}>
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
                  <Typography variant="button" display="block">
                    {product.collectionId} {">"} {product.tags[0]}
                  </Typography>
                  <Typography variant="h4" gutterBottom>
                    {product.displayName}
                  </Typography>
                  <h3>Select size: </h3>
                  <h3 className={classes.availableSizes}>
                    {product.availableSizes.map((size) => (
                      <Grid container spacing={2} justify="center">
                        <Grid item>{size}</Grid>
                      </Grid>
                    ))}
                  </h3>
                  <div className={classes.heroButtons}>
                    <Grid
                      container
                      spacing={2}
                      justify="center"
                      style={{ marginBottom: "10px" }}
                    >
                      <Grid item>
                        <Button variant="contained" color="primary">
                          Main call to action
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button variant="outlined" color="primary">
                          Secondary action
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                  <Typography variant="body1" component="h2" gutterBottom>
                    {product.description} {product.description}{" "}
                    {product.description} {product.description}
                  </Typography>
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
