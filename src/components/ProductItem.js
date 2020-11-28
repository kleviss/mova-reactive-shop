import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    maxWidth: "97%",
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
}));

const ProductItem = ({ name, description, price, image, id, catId }) => {
  const classes = useStyles();

  return (
    <Fragment key={id}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.root}>
          <CardActionArea className={classes.actionArea}>
            <CardMedia
              component="img"
              alt={name}
              height="300"
              image={image}
              title={name}
            />
            <CardContent>
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
              <Typography variant="h6" component="h2">
                €{price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.root}>
          <CardActionArea className={classes.actionArea}>
            <CardMedia
              component="img"
              alt={name}
              height="300"
              image={image}
              title={name}
            />
            <CardContent>
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
              <Typography variant="h6" component="h2">
                €{price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.root}>
          <CardActionArea className={classes.actionArea}>
            <CardMedia
              component="img"
              alt={name}
              height="300"
              image={image}
              title={name}
            />
            <CardContent>
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
              <Typography variant="h6" component="h2">
                €{price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.root}>
          <CardActionArea className={classes.actionArea}>
            <CardMedia
              component="img"
              alt={name}
              height="300"
              image={image}
              title={name}
            />
            <CardContent>
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
              <Typography variant="h6" component="h2">
                €{price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Fragment>
  );
};

export default ProductItem;
