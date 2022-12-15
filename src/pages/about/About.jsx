import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="bodyy">
        <article className="bg-img">
          <section>
            <h1>Lucas Rodriguez</h1>
            <h3>Desarrollador web Full Stack</h3>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
              Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
              laudantium molestias eos sapiente officiis modi at sunt excepturi
              expedita sint? Sed quibusdam recusandae alias error harum maxime
              adipisci amet laborum. Perspiciatis minima nesciunt dolorem!
              Officiis iure rerum voluptates a cumque velit quibusdam sed amet
              tempora.
            </p>
          </section>
          <section className="btn-curriculum">
            <div className="">
              <a className="" href="./LucasRodriguez_cv.pdf" download>
                Descargar Curriculum
              </a>
            </div>
          </section>
        </article>
      </div>
    </>
  );
};

export default About;
