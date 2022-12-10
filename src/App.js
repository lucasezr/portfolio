import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import contactForm from "./components/Contact_Form";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Nav />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/proyectos" element={<Projects />} />
        <Route exact path="/certificados" element={<Certificates />} />
        <Route exact path="/contacto" element={<contactForm />} />
      </Routes>
    </div>
  );
}

export default App;
