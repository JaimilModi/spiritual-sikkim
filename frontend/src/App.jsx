import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Monasteries from "./pages/Monasteries";
import Events from "./pages/Events";
import Trip from "./pages/Trip";
import Contact from "./pages/Contact";
import Nathula from "./locations/Nathula";
import Ravangla from "./locations/Ravangla";
import Ranka from "./locations/Ranka";

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

          <Route path="/location/nathula" element={<Nathula />} />
          <Route path="/location/ravangla" element={<Ravangla />} />
          <Route path="/location/ranka" element={<Ranka />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
