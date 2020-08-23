import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import "./NavbarContainer.css";

function NavbarContainer() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">
            <Link to="/" className="myLink">Signup</Link>
          </Button>
          <Button color="inherit">
            <Link to="/products" className="myLink">Product List</Link>
          </Button>
          <Button color="inherit">
            <Link to="/checkout" className="myLink">Checkout Page</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavbarContainer;
