import React, { Component } from "react";
import { Navbar, Jumbotron } from "../components/home/index";
import About from "../components/about/About";

export default class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Jumbotron />
        <About />
      </>
    );
  }
}
