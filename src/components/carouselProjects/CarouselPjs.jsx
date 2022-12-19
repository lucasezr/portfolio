import React from "react";
import "../carouselProjects/carouselPjs.css";
import { Link } from "react-router-dom";

const CarouselPjs = () => {
  var angle = 0;
  function gallerySpin(sign) {
    const spinner = document.getElementsByClassName("spinner")[0];
    if (!sign) {
      angle = angle + 45;
    } else {
      angle = angle - 45;
    }
    spinner.setAttribute("style", `transform: rotateY(${+angle + "deg"});`);
  }

  return (
    <>
      <section className="general-conteiner">
        <div className="slider">
          <figure className="spinner">
            <a
              href="https://coffee-street-front-end.vercel.app/"
              target="_blank"
            >
              <img
                src="https://res.cloudinary.com/dr1n4zzvd/image/upload/v1670445553/vector-dogs-pattern_lychwn.jpg"
                alt="project dogs"
                className="img-project"
              />
            </a>

            <img
              src="https://res.cloudinary.com/dr1n4zzvd/image/upload/v1670442379/cafe2_generated_dw1eo4.jpg"
              alt="project coffeshop"
            ></img>

            <img
              src="https://res.cloudinary.com/dr1n4zzvd/image/upload/v1670445553/vector-dogs-pattern_lychwn.jpg"
              alt="project dogs"
            ></img>

            <img
              src="https://res.cloudinary.com/dr1n4zzvd/image/upload/v1670442379/cafe2_generated_dw1eo4.jpg"
              alt="project coffeshop"
            ></img>

            <img
              src="https://res.cloudinary.com/dr1n4zzvd/image/upload/v1670445553/vector-dogs-pattern_lychwn.jpg"
              alt="project dogs"
            ></img>

            <img
              src="https://res.cloudinary.com/dr1n4zzvd/image/upload/v1670442379/cafe2_generated_dw1eo4.jpg"
              alt="project coffeshop"
            ></img>

            <img
              src="https://res.cloudinary.com/dr1n4zzvd/image/upload/v1670445553/vector-dogs-pattern_lychwn.jpg"
              alt="project dogs"
            ></img>

            <img
              src="https://res.cloudinary.com/dr1n4zzvd/image/upload/v1670442379/cafe2_generated_dw1eo4.jpg"
              alt="project coffeshop"
            ></img>

            <img
              src="https://res.cloudinary.com/dr1n4zzvd/image/upload/v1670445553/vector-dogs-pattern_lychwn.jpg"
              alt="project dogs"
            ></img>

            <img
              src="https://res.cloudinary.com/dr1n4zzvd/image/upload/v1670442379/cafe2_generated_dw1eo4.jpg"
              alt="project coffeshop"
            ></img>
          </figure>
        </div>
        <span className="arrow-one" onClick={(e) => gallerySpin(" - ")}>
          &lt;
        </span>

        <span className="arrow-two" onClick={(event) => gallerySpin("")}>
          &gt;
        </span>

        <div className="conteiner-button">
          <Link className="btn-go-projects" to={"/proyectos"}>
            {" "}
            <button> Ver proyectos </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default CarouselPjs;
