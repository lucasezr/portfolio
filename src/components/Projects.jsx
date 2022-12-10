import React from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div class="">
      <ul class="">
        <div class="">
          <li class="">
            <a
              href="https://coffee-street-front-end.vercel.app/"
              target="_blank"
            >
              {" "}
              <img
                src="https://res.cloudinary.com/dr1n4zzvd/image/upload/v1670442379/cafe2_generated_dw1eo4.jpg"
                alt="imagen del proyecto individual"
                width="400px"
              />
            </a>
            <div className="top"> Coffee Street (PF)</div>
          </li>

          <li class="bg-violet-600">
            <a href="#" target="_blank">
              {" "}
              <img
                src="https://res.cloudinary.com/dr1n4zzvd/image/upload/v1670445553/vector-dogs-pattern_lychwn.jpg"
                alt="imagen del proyecto grupal"
                width="400px"
              />
            </a>
            <div className="top"> Dogg App (PI)</div>
          </li>
        </div>
      </ul>
    </div>
  );
}
