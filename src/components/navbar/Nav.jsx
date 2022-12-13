// necesita tailwind
// menu hamburgeza

import React from "react";
import "../navbar/Nav.css";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="nav_logo">Portfolio </div>
      <div className={`nav_items ${isOpen && "open"}`}>
        <a href="#">Home</a>
        <a href="#">Sobre mi</a>
        <a href="#">Proyectos</a>
        <a href="#">Educacion</a>
        <a href="#">Jugar</a>
        <a href="#">Contactame</a>
      </div>
      <div
        className={`nav_toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span> </span>
        <span> </span>
        <span> </span>
      </div>
    </div>
  );
};

export default Navbar;
