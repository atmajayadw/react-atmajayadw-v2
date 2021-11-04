import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home.js";
import Portfolio from "./pages/Portfolio.js";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route
            exact
            path="/portfolio"
            render={(props) => <Portfolio {...props} />}
          />
          {/* <Route path="/portfolio" component={Portfolio} exact /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}
