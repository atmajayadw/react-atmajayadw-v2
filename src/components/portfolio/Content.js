import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import $ from "jquery";
import axios from "axios";

export default class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.getData();
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
        }
      });

      closemodal.onclick = function () {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
        navbar.style.display = "block";
      };
    }
  };

  render() {
    const { categories } = this.state;

    return (
      <>
        <div id="modal" className="modal">
          <span id="close-modal">x</span>
          <img className="modal-content" id="modal-img" alt="" />
          <div id="modal-caption"></div>
        </div>

        <section id="content">
          <div className="container content">
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
