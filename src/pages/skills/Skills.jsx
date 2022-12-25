import React from "react";
import "../skills/Skills.css";

const skills = () => {
  return (
    <section className="section-skills">
      <div className="conteiner">
        <article className="back">
          <div className="back-cont">
            <span>Back-End</span>
            <div className="Nodejs">
              {" "}
              <span> NodeJS </span>
            </div>
            <div className="Express">
              {" "}
              <span> Express </span>
            </div>
          </div>
        </article>
        <article>
          <div className="Front">
            <span className="front-text"> Front-End</span>
            <ul className="container-li-front">
              <div className="container-react">
                <li className="React-icon"></li>
                <span className="react-text">React</span>
                <div className="bottom_part_react"></div>
              </div>
              <div className="container-redux">
                <li className="Redux-icon"></li>
                <span className="redux-text">Redux</span>
                <div className="bottom_part_Redux"></div>
              </div>
              <div className="container-CSS">
                <li className="CSS-icon"></li>
                <span className="css-text">CSS</span>
                <div className="bottom_part_css"></div>
              </div>
              <div className="container-html">
                <li className="HTML-icon"></li>
                <span className="html-text">HTML</span>
                <div className="bottom_part_html"></div>
              </div>
              <div className="container-js">
                <li className="js-icon"></li>
                <span className="js-text">Javascript</span>
                <div className="bottom_part_js"></div>
              </div>
            </ul>
          </div>
        </article>
        <article>
          <div className="db">
            <span className="database-text"> Database</span>
            <ul className="container-li-db">
              <div className="container-postgresql">
                <li className="PostgreSQL-icon"></li>
                <span className="PostgreSQL-text">PostgreSQL</span>
                <div className="bottom_part_1"></div>
              </div>
              <div className="container-sequelize">
                <li className="Sequelize-icon"></li>
                <span className="sequelize-text">Sequelize</span>
                <div className="bottom_part_2"></div>
              </div>
              <div className="container-prisma">
                <li className="Prisma-icon"></li>
                <span className="prisma-text">Prisma</span>
                <div className="bottom_part_3"></div>
              </div>
            </ul>
          </div>
        </article>
      </div>

      {/* <div className="container">
        <div className="logo"> </div>
        <div className="bottom_part"></div>
      </div> */}
    </section>
  );
};

export default skills;
