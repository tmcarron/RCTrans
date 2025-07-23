import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import TransService from "./Pages/TransService";
import Warranty from "./Pages/Warranty";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Footer";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/trans-service" element={<TransService />} />
        <Route path="/warranty" element={<Warranty />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
