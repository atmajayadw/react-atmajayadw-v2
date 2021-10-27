import React, { Component } from "react";
import { Profile1 } from "../../assets/image/images.js";

export default class Jumbotron extends Component {
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
                    Explore
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
