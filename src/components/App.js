import React from "react";
import AppBar from "../components/AppBar";
import Collections from "../components/Collections";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container disableGutters={true} maxWidth={false}>
        <AppBar />
        <Collections />
      </Container>
    </React.Fragment>
  );
}
