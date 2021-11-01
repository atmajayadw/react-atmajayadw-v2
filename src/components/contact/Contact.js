import React, { Component } from "react";
import {
  Memphis4,
  Twitter,
  Facebook,
  Instagram,
} from "../../assets/icon/icons.js";

export default class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="container contact">
          <div className="row">
            <div className="col-md-8">
              <h3>Get in touch</h3>
              <p>
                Have an inquiry or some feedback for me ? <br />
                Please send email to atmajaya.dw@gmail.com
              </p>
            </div>
            <div className="col-md-4">
              <img src={Memphis4} alt="" className="img-fluid" />
            </div>
          </div>

          <div className="socmed">
            <a
              href="https://www.facebook.com/adew36"
              target="_blank"
              rel="noopenner noreferrer"
            >
              <img src={Facebook} alt="" className="img-fluid" />
            </a>
            <a
              href="https://www.tiktok.com/@rubyjade__"
              target="_blank"
              rel="noopenner noreferrer"
            >
              <img src={Twitter} alt="" className="img-fluid" />
            </a>
            <a
              href="https://www.instagram.com/atmajaya.dw/"
              target="_blank"
              rel="noopenner noreferrer"
            >
              <img src={Instagram} alt="" className="img-fluid" />
            </a>
          </div>
        </div>
      </section>
    );
  }
}
