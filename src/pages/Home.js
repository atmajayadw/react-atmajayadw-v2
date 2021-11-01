import React, { Component } from "react";
import {
  Navbar,
  Jumbotron,
  About,
  Expertise,
  PortfolioHome,
} from "../components/index";

export default class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Jumbotron />
        <About />
        <Expertise />
        <PortfolioHome />
      </>
    );
  }
}
