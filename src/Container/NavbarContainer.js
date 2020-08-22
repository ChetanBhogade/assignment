import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core"

function NavbarContainer() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flex: 1 }}>
            Chetan Bhogade
          </Typography>
          <Button color="inherit">Signup</Button>
          <Button color="inherit">Product List</Button>
          <Button color="inherit">Checkout Page</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavbarContainer;
