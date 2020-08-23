import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavbarContainer from "./Container/NavbarContainer";
import SignUpPage from "./Container/SignUpPage";
import ProductListPage from "./Container/ProductListPage";
import CheckoutPage from "./Container/CheckoutPage";

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarContainer />
        <div>
          <Route exact path="/" component={SignUpPage} />
          <Route exact path="/products" component={ProductListPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
        </div>
      </Router>
    </div>
  );
}

export default App;
