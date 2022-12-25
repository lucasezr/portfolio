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
            <span> Front-End</span>
            <div className="Reactjs"></div>
            <div className="Redux"></div>
            <div className="CSS"></div>
            <div className="HTML"></div>
            <div className="Js"></div>
          </div>
        </article>
        <article>
          <div className="db">
            <span className="database-text"> Database</span>
            <ul className="container-li-db">
              <div className="container-postgresql">
                <li className="PostgreSQL-icon"></li>
                <span className="PostgreSQL-text">PostgreSQL</span>
                <div className="bottom_part"></div>
              </div>
              <div className="container-sequelize">
                <li className="Sequelize-icon"></li>
                <span className="sequelize-text">Sequelize</span>
                <div className="bottom_part"></div>
              </div>
              <div className="container-prisma">
                <li className="Prisma-icon"></li>
                <span className="prisma-text">Prisma</span>
                <div className="bottom_part"></div>
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
