import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/navbar/Nav";
import Home from "./pages/home/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";
import contactForm from "./pages/Contact_Form";

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
      </Routes>
    </div>
  );
}

export default App;
