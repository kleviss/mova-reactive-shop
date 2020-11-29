import React, { Fragment, useState, useEffect } from "react";
import CollectionItem from "./CollectionItem";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: "1rem",
    marginRight: "1rem",
  },
}));

const Collections = () => {
  const classes = useStyles();

  const [collections, setCollections] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const url = `https://5m6exoj3o7.execute-api.eu-west-1.amazonaws.com/prod/collections`;

  useEffect(() => {
    const fetchCollections = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);

        setCollections(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchCollections();
    console.log("Collections:");
    console.log(collections);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      {isError && <div>Something went wrong ... Please reload the page</div>}

      {isLoading ? (
        <div>Getting your favorite apparel...</div>
      ) : (
        <div className={classes.root}>
          <h1>Collections</h1>
          <Grid container spacing={4}>
            {collections.map((tile) => (
              <CollectionItem name={tile.displayName} id={tile.collectionId} />
            ))}
          </Grid>
        </div>
      )}
    </Fragment>
  );
};

export default Collections;
