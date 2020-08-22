import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavbarContainer from "./Container/NavbarContainer";
import BaseRouter from "./Routes";

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarContainer />
        <BaseRouter />
      </Router>
    </div>
  );
}

export default App;
