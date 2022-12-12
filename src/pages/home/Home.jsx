import React from "react";
// import { Link } from "react-router-dom";
import Nav from "../../components/navbar/Nav";
import Name from "../../components/Name";
import About from "../About";
import Projects from "../Projects";

export default function home() {
  return (
    <>
      <Nav />
      <Name />
      <div class="h-96 relative bottom-2/4 bg-slate-500 w-3/5">
        {" "}
        Espacio de relleno{" "}
      </div>
      <br />
      <About />
      <Projects />
    </>
  );
}
