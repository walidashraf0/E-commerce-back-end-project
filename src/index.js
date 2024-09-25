import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./Css/components/button.css";
import "./Css/components/loading.css";
import "./Css/components/error.css";
import "./Pages/Auth/auth.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);