import "./App.css";
import Navbar from "./Navbar";
import TransService from "./Pages/TransService";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Footer";
import Home from "./Pages/Home";
import ReactGA from "react-ga4";

ReactGA.initialize("G-L28TPPQFFQ");
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <TransService />

      <Contact />
      <About />
      <Footer />
    </div>
  );
}

export default App;
