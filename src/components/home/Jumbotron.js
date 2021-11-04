import React, { Component } from "react";
import { Profile1 } from "../../assets/image/images.js";
import $ from "jquery";

export default class Jumbotron extends Component {
  componentDidMount() {
    this.explore();
  }
  explore = () => {
    $(".btn-explore").on("click", function (e) {
      // document.body.style.overflow = "hidden";
      const href = $(this).attr("href");
      const elementhref = $(href);
      $("html, body").animate(
        {
          scrollTop: elementhref.offset().top - 80,
        },
        1000,
        "easeInOutExpo"
      );
      document.body.style.overflow = "auto";
      e.preventDefault();
    });
  };

  render() {
    return (
      <section id="jumbotron">
        <div className="container-fluid jumbo">
          <div className="container">
            <div className="row">
              <div className="col-md jumbo-left">
                <p>
                  Hello, i'm <b>Jay</b>
                </p>
                <p>
                  Web Developer
                  <br /> {"&"} Photographer
                </p>
                <div className="buttons">
                  <div className="btn btn-explore" href="#about">
                    <span>Explore</span>
                  </div>
                  <div className="btn btn-resume" href="#">
                    Resume
                  </div>
                </div>
              </div>
              <div className="col-md jumbo-right">
                <img src={Profile1} alt="profile" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
