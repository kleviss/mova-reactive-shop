import React, { Fragment, useState, useEffect } from "react";
import TagItem from "./TagItem.js";
import ProductItem from "./ProductItem.js";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import Chip from "@material-ui/core/Chip";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import { makeStyles } from "@material-ui/core/styles";
import { useAppContext } from "../context";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "1rem",
    marginRight: "1rem",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  rootTitle: {
    marginLeft: "1rem",
    flexGrow: 1,
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  tagItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spacing(0.5),
  },
}));

const ProductList = () => {
  const classes = useStyles();

  // const [products, setProducts] = useState([]);
  // const [tags, setTags] = useState([]);

  const {
    products: [products, setProducts],
  } = useAppContext();

  const {
    tags: [tags, setTags],
  } = useAppContext();

  const [tagValue, setTagValue] = useState([]);
  // eslint-disable-next-line no-unused-vars
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tagValue]);

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tags_url]);

  return (
    <Fragment>
      {isError && <div>Something went wrong ... Please reload the page</div>}

      <div className={classes.rootTitle}>
        <h1>Tags</h1>
        <Grid container spacing={1}>
          <Grid item xs={5} sm={3} md={2} lg={1}>
            <Chip
              className={classes.tagItem}
              icon={<AllInclusiveIcon />}
              label="All Products"
              clickable
              color="secondary"
              onClick={(event) => handleClick("")}
              value=""
            />
          </Grid>
          {tags.map((tag) => (
            <TagItem name={tag.tag} handleClick={handleClick} />
          ))}
        </Grid>
      </div>

      {/* {isLoading ? (
        <div className={classes.rootTitle}>
          <h1>Products</h1>
          <div>Getting products...</div>
        </div>
      ) : ( */}
        <div className={classes.root}>
          <h1 className={classes.rootTitle}>Products</h1>
          <Grid className={classes.tagItem} container spacing={1}>
            {products.map((product) => (
              <ProductItem
                name={product.displayName}
                description={product.description}
                originalPrice={product.originalPrice}
                currentPrice={product.currentPrice}
                image={product.picture}
                id={product.itemId}
                catId={product.categoryId}
                sizes={product.availableSizes}
              />
            ))}
          </Grid>
        </div>
      {/* )} */}
    </Fragment>
  );
};

export default ProductList;
