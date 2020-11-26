import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppBar from "../components/AppBar";
import CollectionPage from "../components/CollectionPage";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Home from "./Home";

export default function App() {
  return (
    <Router>
      <React.Fragment>
        <CssBaseline />
        <Container disableGutters={true} maxWidth={false}>
          <AppBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/collection/:id" component={CollectionPage} />
          </Switch>
        </Container>
      </React.Fragment>
    </Router>
  );
}
