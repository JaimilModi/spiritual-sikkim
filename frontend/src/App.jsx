import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Monasteries from "./pages/Monasteries";
import Events from "./pages/Events";
import Trip from "./pages/Trip";
import About from "./pages/About";
import Nathula from "./locations/Nathula";
import Ravangla from "./locations/Ravangla";
import Ranka from "./locations/Ranka";
import Namgyal from "./locations/Namgyal";
import VirtualTour from "./pages/VirtualTour";
import Visit from "./pages/Visit";
import Explore from "./pages/Explore";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/monasteries" element={<Monasteries />} />
          <Route path="/events" element={<Events />} />
          <Route path="/trip" element={<Trip />} />
          <Route path="/About" element={<About />} />
          <Route path="/virtualtour" element={<VirtualTour />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/explore" element={<Explore />} />

          <Route path="/location/nathula" element={<Nathula />} />
          <Route path="/location/ravangla" element={<Ravangla />} />
          <Route path="/location/ranka" element={<Ranka />} />
          <Route path="/location/namgyal" element={<Namgyal />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
