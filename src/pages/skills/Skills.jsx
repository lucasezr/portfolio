import React from "react";
import "../skills/Skills.css";

const skills = () => {
  return (
    <section className="section-skills">
      <div className="conteiner">
        <article>
          <div className="back">
            <span>Back-End</span>
            <div className="Nodejs"></div>
            <div className="Express"></div>
          </div>
        </article>
        <article>
          <div className="front">
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
            <span> Database</span>
            <ul>
              <li className="PostgreSQL"> </li>
              <li className="Sequelize"> </li>
              <li className="Prisma"> </li>
            </ul>
          </div>
        </article>
      </div>

      <div className="container">
        <div className="logo"> </div>
        <div className="bottom_part"></div>
      </div>
    </section>
  );
};

export default skills;
