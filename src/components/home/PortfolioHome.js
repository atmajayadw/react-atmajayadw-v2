import React, { Component } from "react";
import {
  Porto1,
  Porto2,
  Porto3,
  Porto7,
  Porto5,
  Porto6,
  Thumbnail1,
  Thumbnail2,
  Thumbnail3,
  Thumbnail4,
  Thumbnail5,
} from "../../assets/image/images.js";
import $ from "jquery";
import { Memphis3 } from "../../assets/icon/icons.js";
import { Link } from "react-router-dom";

export default class PortfolioHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slideIndex: 2,
    };
  }

  componentDidMount() {
    this.showSlides(this.state.slideIndex);
    this.showPortfolio1();
    this.showPortfolio2();
    this.parallaxMouse();
    window.addEventListener("scroll", this.parallaxScroll);
  }

  currentSlide = (n) => {
    this.setState({ slideIndex: n }, () =>
      this.showSlides(this.state.slideIndex)
    );
  };

  showSlides = (n) => {
    const slides = document.getElementsByClassName("portfolio-contents");
    const thumbs = document.getElementsByClassName("portfolio-btn");

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < thumbs.length; i++) {
      thumbs[i].className = thumbs[i].className.replace(" active", "");
    }
    slides[this.state.slideIndex - 1].style.display = "flex";
    thumbs[this.state.slideIndex - 1].className += " active";
  };

  showPortfolio1 = () => {
    $(".portfolio-btn.webdev-btn").on("click", function (e) {
      $(".content-webdev").each(function (i) {
        setTimeout(function () {
          $(".content-webdev").eq(i).addClass("show");
        }, 300 * (i + 1));
      });
      $(".content-webdev").removeClass("show");
    });
  };

  showPortfolio2 = () => {
    $(".portfolio-btn.photo-btn").on("click", function (e) {
      $(".content-photo").each(function (i) {
        setTimeout(function () {
          $(".content-photo").eq(i).addClass("show");
        }, 300 * (i + 1));
      });
      $(".content-photo").removeClass("show");
    });
  };

  parallaxMouse = () => {
    let object3 = $(".memphis3");
    let object4 = $(".memphis4");
    let layer2 = $("body");

    layer2.mousemove(function (e) {
      if ($(window).width() >= 575.98) {
        var valueX = (window.innerWidth - e.pageX * 4) / 200;
        var valueY = (window.innerWidth - e.pageY * 2) / 200;
        object3.css({
          transition: "0.1s",
          transform: "translate(" + valueX + "%," + valueY + "px)",
        });
      }
    });

    layer2.mousemove(function (e) {
      if ($(window).width() >= 575.98) {
        var valueX = -(window.innerWidth - e.pageX * 4) / 200;
        var valueY = -(window.innerWidth - e.pageY * 2) / 200;
        object4.css({
          transition: "0.1s",
          transform: "translate(" + valueX + "%," + valueY + "px)",
        });
      }
    });
  };

  parallaxScroll = () => {
    let wScroll = $(window).scrollTop();

    if ($("#expertise").length) {
      if (wScroll > $("#expertise").offset().top + 200) {
        if ($(window).width() <= 575.98) {
          $(".memphis3").css({
            transform: "translate(-" + wScroll / 90 + "%, 0px)",
            "-webkit-transform": "translate(-" + wScroll / 90 + "%, 0px)",
          });

          $(".memphis4").css({
            transform: "translate(" + wScroll / 220 + "%, 10px)",
            "-webkit-transform": "translate(" + wScroll / 220 + "%, 10px)",
          });
        }
      }
    }
  };

  render() {
    return (
      <section id="portfolio-home">
        <div className="container portfolio">
          <img src={Memphis3} alt="" className="img-fluid memphis3" />
          <img src={Memphis3} alt="" className="img-fluid memphis4" />
          <div className="head">
            <h3>My Portfolio as</h3>
            <div className="buttons">
              <p
                className="portfolio-btn webdev-btn"
                onClick={() => this.currentSlide(1)}
              >
                Web Developer
              </p>
              <p
                className="portfolio-btn photo-btn"
                onClick={() => this.currentSlide(2)}
              >
                Photographer
              </p>
            </div>
          </div>

          <div className="portfolio-contents">
            <div className="content-webdev">
              <img src={Porto1} alt="porto1" className="img-fluid" />
              <a
                href="https://project1.atmajayadw.com/"
                target="_blank"
                rel="noopenner noreferrer"
              >
                <span>
                  SMA Yaspen Tugu Ibu
                  <br /> ({"+"} Admin, CRUD, REST API)
                </span>
              </a>
            </div>
            <div className="content-webdev">
              <img src={Porto5} alt="porto5" className="img-fluid" />
              <a
                href="https://empathiephoto.com/"
                target="_blank"
                rel="noopenner noreferrer"
              >
                <span>
                  Empathie.photo
                  <br /> ({"+"} Admin, CRUD, REST API)
                </span>
              </a>
            </div>
            <div className="content-webdev">
              <img src={Porto6} alt="porto6" className="img-fluid" />
              <a
                href="https://atmajayadw.com/"
                target="_blank"
                rel="noopenner noreferrer"
              >
                <span>Personal Website</span>
              </a>
            </div>
            <div className="content-webdev">
              <img src={Porto7} alt="porto4" className="img-fluid" />
              <a
                href="https://project5.atmajayadw.site/"
                target="_blank"
                rel="noopenner noreferrer"
              >
                <span>Place Together - Designed by inkyy</span>
              </a>
            </div>
            <div className="content-webdev">
              <img src={Porto2} alt="porto2" className="img-fluid" />
              <a
                href="https://project2.atmajayadw.site/"
                target="_blank"
                rel="noopenner noreferrer"
              >
                <span>Web UI Expert - Designed by Ehsan Moin</span>
              </a>
            </div>
            <div className="content-webdev">
              <img src={Porto3} alt="porto3" className="img-fluid" />
              <a
                href="https://project3.atmajayadw.site/"
                target="_blank"
                rel="noopenner noreferrer"
              >
                <span>Qulby - Designed by Rahul Rao</span>
              </a>
            </div>
          </div>
          {/*  */}
          <div className="portfolio-contents">
            <div className="content-photo">
              <img src={Thumbnail1} alt="Animal" className="img-fluid" />
              <Link
                to={{
                  pathname: "/portfolio/",
                  search: "?category=animal",
                  state: "animal",
                }}
                rel="noopenner noreferrer"
              >
                <div className="btn-photo">
                  <span>Animal</span>
                </div>
              </Link>
            </div>

            <div className="content-photo">
              <img src={Thumbnail2} alt="Portrait" className="img-fluid" />
              <Link
                to={{
                  pathname: "/portfolio/",
                  search: "?category=portrait",
                  state: "portrait",
                }}
                rel="noopenner noreferrer"
              >
                <div className="btn-photo">
                  <span>Portrait</span>
                </div>
              </Link>
            </div>

            <div className="content-photo">
              <img src={Thumbnail3} alt="" className="img-fluid" />
              <Link
                to={{
                  pathname: "/portfolio/",
                  search: "?category=event",
                  state: "event",
                }}
                rel="noopenner noreferrer"
              >
                <div className="btn-photo">
                  <span>Event</span>
                </div>{" "}
              </Link>
            </div>
            <div className="content-photo">
              <img src={Thumbnail4} alt="" className="img-fluid" />
              <Link
                to={{
                  pathname: "/portfolio/",
                  search: "?category=wedding",
                  state: "wedding",
                }}
                rel="noopenner noreferrer"
              >
                <div className="btn-photo">
                  <span>Wedding</span>
                </div>{" "}
              </Link>
            </div>
            <div className="content-photo">
              <img src={Thumbnail5} alt="" className="img-fluid" />
              <Link
                to={{
                  pathname: "/portfolio/",
                  search: "?category=pre-wedding",
                  state: "pre-wedding",
                }}
                rel="noopenner noreferrer"
              >
                <div className="btn-photo">
                  <span>Pre-Wedding</span>
                </div>{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
