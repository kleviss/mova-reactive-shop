import React, { Fragment, useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import DoneIcon from "@material-ui/icons/Done";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: "1rem",
    marginRight: "1rem",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  tagItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete Chip.");
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
      setTags(result.data);
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchProducts();
    console.log(tagValue);
  }, [tagValue]);

  useEffect(() => {
    fetchTags();
  }, []);

  return (
    <Fragment>
      {isError && <div>Something went wrong ... Please reload the page</div>}

      {isLoading ? (
        <div>Getting tags...</div>
      ) : (
        <div className={classes.root}>
          <h1>Tags</h1>
          <Grid container spacing={2}>
            {tags.map((tag) => (
              <Grid item xs sm={3} md={2} lg={1}>
                <Chip
                  className={classes.tagItem}
                  icon={<FaceIcon />}
                  label={tag.tag}
                  clickable
                  color="primary"
                  onClick={handleClick}
                  onDelete={handleDelete}
                  deleteIcon={<DoneIcon />}
                />
              </Grid>
            ))}
            <div className={classes.root}>
              <h1>Product List</h1>
              <Grid container spacing={2}>
                {products.map((product) => (
                  <Grid item xs sm={3} md={2} lg={1}>
                    <a>{product.displayName}</a>
                  </Grid>
                ))}
              </Grid>
            </div>
          </Grid>
        </div>
      )}
    </Fragment>
  );
};

export default ProductList;
