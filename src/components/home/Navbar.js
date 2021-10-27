import React, { Component } from "react";
import { Logo } from "../../assets/icon/icons";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
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
          </div>
        </section>
      </>
    );
  }
}
