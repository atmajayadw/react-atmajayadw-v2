import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import $ from "jquery";
import axios from "axios";

const Loader = () => (
  <div className="divLoader">
    <svg className="svgLoader" viewBox="0 0 100 100" width="10em" height="10em">
      <path
        stroke="none"
        d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
        fill="#7E8075"
        transform="rotate(179.719 50 51)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="linear"
          values="0 50 51;360 50 51"
          keyTimes="0;1"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
        ></animateTransform>
      </path>
    </svg>
  </div>
);

export default class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      loading: true,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.getData();
    document.body.style.overflow = "auto";
    this.setLoaderOff();
  }

  componentDidUpdate() {
    this.showModal();
  }

  getData = () => {
    const authResult = new URLSearchParams(window.location.search);
    const category = authResult.get("category");

    const URL = "https://rest-server.atmajayadw.com/api/portfolio/";
    axios
      .get(URL, { params: { kategori: category } })
      .then((res) => {
        const categories = res.data;
        this.setState({ categories: categories.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  showModal = () => {
    const modal = document.getElementById("modal");
    const thumbs = document.querySelectorAll(".photo img");
    const modal_img = document.getElementById("modal-img");
    const closemodal = document.getElementById("close-modal");
    const navbar = document.querySelector("#navbar");

    for (let i = 0; i < thumbs.length; i++) {
      thumbs[i].addEventListener("click", function () {
        document.body.style.overflow = "hidden";
        navbar.style.display = "none";
        modal.style.display = "block";
        modal_img.src =
          "https://rest-server.atmajayadw.com/uploads/" + this.alt;
        if ($("#modal-img").height() > 500) {
          $("#modal-img").css({
            "max-width": "400px",
          });
        } else if ($("#modal-img").height() < 500) {
          $("#modal-img").css({
            "max-width": "700px",
          });
        }
      });

      closemodal.onclick = function () {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
        navbar.style.display = "block";
      };
    }
  };

  setLoaderOff = () => {
    document.body.style.overflow = "hidden";
    const footer = document.querySelector("#contact");
    footer.style.display = "none";
    setTimeout(() => {
      const loader = document.querySelector("#loader");
      loader.style.display = "none";
      this.setState({
        loading: false,
      });
      document.body.style.overflow = "auto";
      const jumbotron = document.querySelector("#content");
      jumbotron.style.opacity = "1";
      footer.style.display = "block";
    }, 1200);
  };

  render() {
    const { categories } = this.state;

    return (
      <>
        <div id="modal">
          <div className="container">
            <span id="close-modal">x</span>
            <img className="modal-content" id="modal-img" alt="" />
            <div id="modal-caption"></div>
          </div>
        </div>

        <section id="content">
          <div className="container content">
            <div className="container" id="loader">
              {this.state.loading ? <Loader /> : null}
              <p>
                <i>loading...</i>
              </p>
            </div>

            <Link
              rel="noopenner noreferrer"
              to={{
                pathname: "/",
                params: "#portfolio-home",
              }}
            >
              <span className="back"> {"< "}Back to portfolio</span>
            </Link>
            <div className="gallery">
              {categories &&
                categories.map((category, index) => (
                  <div className="photo" key={index}>
                    <img
                      src={
                        "https://rest-server.atmajayadw.com/uploads/" +
                        category.foto
                      }
                      alt={category.foto}
                      className="img-fluid"
                    />
                  </div>
                ))}
            </div>
          </div>
        </section>
      </>
    );
  }
}
