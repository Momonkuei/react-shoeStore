import React from "react";
import ReactDOM from "react-dom";
import Routerc from "Routerc";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "css/app.scss";

ReactDOM.render(
  <div>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    <Routerc />
  </div>,
  document.getElementById("root")
);
