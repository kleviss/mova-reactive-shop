import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  categoryLabel: {
    textTransform: "capitalize",
  },
  productItem: {
    display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    margin: theme.spacing(0.5),
  },
  actionArea: {
    width: "100%",
  },
  priceTag: {
    fontSize: "16px",
  },
  icon: {
    marginRight: theme.spacing(2),
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
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "70.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5];

const ProductItem = ({ name, description, price, image, id, catId, sizes }) => {
  const classes = useStyles();

  return (
    <Fragment key={id}>
      {cards.map((card) => (
        <Grid item key={id} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image="https://source.unsplash.com/random"
              title={name}
            />
            <CardContent className={classes.cardContent}>
              <Typography
                className={classes.categoryLabel}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {catId}
              </Typography>
              <Typography gutterBottom variant="h6" component="h2">
                {name}
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {description}
              </Typography>
              <Typography gutterBottom color="secondary">
                {sizes.map((size) => size + " ")}
              </Typography>
              <Typography variant="h6" component="h2">
                €49.99
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Fragment>
  );
};

export default ProductItem;
