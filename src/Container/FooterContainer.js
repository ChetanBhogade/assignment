import React from "react";
import { Container, Typography, Link } from "@material-ui/core";

function FooterContainer() {
  return (
    <div
      style={{
        marginTop: 20,
        paddingBottom: 20,
        backgroundColor: "#ecf0f1",
        paddingTop: 10,
      }}
    >
      {/* <hr /> */}
      <Container maxWidth="lg">
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Design And Developed By -{" "}
          <Link
            color="inherit"
            rel="noopener noreferrer"
            target="_blank"
            href="https://chetanbhogade.github.io/portfolio/"
          >
            Chetan Bhogade
          </Link>
        </Typography>
      </Container>
    </div>
  );
}

export default FooterContainer;
