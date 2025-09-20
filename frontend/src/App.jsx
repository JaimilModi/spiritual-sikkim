import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Gallery from "./components/Gallery";
import Monasteries from "./pages/Monasteries";
import Events from "./pages/Events";
import Trip from "./pages/Trip";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/monasteries" element={<Monasteries />} />
          <Route path="/events" element={<Events />} />
          <Route path="/trip" element={<Trip />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
