import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "pages/App";
import Login from "pages/login";
import NotFound from "pages/NotFound";
import Cart from "pages/Cart";

const Routerc = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/login" component={Login} />
      <Route path="/cart" component={Cart} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routerc;