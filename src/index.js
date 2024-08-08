import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/reset.css"; // Import Ant Design styles by default
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Router";
// import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

