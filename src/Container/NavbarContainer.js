import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { auth } from "../Config";

import "./NavbarContainer.css";

function NavbarContainer(props) {
  const [authUser, setAuthUser] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
  }, []);

  const logoutUser = () => {
    auth
      .signOut()
      .then(() => {
        console.log("User logged out.");
        props.history.push("/assignment/signin")
      })
      .catch((error) => {
        alert("Error: ", error.message);
      });
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          {authUser ? (
            <div>
              <Button color="inherit">
                <Link to="/products" className="myLink">
                  Product List
                </Link>
              </Button>
              <Button color="inherit">
                <Link to="/checkout" className="myLink">
                  Checkout Page
                </Link>
              </Button>
              <Button color="inherit">
                <Link
                  to="/assignment/signin"
                  onClick={() => {
                    logoutUser();
                  }}
                  className="myLink"
                >
                  Logout
                </Link>
              </Button>
            </div>
          ) : (
            <div>
              <Button color="inherit">
                <Link to="/assignment" className="myLink">
                  Signup
                </Link>
              </Button>
              <Button color="inherit">
                <Link to="/assignment/signin" className="myLink">
                  Sign In
                </Link>
              </Button>
              <Button color="inherit">
                <Link to="/assignment/video" className="myLink">
                  Video Call
                </Link>
              </Button>
              <Button color="inherit">
                <Link to="/assignment/qr-code" className="myLink">
                  QR Code
                </Link>
              </Button>
              <Button color="inherit">
                <Link to="/assignment/space" className="myLink">
                  Spacing
                </Link>
              </Button>
              <Button color="inherit">
                <Link to="/assignment/satyam" className="myLink">
                  Satyam
                </Link>
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavbarContainer;
