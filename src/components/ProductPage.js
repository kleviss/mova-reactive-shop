import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import axios from "axios";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import PriceTag from "./PriceTag";
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: "98%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const ProductPage = ({ match }) => {
  const classes = useStyles();

  console.log(match);

  const [productItem, setProductItem] = useState([]);
  const [size, setSize] = useState("");
  const [qty, setQty] = useState("");

  const url = `https://5m6exoj3o7.execute-api.eu-west-1.amazonaws.com/prod/items/${match.params.id}`;

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleQtyChange = (event) => {
    setQty(event.target.value);
  };

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
  }, [match.params.id, url]);

  console.log(productItem.picture);

  let images = [
    {
      name: `${productItem.displayName}`,
      description: `${productItem.description}`,
      image: `${productItem.picture}`,
    },

    {
      name: `${productItem.displayName}`,
      description: `${productItem.description}`,
      image: `${productItem.picture}`,
    },
  ];

  let quantity = ["1", "2", "3", "4", "5"];
  console.log(images);
  console.log(productItem.availableSizes);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container fixed style={{ marginTop: "10px" }}>
        <Grid container spacing={3}>
          <Grid item lg={6} md sm={12} xs={12}>
            <Paper className={classes.paper}>
              <div>
                <Carousel animation="fade" autoPlay={false}>
                  {images.map((item) => (
                    <img
                      style={{ width: "100%" }}
                      src={item.image}
                      alt="Product"
                    />
                  ))}
                </Carousel>
              </div>
            </Paper>
          </Grid>
          <Grid item lg={6} md sm={12} xs={12}>
            <Paper className={classes.paper}>
              <div>
                <Typography variant="button" display="block">
                  {productItem.collectionId}
                  {" >"} {productItem.tags}
                </Typography>
                <Typography variant="h4" gutterBottom>
                  {productItem.displayName}
                </Typography>

                <PriceTag
                  originalPrice={productItem.originalPrice}
                  currentPrice={productItem.currentPrice}
                />
                <Typography variant="body1" component="h2" gutterBottom>
                  {productItem.description}
                </Typography>
                <Grid container spacing={2} justify="left">
                  {/* Provide a check for undefined data and then render
                      the component because initially no data but it is available in the
                      second render. */}
                  <Grid item>
                    <FormControl required className={classes.formControl}>
                      <InputLabel id="select-size-label">
                        Size
                      </InputLabel>
                      <Select
                        labelId="select-size-label"
                        id="select-size-label"
                        value={size}
                        onChange={handleSizeChange}
                        className={classes.selectEmpty}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        {productItem.availableSizes &&
                          productItem.availableSizes.map((size) => (
                            <MenuItem value={size}>{size}</MenuItem>
                          ))}
                      </Select>
                      <FormHelperText>Please select size</FormHelperText>
                    </FormControl>

                    <FormControl required className={classes.formControl}>
                      <InputLabel id="select-quantity-label">
                        Quantity
                      </InputLabel>
                      <Select
                        labelId="select-quantity-label"
                        id="select-quantity-label"
                        value={qty}
                        onChange={handleQtyChange}
                        className={classes.selectEmpty}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        {quantity &&
                          quantity.map((qty) => (
                            <MenuItem value={qty}>{qty}</MenuItem>
                          ))}
                      </Select>
                      <FormHelperText>Please select quantity</FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid item></Grid>
                </Grid>
                <div className={classes.heroButtons}>
                  <Grid
                    container
                    spacing={3}
                    justify="left"
                    style={{ marginBottom: "10px" }}
                  >
                    <Grid item>
                      <Button variant="contained" color="primary">
                        Add to Cart
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button variant="outlined" color="primary">
                        Shop other Item
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ProductPage;
