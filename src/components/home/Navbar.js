import React, { Component } from "react";
import { Logo } from "../../assets/icon/icons";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import "../../lib/jqueryeasing/jquery.easing.1.3.js";
import $ from "jquery";

class Navbar extends Component {
  componentDidMount() {
    this.hamburger();
    window.addEventListener("scroll", this.stickyNavbar);
    window.addEventListener("scroll", this.scrollFunctions);
  }

  hamburger = () => {
    const hamburger = document.querySelector(".hamburger");
    const span = document.querySelectorAll(".hamburger span");
    const sidebar = document.querySelector(".sidebar .links");

    hamburger.addEventListener("click", function () {
      sidebar.classList.toggle("active");
      span[0].classList.toggle("show1");
      span[1].classList.toggle("show2");
      span[2].classList.toggle("show3");
      if (sidebar.classList.contains("active")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    });
  };

  scroll = (params) => {
    document.body.style.overflow = "auto";
    const elementhref = $(params);

    let split = params.split("#");
    let result = ".link." + split.join("");
    $(".link").removeClass("active");
    $(result).addClass("active");

    if (elementhref.length) {
      $("html, body").animate(
        {
          scrollTop: elementhref.offset().top - 40,
        },
        1000,
        "easeInOutExpo"
      );
    }
  };

  stickyNavbar = () => {
    const fixbar = $("#navbar");

    if (fixbar.length) {
      if ($(document).scrollTop() > 100) {
        fixbar.addClass("sticky");
      } else {
        fixbar.removeClass("sticky");
      }
    }
  };

  scrollFunctions = () => {
    const wScroll = $(window).scrollTop();

    if (wScroll >= 0) {
      $(".link").removeClass("active");
    }

    if ($("#about").length) {
      if (wScroll > $("#about").offset().top - 100) {
        $("#about .about-left").addClass("show");
        setTimeout(() => {
          $("#about .about-right").addClass("show");
        }, 500);
        $(".link").removeClass("active");
        $(".link.about").addClass("active");
      }
    }

    if ($("#expertise").length) {
      if (wScroll > $("#expertise").offset().top - 120) {
        $(".content").each(function (i) {
          setTimeout(function () {
            $(".content").eq(i).addClass("show");
          }, 400 * (i + 1));
        });
        $(".link").removeClass("active");
        $(".link.expertise").addClass("active");
      }
    }

    if ($("#portfolio-home").length) {
      if (wScroll > $("#portfolio-home").offset().top - 120) {
        $(".content-photo").each(function (i) {
          setTimeout(function () {
            $(".content-photo").eq(i).addClass("show");
          }, 400 * (i + 1));
        });
        $(".link").removeClass("active");
        $(".link.portfolio-home").addClass("active");
      }
    }

    if (
      $(window).scrollTop() + $(window).height() + 80 ===
      $(document).height()
    ) {
      $(".link").removeClass("active");
      $(".link.contact").addClass("active");
    }
  };

  render() {
    return (
      <>
        <section id="navbar">
          <div className="container navbar">
            <div className="logo">
              <Link
                to={{ pathname: "/" }}
                onClick={() => this.scroll("#jumbotron")}
              >
                <img src={Logo} alt="" />
              </Link>
            </div>
            <div className="links">
              <ul>
                <li>
                  <Link
                    className="link about scroll"
                    rel="noopenner noreferrer"
                    to={{
                      pathname: "/",
                      // hash: "#about",
                      params: "#about",
                    }}
                    onClick={() => this.scroll("#about")}
                  >
                    <span>About</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="link expertise scroll"
                    rel="noopenner noreferrer"
                    to={{
                      pathname: "/",
                      // hash: "#expertise",
                      params: "#expertise",
                    }}
                    onClick={() => this.scroll("#expertise")}
                  >
                    <span>Expertise</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="link portfolio-home scroll"
                    rel="noopenner noreferrer"
                    to={{
                      pathname: "/",
                      // hash: "#portfolio-home",
                      params: "#portfolio-home",
                    }}
                    onClick={() => this.scroll("#portfolio-home")}
                  >
                    <span>Portfolio</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="link contact scroll"
                    rel="noopenner noreferrer"
                    to={{
                      pathname: "/",
                      // hash: "#contact",
                      params: "#contact",
                    }}
                    onClick={() => this.scroll("#contact")}
                  >
                    <span>Contact</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="sidebar">
              <div className="hamburger">
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
              </div>

              <div className="links">
                <ul>
                  <li>
                    <Link
                      className="link about"
                      rel="noopenner noreferrer"
                      to={{
                        pathname: "/",
                        hash: "#about",
                      }}
                    >
                      <span>About</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="link expertise"
                      rel="noopenner noreferrer"
                      to={{
                        pathname: "/",
                        hash: "#expertise",
                      }}
                    >
                      <span>Expertise</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="link portfolio"
                      rel="noopenner noreferrer"
                      to={{
                        pathname: "/",
                        hash: "#portfolio-home",
                      }}
                    >
                      <span>Portfolio</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="link contact"
                      rel="noopenner noreferrer"
                      to={{
                        pathname: "/",
                        hash: "#contact",
                      }}
                    >
                      <span>Contact</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withRouter(Navbar);
