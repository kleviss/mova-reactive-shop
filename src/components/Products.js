import React, { Fragment, useState, useEffect } from "react";
import TagItem from "./TagItem.js";
import ProductItem from "./ProductItem.js";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
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
  const tags_url = `https://5m6exoj3o7.execute-api.eu-west-1.amazonaws.com/prod/tags`;

  const handleClick = (val) => {
    console.info(`You have clicked ${val} from TagItem component`);
    setTagValue(val);
  };

  useEffect(() => {
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
    fetchProducts();
  }, [products_url, tagValue]);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const result = await axios(tags_url);
        setTags(result.data);
      } catch (error) {
        setIsError(true);
      }
    };
    fetchTags();
  }, []);

  return (
    <Fragment>
      {isError && <div>Something went wrong ... Please reload the page</div>}

      <div className={classes.root}>
        <h1>Tags</h1>
        <Grid className={classes.tagItem} container spacing={1}>
          {tags.map((tag) => (
            <TagItem name={tag.tag} handleClick={handleClick} />
          ))}
        </Grid>
      </div>

      {isLoading ? (
        <div className={classes.root}>
          <h1>Products</h1>
          <div>Getting products...</div>
        </div>
      ) : (
        <div className={classes.root}>
          <h1>Products</h1>
          <Grid container spacing={2}>
            {products.map((product) => (
              <Grid item xs sm={3} md={2} lg={1} key={product.displayName}>
                <ProductItem />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </Fragment>
  );
};

export default ProductList;