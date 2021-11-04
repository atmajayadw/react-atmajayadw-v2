import React, { Component } from "react";
import {
  Codeigniter,
  HTML_,
  Css,
  Js,
  Bootstrap,
  Jquery,
  PHP,
  Mysql,
  VSCode,
  Photoshop,
  Reactjs,
  XD,
  Git,
} from "../../assets/icon/icons.js";
import {
  Fuji1,
  Fuji2,
  Lens1,
  Lens2,
  Lens3,
  Lightroom,
  Premiere,
} from "../../assets/icon/icons.js";
import { Memphis1, Memphis2 } from "../../assets/icon/icons.js";
import $ from "jquery";

export default class Expertise extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slideIndex: 1,
    };
  }

  componentDidMount() {
    this.showSlides(this.slideIndex);
    this.showExpertise1();
    this.showExpertise2();
    this.parallaxMouse();
  }

  currentSlide = (n) => {
    this.setState({ slideIndex: n }, () =>
      this.showSlides(this.state.slideIndex)
    );
  };

  showSlides = (n) => {
    const slides = document.getElementsByClassName("expertise-contents");
    const thumbs = document.getElementsByClassName("expertise-btn");

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (let i = 0; i < thumbs.length; i++) {
      thumbs[i].className = thumbs[i].className.replace(" active", "");
    }
    slides[this.state.slideIndex - 1].style.display = "block";
    thumbs[this.state.slideIndex - 1].className += " active";
  };

  showExpertise1 = () => {
    $(".btn-expertise .webdev-btn").on("click", function (e) {
      $(".content").each(function (i) {
        setTimeout(function () {
          $(".content").eq(i).addClass("show");
        }, 400 * (i + 1));
      });
      $(".content").removeClass("show");
    });
  };

  showExpertise2 = () => {
    $(".btn-expertise.photo-btn").on("click", function (e) {
      $(".content-photo").each(function (i) {
        setTimeout(function () {
          $(".content-photo").eq(i).addClass("show");
        }, 400 * (i + 1));
      });
      $(".content-photo").removeClass("show");
    });
  };

  parallaxMouse = () => {
    let object1 = $(".memphis1");
    let object2 = $(".memphis2");
    let layer = $("body");

    layer.mousemove(function (e) {
      var valueX = (window.innerWidth - e.pageX * 4) / 200;
      var valueY = (window.innerWidth - e.pageY * 2) / 100;
      object1.css({
        transition: "0.1s",
        transform: "translate(" + valueX + "%," + valueY + "px)",
      });
    });

    layer.mousemove(function (e) {
      var valueX = -(window.innerWidth - e.pageX * 4) / 200;
      var valueY = -(window.innerWidth - e.pageY * 2) / 100;
      object2.css({
        transition: "0.1s",
        transform: "translate(" + valueX + "%," + valueY + "px)",
      });
    });
  };

  render() {
    return (
      <section id="expertise">
        <div className="container expertise">
          <img src={Memphis1} alt="" className="img-fluid memphis1" />
          <img src={Memphis2} alt="" className="img-fluid memphis2" />
          <div className="head">
            <h3>My Expertise</h3>
            <h5>as</h5>
            <div className="buttons">
              <div
                className="expertise-btn webdev-btn"
                onClick={() => this.currentSlide(1)}
              >
                <span>Web Developer</span>
              </div>
              <div
                className="expertise-btn photo-btn"
                onClick={() => this.currentSlide(2)}
              >
                <span>Photographer</span>
              </div>
            </div>

            <div className="expertise-contents webdev">
              <div className="content">
                <p>Front-End Developer</p>
                <div className="skills">
                  <div className="skill">
                    <img src={HTML_} alt="" className="img-fluid" />
                    <p className="title">HTML 5</p>
                  </div>
                  <div className="skill">
                    <img src={Css} alt="" className="img-fluid" />
                    <p className="title">CSS 3</p>
                  </div>
                  <div className="skill">
                    <img src={Js} alt="" className="img-fluid" />
                    <p className="title">Javascript</p>
                  </div>
                  <div className="skill">
                    <img src={Bootstrap} alt="" className="img-fluid" />
                    <p className="title">Bootstrap</p>
                  </div>
                  <div className="skill">
                    <img src={Jquery} alt="" className="img-fluid" />
                    <p className="title">JQuery</p>
                  </div>
                  <div className="skill">
                    <img src={Reactjs} alt="" className="img-fluid" />
                    <p className="title">React JS</p>
                  </div>
                </div>
              </div>

              <div className="content">
                <p>Back-End Developer</p>
                <div className="skills">
                  <div className="skill">
                    <img src={PHP} alt="" className="img-fluid" />
                    <p className="title">PHP</p>
                  </div>
                  <div className="skill">
                    <img src={Mysql} alt="" className="img-fluid" />
                    <p className="title">MySQL</p>
                  </div>
                  <div className="skill">
                    <img src={Codeigniter} alt="" className="img-fluid" />
                    <p className="title">Codeigniter 3</p>
                  </div>
                </div>
              </div>

              <div className="content">
                <p>Tools</p>
                <div className="skills">
                  <div className="skill">
                    <img src={Photoshop} alt="" className="img-fluid" />
                    <p className="title">Adobe Photoshop</p>
                  </div>
                  <div className="skill">
                    <img src={XD} alt="" className="img-fluid" />
                    <p className="title">Adobe XD (UI & UX)</p>
                  </div>
                  <div className="skill">
                    <img src={Git} alt="" className="img-fluid" />
                    <p className="title">Git & Github</p>
                  </div>
                  <div className="skill">
                    <img src={VSCode} alt="" className="img-fluid" />
                    <p className="title">Visual Studio Code</p>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}

            <div className="expertise-contents photo">
              <div className="content content-photo">
                <p>Gears</p>
                <div className="skills">
                  <div className="skill">
                    <img src={Fuji1} alt="" className="img-fluid" />
                    <p className="title">Fujifilm X-T1</p>
                  </div>
                  <div className="skill">
                    <img src={Fuji2} alt="" className="img-fluid" />
                    <p className="title">
                      Fujifilm <br /> X-T10
                    </p>
                  </div>
                  <div className="skill">
                    <img src={Lens1} alt="" className="img-fluid" />
                    <p className="title">
                      Fujifilm <br /> XF 35mm F2
                    </p>
                  </div>
                  <div className="skill">
                    <img src={Lens2} alt="" className="img-fluid" />
                    <p className="title">
                      Fujifilm <br /> XC 16-50mm
                    </p>
                  </div>
                  <div className="skill">
                    <img src={Lens3} alt="" className="img-fluid" />
                    <p className="title">
                      Fujifilm <br /> XC 55-230mm
                    </p>
                  </div>
                </div>
              </div>

              <div className="content content-photo">
                <p>Editing Tools</p>
                <div className="skills">
                  <div className="skill">
                    <img src={Photoshop} alt="" className="img-fluid" />
                    <p className="title">Adobe Photoshop</p>
                  </div>
                  <div className="skill">
                    <img src={Lightroom} alt="" className="img-fluid" />
                    <p className="title">Adobe Lightroom</p>
                  </div>
                  <div className="skill">
                    <img src={Premiere} alt="" className="img-fluid" />
                    <p className="title">Adobe Premiere</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
