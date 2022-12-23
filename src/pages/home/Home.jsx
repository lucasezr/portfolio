import React from "react";
// import { Link } from "react-router-dom";
import Nav from "../../components/navbar/Nav";
import About from "../about/About";
import Projects from "../projects/Projects";
import CarouselPjs from "../../components/carouselProjects/CarouselPjs";
import CarouselEducation from "../education/Certificates.jsx";

export default function home() {
  return (
    <>
      <main>
        <Nav />

        <About />
        <CarouselPjs />
        <CarouselEducation />
      </main>
    </>
  );
}
