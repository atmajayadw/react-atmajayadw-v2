import React, { Component } from "react";
import {
  Navbar,
  Jumbotron,
  About,
  Expertise,
  PortfolioHome,
  Contact,
} from "../components/index";
import $ from "jquery";

export default class Home extends Component {
  componentDidMount() {
    this.getParams();
  }
  getParams = () => {
    const params = this.props.location.params;
    if (params === "") {
      window.scrollTo(0, 0);
    } else if (params) {
      const elementhref = $(params);
      if (elementhref.length) {
        $("html, body").animate(
          {
            scrollTop: elementhref.offset().top - 40,
          },
          1000,
          "easeInOutExpo"
        );
      }
    }
  };
  render() {
    return (
      <>
        <Navbar />
        <Jumbotron />
        <About />
        <Expertise />
        <PortfolioHome />
        <Contact />
      </>
    );
  }
}
