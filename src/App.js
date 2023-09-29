import React  from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Developer from "./components/Developer";
import "./App.css";

function App() {
  const sitePadding = "0 3%";
  return (
    <Router>
        <Navbar padding={sitePadding} />
        <Routes>
          <Route path="/" exact element={<Home padding={sitePadding} />} />
          <Route
            path="/services"
            exact
            element={<Services padding={sitePadding} />}
          />
          <Route
            path="/portfolio"
            exact
            element={<Portfolio padding={sitePadding} />}
          />
          <Route
            path="/contact"
            exact
            element={<Contact padding={sitePadding} />}
          />
          <Route
            path="/developer"
            exact
            element={<Developer padding={sitePadding} />}
          />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
