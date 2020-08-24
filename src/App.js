import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavbarContainer from "./Container/NavbarContainer";
import SignUpPage from "./Container/SignUpPage";
import ProductListPage from "./Container/ProductListPage";
import CheckoutPage from "./Container/CheckoutPage";
import FooterContainer from "./Container/FooterContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarContainer />
        <div>
          <Route exact path="/assignment" component={SignUpPage} />
          <Route exact path="/products" component={ProductListPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
        </div>
        <FooterContainer />
      </Router>
    </div>
  );
}

export default App;
