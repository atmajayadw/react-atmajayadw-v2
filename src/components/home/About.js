import React, { Component } from "react";
import { Profile2 } from "../../assets/image/images.js";

export default class about extends Component {
  render() {
    return (
      <section id="about">
        <div className="container about">
          <div className="row">
            <div className="col-md-6 about-left">
              <img src={Profile2} alt="profile" />
            </div>
            <div className="col-md-6 about-right">
              <h3>About Me</h3>
              <p>
                Hi There! My name is Atmajaya Dega Wiradiana and you can call me
                "Jay". I'm a person who interested in web development and
                photography especially animal photography.
              </p>
              <p>
                I'm a graduate of Gunadarma University in 2019 majoring in
                Information Systems, after trying to learn some programming
                languages ​​on several platforms such as mobile and desktop, I
                finally found a new interest in web programming, especially as a
                Front-End Website Developer.
              </p>
              <p>
                I interested in photography especially animal photography,
                because since I was a kid I've liked to watch animal
                documentaries on TV, buy books or magazines about animals, and
                often visit zoos. I often think " What a nice photo, is it
                possible I can make it like that too? ". Now I know the answer,
                " Yes, I can! ".
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
