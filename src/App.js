import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavbarContainer from "./Container/NavbarContainer";
import SignUpPage from "./Container/SignUpPage";
import ProductListPage from "./Container/ProductListPage";
import CheckoutPage from "./Container/CheckoutPage";
import FooterContainer from "./Container/FooterContainer";
import { auth } from "./Config";

import "bootstrap/dist/css/bootstrap.min.css";
import SignInPage from "./Container/SignInPage";
import VideoConference from "./Container/VideoConference";
import QRCodeGenerator from "./Container/QRCodeGenerator";
import SpacingTag from "./Container/SpacingTag";
import SatyamContainer from "./Container/SatyamContainer";

function App() {
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

  return (
    <div className="App">
      <Router>
        <NavbarContainer />
        {authUser ? (
          <div>
            <Route exact path="/products" component={ProductListPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
          </div>
        ) : (
          <div>
            <Route exact path="/assignment" component={SignUpPage} />
            <Route exact path="/assignment/signin" component={SignInPage} />
            <Route exact path="/assignment/video" component={VideoConference} />
            <Route exact path="/assignment/qr-code" component={QRCodeGenerator} />
            <Route exact path="/assignment/space" component={SpacingTag} />
            <Route exact path="/assignment/satyam" component={SatyamContainer} />

          </div>
        )}
        <FooterContainer />
      </Router>
    </div>
  );
}

export default App;
