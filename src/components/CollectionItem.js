import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 200,
  },
  media: {
    height: 100,
  },
  collectionLink: {
    textDecoration: "none",
    color: "black",
  },
  collectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

const CollectionItem = ({ name, id }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid item xs={6} sm={4} md={2} lg={2}>
        <Card className={classes.root}>
          <CardActionArea>
            <Link
              className={classes.collectionLink}
              key={name}
              to={`/collection/${id}`}
            >
              <CardMedia
                className={classes.media}
                image="https://images.pexels.com/photos/356808/pexels-photo-356808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                title={name}
              />

              <Typography
                className={classes.collectionTitle}
                gutterBottom
                variant="div"
                component="p"
              >
                {name}
              </Typography>
            </Link>
          </CardActionArea>
        </Card>
      </Grid>
    </Fragment>
  );
};

export default CollectionItem;
