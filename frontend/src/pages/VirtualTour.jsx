// src/pages/VirtualTour.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowLeft,
  FiArrowRight,
  FiClock,
  FiUsers,
  FiMapPin,
  FiStar,
  FiSearch,
} from "react-icons/fi";

import nathulaImg from "../assets/image1.png";
import ravanglaImg1 from "../assets/image2.png";
import ravanglaImg2 from "../assets/image3.png";
import rankaImg1 from "../assets/image4.png";
import rankaImg2 from "../assets/image5.png";
import namgyalImg1 from "../assets/image6.png";
import namgyalImg2 from "../assets/image7.png";

const virtualTours = [
  {
    id: 1,
    name: "Nathula Pass",
    location: "East Sikkim",
    duration: "8 minutes",
    description:
      "Explore the historic Nathula Pass with stunning Himalayan views.",
    rating: 4.7,
    views: "8.2K",
    scenes: [nathulaImg, ravanglaImg1],
  },
  {
    id: 2,
    name: "Ravangla Buddha Park",
    location: "South Sikkim",
    duration: "12 minutes",
    description:
      "Visit the serene Ravangla Buddha Park and admire the giant Buddha statue.",
    rating: 4.9,
    views: "12.5K",
    scenes: [ravanglaImg1, ravanglaImg2],
  },
  {
    id: 3,
    name: "Ranka Monastery",
    location: "East Sikkim",
    duration: "10 minutes",
    description:
      "A beautiful monastery showcasing traditional Sikkimese architecture.",
    rating: 4.8,
    views: "9.4K",
    scenes: [rankaImg1, rankaImg2],
  },
  {
    id: 4,
    name: "Namgyal Institute of Tibetology",
    location: "Gangtok, Sikkim",
    duration: "15 minutes",
    description:
      "A prestigious institute dedicated to Tibetan culture and art.",
    rating: 4.9,
    views: "11.8K",
    scenes: [namgyalImg1, namgyalImg2],
  },
];

const VirtualTour = () => {
  const [selectedTour, setSelectedTour] = useState(null);
  const [currentScene, setCurrentScene] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const primaryColor = "#2C3E50"; // Main theme color
  const buttonColor = "#1F2A38"; // Button background color

  const filteredTours = virtualTours.filter(
    (tour) =>
      tour.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tour.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startTour = (tour) => {
    setSelectedTour(tour);
    setCurrentScene(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const nextScene = () => {
    if (currentScene < selectedTour.scenes.length - 1)
      setCurrentScene(currentScene + 1);
  };

  const previousScene = () => {
    if (currentScene > 0) setCurrentScene(currentScene - 1);
  };

  // Scene View
  if (selectedTour) {
    return (
      <div className="min-h-screen bg-gray-50 p-6 pt-24">
        <button
          onClick={() => setSelectedTour(null)}
          className="mb-6 px-4 py-2 rounded flex items-center gap-2 fixed top-24 left-6 z-50 shadow transition hover:brightness-110"
          style={{ backgroundColor: primaryColor, color: "white" }}
        >
          <FiArrowLeft /> Back
        </button>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentScene}
                src={selectedTour.scenes[currentScene]}
                alt={`${selectedTour.name} scene ${currentScene + 1}`}
                className="w-full h-96 object-cover rounded-2xl"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>

            <div className="absolute inset-0 flex justify-between items-center px-4">
              <button
                onClick={previousScene}
                disabled={currentScene === 0}
                className="rounded-full p-3 text-white transition disabled:bg-gray-300"
                style={{
                  backgroundColor: currentScene === 0 ? "#ccc" : buttonColor,
                }}
              >
                <FiArrowLeft size={24} />
              </button>
              <button
                onClick={nextScene}
                disabled={currentScene === selectedTour.scenes.length - 1}
                className="rounded-full p-3 text-white transition disabled:bg-gray-300"
                style={{
                  backgroundColor:
                    currentScene === selectedTour.scenes.length - 1
                      ? "#ccc"
                      : buttonColor,
                }}
              >
                <FiArrowRight size={24} />
              </button>
            </div>

            <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded">
              Scene {currentScene + 1} of {selectedTour.scenes.length}
            </div>
          </div>

          <h2
            className="text-3xl font-bold mt-6"
            style={{ color: primaryColor }}
          >
            {selectedTour.name}
          </h2>
          <p className="text-gray-700 mt-2">{selectedTour.description}</p>

          <div className="flex flex-wrap gap-6 mt-4 text-gray-700">
            <div className="flex items-center gap-1">
              <FiClock /> {selectedTour.duration}
            </div>
            <div className="flex items-center gap-1">
              <FiUsers /> {selectedTour.views}
            </div>
            <div className="flex items-center gap-1">
              <FiStar /> {selectedTour.rating}
            </div>
            <div className="flex items-center gap-1">
              <FiMapPin /> {selectedTour.location}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Tour List View
  return (
    <div className="min-h-screen bg-gray-50 p-6 pt-24">
      {/* Animated Heading */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold mb-4 text-center text-[#2C3E50]"
      >
        Explore Sikkim Virtually
      </motion.h1>

      <motion.p
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-gray-600 text-center mb-16 max-w-3xl mx-auto"
      >
        Discover the most iconic monasteries, parks, and cultural landmarks of
        Sikkim through immersive 360° virtual tours. Navigate scenes, learn
        about heritage, and plan your future trips.
      </motion.p>

      {/* Search */}
      <div className="max-w-2xl mx-auto mb-12 relative">
        <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
        <motion.input
          type="text"
          placeholder="Search for tours, monasteries, or parks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-12 py-3 rounded-xl shadow-md border border-gray-200 focus:outline-none"
          style={{ borderColor: "#ccc", color: primaryColor }}
          whileFocus={{ scale: 1.02 }}
        />
      </div>

      {/* Tour Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTours.map((tour, i) => (
          <motion.div
            key={tour.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col cursor-pointer"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <motion.img
              src={tour.scenes[0]}
              alt={tour.name}
              className="w-full h-64 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="p-6 flex flex-col flex-1">
              <h2
                className="text-2xl font-semibold mb-2"
                style={{ color: primaryColor }}
              >
                {tour.name}
              </h2>
              <p className="text-gray-700 mb-4 flex-1">{tour.description}</p>
              <div className="flex gap-4 text-gray-700 mb-4">
                <div className="flex items-center gap-1">
                  <FiClock /> {tour.duration}
                </div>
                <div className="flex items-center gap-1">
                  <FiStar /> {tour.rating}
                </div>
              </div>
              <motion.button
                onClick={() => startTour(tour)}
                className="mt-auto py-3 rounded-xl font-semibold transition"
                style={{
                  backgroundColor: buttonColor,
                  color: "white",
                  boxShadow: "0 4px 12px rgba(44, 62, 80, 0.3)",
                }}
                whileHover={{ scale: 1.05 }}
              >
                Start Tour
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VirtualTour;
