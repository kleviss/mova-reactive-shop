import React, { Fragment, useState, useEffect } from "react";
import "../styles/App.css";
import axios from "axios";
import ProductItem from "./ProductItem";
import Grid from "@material-ui/core/Grid";
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
  rootProduct: {
    flexGrow: 1,
    margin: "1%",
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

const CollectionPage = ({ match }) => {
  const classes = useStyles();

  const [collectionItems, setCollectionItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const url = `https://5m6exoj3o7.execute-api.eu-west-1.amazonaws.com/prod/items?collection=${match.params.id}&tag=sports`;

  useEffect(() => {
    const fetchCollectionItems = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);

        setCollectionItems(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchCollectionItems();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <h1>Collection: {match.params.id}</h1>
      {isError && <div>Something went wrong ... Please reload the page</div>}

      {isLoading ? (
        <div>Getting your favorite apparel...</div>
      ) : (
        <div>
          {" "}
          <Grid className={classes.tagItem} container spacing={1}>
            {collectionItems.map((item) => (
              <ProductItem
                name={item.displayName}
                description={item.description}
                price={item.originalPrice}
                image={item.picture}
                id={item.itemId}
                catId={item.categoryId}
              />
            ))}
          </Grid>
        </div>
      )}
    </Fragment>
  );
};

export default CollectionPage;
