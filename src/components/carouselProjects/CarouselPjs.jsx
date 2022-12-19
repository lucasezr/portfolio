import React from "react";
import "../carouselProjects/carouselPjs.css";

const CarouselPjs = () => {
  var angle = 0;
  function galleryspin(sign) {
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
      <div className="slider">
        <figure className="spinner">
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
        </figure>
      </div>
      <span className="arrow-one" onClick={(e) => galleryspin(" - ")}>
        &lt;
      </span>

      <span className="arrow-two" onClick={(event) => galleryspin("")}>
        &gt;
      </span>
    </>
  );
};

export default CarouselPjs;
