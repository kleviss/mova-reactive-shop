import React, { Fragment, useState, useEffect } from "react";
import CategoryItem from "./CategoryItem";
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

const Categories = () => {
  const classes = useStyles();

  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const url = `https://5m6exoj3o7.execute-api.eu-west-1.amazonaws.com/prod/categories`;

  useEffect(() => {
    const fetchCategories = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);

        setCategories(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);

      console.log("Categories:");
      console.log(categories);
    };

    fetchCategories();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      {isError && <div>Something went wrong ... Please reload the page</div>}

      {isLoading ? (
        <div>Getting your favorite apparel...</div>
      ) : (
        <div className={classes.root}>
          <h1>Categories</h1>
          <Grid container spacing={2}>
            {categories.map((category) => (
              <CategoryItem
                name={category.displayName}
                catId={category.categoryId}
                pId={category.parentId}
              />
            ))}
          </Grid>
        </div>
      )}


    </Fragment>
  );
};

export default Categories;
