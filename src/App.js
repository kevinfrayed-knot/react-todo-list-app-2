

import { HashRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer title="© 2024 Frayed Knot, LLC" />
    </HashRouter>
  );
}

export default App;