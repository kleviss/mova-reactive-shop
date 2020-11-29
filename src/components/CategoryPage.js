import React, { Fragment, useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  categoryTitle: {
    textTransform: "capitalize",
    fontWeight: "bolder"
  },
}));

const CategoryPage = ({ match }) => {
  const classes = useStyles();

  const [categoryItems, setCategoryItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const url = `https://5m6exoj3o7.execute-api.eu-west-1.amazonaws.com/prod/items?category=${match.params.id}&tag=sports`;

  useEffect(() => {
    const fetchCategoryItems = async () => {
      setIsError(false);
      setIsEmpty(false);
      setIsLoading(true);

      try {
        const result = await axios(url);

        if (result.data.length === 0) setIsEmpty(true);

        setCategoryItems(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchCategoryItems();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      {isError && <div>Something went wrong ... Please reload the page</div>}
      {isEmpty && <div>No items at the moment ... Check back next year :p</div>}

      {isLoading ? (
        <div>Getting your favorite apparel...</div>
      ) : (
        <div>
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography
                className={classes.categoryTitle}
                component="h4"
                variant="h3"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Category: {match.params.id}
              </Typography>
              <Typography
                variant="h6"
                align="center"
                color="textSecondary"
                paragraph
              >
                Something short and leading about the collection below—its
                contents, the creator, etc. Make it short and sweet, but not too
                short so folks don&apos;t simply skip over it entirely.
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
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
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid className={classes.tagItem} container spacing={1}>
              {categoryItems.map((item) => (
                <ProductItem
                  name={item.displayName}
                  description={item.description}
                  price={item.originalPrice}
                  image={item.picture}
                  id={item.itemId}
                  catId={item.categoryId}
                  sizes={item.availableSizes}
                />
              ))}
            </Grid>
          </Container>
        </div>
      )}
    </Fragment>
  );
};

export default CategoryPage;
