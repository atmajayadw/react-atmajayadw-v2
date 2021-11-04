import React, { Component } from "react";
import { Navbar, Contact, Content } from "../components/index";
export default class Portfolio extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Content />
        <Contact />
      </>
    );
  }
}
