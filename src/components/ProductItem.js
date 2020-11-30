import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import PriceTag from "./PriceTag";

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
    minHeight: "100%",
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
  linkStyle: {
    textDecoration: "none",
  },
}));

const ProductItem = ({ name, description, originalPrice, currentPrice, image, id, catId, sizes }) => {
  const classes = useStyles();

  return (
    <Fragment key={id}>
      <Grid item key={id} xs={12} sm={6} md={4} lg={3}>
        <Link className={classes.linkStyle} key={name} to={`/item/${id}`}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={image}
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

              <Typography gutterBottom color="secondary">
                {sizes.map((size) => size + " ")}
              </Typography>
              <PriceTag originalPrice={originalPrice} currentPrice={currentPrice} />
            </CardContent>
          </Card>
        </Link>
      </Grid>
    </Fragment>
  );
};

export default ProductItem;
