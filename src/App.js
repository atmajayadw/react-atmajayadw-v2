import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home.js";
import Portfolio from "./pages/Portfolio.js";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/portfolio" component={Portfolio} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}
