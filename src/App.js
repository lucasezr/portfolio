import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/navbar/Nav.jsx";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import CarouselEducation from "./pages/education/Certificates";
import contactForm from "./pages/contact/Contact_Form";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Nav />} /> */}
        <Route exact path="/about" element={<About />} />
        <Route exact path="/proyectos" element={<Projects />} />
        <Route exact path="/certificados" element={<About />} />
        <Route exact path="/contacto" element={<contactForm />} />
        <Route exact path="/prueba" element={<CarouselEducation />} />
      </Routes>
    </div>
  );
}

export default App;
