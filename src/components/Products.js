import React, { Fragment, useState, useEffect } from "react";
import TagItem from "./TagItem.js";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import DoneIcon from "@material-ui/icons/Done";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "1rem",
    marginLeft: "1rem",
    marginRight: "1rem",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  tagItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
  },
}));

const ProductList = () => {
  const classes = useStyles();

  const [products, setProducts] = useState([]);
  const [tags, setTags] = useState([]);
  const [tagValue, setTagValue] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const products_url = `https://5m6exoj3o7.execute-api.eu-west-1.amazonaws.com/prod/items?tag=${tagValue}`;
  console.log("Product Url initial");
  console.log(products_url);
  const tags_url = `https://5m6exoj3o7.execute-api.eu-west-1.amazonaws.com/prod/tags`;

  const handleClick = (val) => {
    console.info(`You have clicked ${val} from TagItem component`);
    setTagValue(val);
  };

  const handleDelete = (tagValue) => {
    console.info(`You have clicked ${tagValue} from TagItem component`);
  };

  const fetchProducts = async () => {
    setIsError(false);
    setIsLoading(true);

    try {
      const result = await axios(products_url);
      setProducts(result.data);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  const fetchTags = async () => {
    try {
      const result = await axios(tags_url);
      console.log();
      setTags(result.data);
    } catch (error) {
      setIsError(true);
    }
  };
  console.log("Product Url outside useEffect");
  console.log(products_url);

  useEffect(() => {
    console.log("useEffect run cuz tag is clicked");
    console.log("Product Url afterTagClick");
    console.log(products_url);
    fetchProducts();
  }, [tagValue]);

  useEffect(() => {
    fetchTags();
  }, []);

  return (
    <Fragment>
      {isError && <div>Something went wrong ... Please reload the page</div>}

      {isLoading ? (
        <div>Getting products...</div>
      ) : (
        <div className={classes.root}>
          <h1>Tags</h1>
          <Grid className={classes.tagItem} container spacing={1}>
            {tags.map((tag) => (
              <TagItem
                name={tag.tag}
                handleClick={handleClick}
                handleDelete={handleDelete}
              />
            ))}
          </Grid>
        </div>
      )}

      {isLoading ? (
        <div>Getting products...</div>
      ) : (
        <div className={classes.root}>
          <h1>Products</h1>
          <Grid container spacing={2}>
            {products.map((product) => (
              <Grid item xs sm={3} md={2} lg={1} key={product.displayName}>
                <button>{product.displayName}</button>
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </Fragment>
  );
};

export default ProductList;
