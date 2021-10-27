import React, { Component } from "react";
import { Logo } from "../../assets/icon/icons";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  componentDidMount() {
    this.hamburger();
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

  render() {
    return (
      <>
        <section id="navbar">
          <div className="container navbar">
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
            <div className="links">
              <ul>
                <li>
                  <NavLink
                    className="link about"
                    rel="noopenner noreferrer"
                    to={{
                      pathname: "/",
                      params: "#about",
                    }}
                    exact
                  >
                    <span>About</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="link expertise"
                    rel="noopenner noreferrer"
                    to={{
                      pathname: "/",
                      params: "#expertise",
                    }}
                    exact
                  >
                    <span>Expertise</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="link portfolio"
                    rel="noopenner noreferrer"
                    to={{
                      pathname: "/",
                      params: "#portfolio",
                    }}
                    exact
                  >
                    <span>Portfolio</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="link contact"
                    rel="noopenner noreferrer"
                    to={{
                      pathname: "/",
                      params: "#contact",
                    }}
                    exact
                  >
                    <span>Contact</span>
                  </NavLink>
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
                    <NavLink
                      className="link about"
                      rel="noopenner noreferrer"
                      to={{
                        pathname: "/",
                        params: "#about",
                      }}
                      exact
                    >
                      <span>About</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="link expertise"
                      rel="noopenner noreferrer"
                      to={{
                        pathname: "/",
                        params: "#expertise",
                      }}
                      exact
                    >
                      <span>Expertise</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="link portfolio"
                      rel="noopenner noreferrer"
                      to={{
                        pathname: "/",
                        params: "#portfolio",
                      }}
                      exact
                    >
                      <span>Portfolio</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="link contact"
                      rel="noopenner noreferrer"
                      to={{
                        pathname: "/",
                        params: "#contact",
                      }}
                      exact
                    >
                      <span>Contact</span>
                    </NavLink>
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
