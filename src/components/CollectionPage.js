import React, { Fragment, useState, useEffect } from "react";
import "../styles/App.css";
import axios from "axios";
import ProductItem from "./ProductItem";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useAppContext } from "../context";

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
  collectionTitle: {
    textTransform: "capitalize",
    fontWeight: "bolder",
  },
}));

const CollectionPage = ({ match }) => {
  const classes = useStyles();

  const {
    collectionItems: [collectionItems, setCollectionItems],
  } = useAppContext();

  
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const url = `https://5m6exoj3o7.execute-api.eu-west-1.amazonaws.com/prod/items?collection=${match.params.id}&tag=sports`;

  useEffect(() => {
    const fetchCollectionItems = async () => {
      setIsError(false);
      setIsEmpty(false);
      setIsLoading(true);

      try {
        const result = await axios(url);

        if (result.data.length === 0) setIsEmpty(true);

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
      {isError && <div>Something went wrong ... Please reload the page</div>}

      {/* {isLoading ? (
        <div>Getting your favorite apparel...</div>
      ) : ( */}
      <div>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              className={classes.collectionTitle}
              component="h4"
              variant="h3"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Collection: {match.params.id}
            </Typography>
            {isEmpty && (
              <div>
                <Typography
                  style={{ fontWeight: "bolder" }}
                  variant="h5"
                  align="center"
                  color="textSecondary"
                  paragraph
                >
                  <Typography>
                    <hr></hr>
                  </Typography>
                  No items at the moment ... Check back next year :p{" "}
                </Typography>
                <Typography>
                  <hr></hr>
                </Typography>
              </div>
            )}
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
            {collectionItems.map((item) => (
              <ProductItem
                name={item.displayName}
                description={item.description}
                originalPrice={item.originalPrice}
                currentPrice={item.currentPrice}
                image={item.picture}
                id={item.itemId}
                catId={item.categoryId}
                sizes={item.availableSizes}
              />
            ))}
          </Grid>
        </Container>
      </div>
      {/* )} */}
    </Fragment>
  );
};

export default CollectionPage;
