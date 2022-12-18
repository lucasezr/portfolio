import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/navbar/Nav.jsx";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Certificates from "./pages/education/Certificates";
import contactForm from "./pages/contact/Contact_Form";
import CarouselProject from "./components/carouselProjects/CarouselPjs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Nav />} /> */}
        <Route exact path="/about" element={<About />} />
        <Route exact path="/proyectos" element={<Projects />} />
        <Route exact path="/certificados" element={<Certificates />} />
        <Route exact path="/contacto" element={<contactForm />} />
        <Route exact path="/prueba" element={<CarouselProject />} />
      </Routes>
    </div>
  );
}

export default App;
