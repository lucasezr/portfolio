import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import Nav from "../../components/navbar/Nav";

const About = () => {
  return (
    <>
      <div className="body">
        <section>
          <article className="article-info-basic">
            <div className="half-first">
              <div className="cont-basic-info">
                <div className="name-career">
                  <h1>Lucas Rodriguez</h1>
                  <h3>Desarrollador web Full Stack</h3>
                </div>
                <p className="description">
                  Soy un Full Stack Developer orientado al Back End. Mi
                  formación en el bootcamp Soy Henry me ha brindado las
                  habilidades técnicas necesarias para desempeñarme con éxito en
                  este campo, y mi interés en las ciencias de la computación y
                  el marketing me permite tener una visión más amplia de cómo
                  aplicar mis habilidades a proyectos de negocio. Además, tengo
                  experiencia en trabajos grupales utilizando la metodología
                  Scrum, y he participado en el desarrollo de ecommerce. Como
                  emprendedor, también poseo un pensamiento estratégico y una
                  capacidad de innovación que me permiten encontrar soluciones
                  creativas a problemas técnicos y de negocio.
                </p>
              </div>
            </div>
            <div className="half-second">
              <div className="img-avatar">
                <img
                  src="https://res.cloudinary.com/dr1n4zzvd/image/upload/v1671308848/peeps-avatar-alpha_aee383.png"
                  alt="avatar image"
                />
              </div>
            </div>

            {/* <div className="btn-curriculum">
              <div className="">
                <button>
                  <a className="" href="./LucasRodriguez_cv.pdf" download>
                    Descargar Curriculum
                  </a>
                </button>
              </div>
            </div> */}
          </article>
        </section>
      </div>
    </>
  );
};

export default About;
