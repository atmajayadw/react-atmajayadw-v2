import React, { Component } from "react";
import { Navbar, Jumbotron } from "../components/home/index";

export default class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Jumbotron />
      </>
    );
  }
}
