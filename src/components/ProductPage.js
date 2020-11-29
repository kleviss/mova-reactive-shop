import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    border: "2px solid black",
  },
}));

export default function ProductPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item lg={6} md sm={12} xs={12}>
            <Paper className={classes.paper}></Paper>
          </Grid>
          <Grid item lg={6} md sm={12} xs={12}>
            <Paper className={classes.paper}></Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
