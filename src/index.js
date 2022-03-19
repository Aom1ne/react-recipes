import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/react-recipes">
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
