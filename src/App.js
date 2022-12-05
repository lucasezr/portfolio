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
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Nav />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/proyectos" element={<Projects />} />
          <Route exact path="/certificados" element={<Certificates />} />
          <Route exact path="/contacto" element={<contactForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
