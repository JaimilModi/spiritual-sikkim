import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiCalendar, FiMapPin } from "react-icons/fi";

import event1 from "../assets/image1.png";
import event2 from "../assets/image2.png";
import event3 from "../assets/image3.png";
import event4 from "../assets/image4.png";

const eventsData = [
  {
    id: 1,
    title: "Sikkim Cultural Festival",
    date: "2025-10-05",
    location: "Gangtok",
    description:
      "Experience the vibrant Sikkimese culture with traditional dances, music, and local cuisine.",
    image: event1,
  },
  {
    id: 2,
    title: "Monastery Light Show",
    date: "2025-10-12",
    location: "Ranka Monastery",
    description:
      "A magical evening with illuminated monasteries and spiritual performances.",
    image: event2,
  },
  {
    id: 3,
    title: "Himalayan Trek Adventure",
    date: "2025-11-01",
    location: "Nathula Pass",
    description:
      "Join a guided trek across scenic Himalayan trails and witness breathtaking landscapes.",
    image: event3,
  },
  {
    id: 4,
    title: "Buddha Park Meditation Retreat",
    date: "2025-11-15",
    location: "Ravangla",
    description:
      "A serene retreat for meditation, mindfulness, and spiritual rejuvenation.",
    image: event4,
  },
];

const months = ["All", "October", "November"];

const Events = () => {
  const [selectedMonth, setSelectedMonth] = useState("All");
  const primaryColor = "#2C3E50";
  const buttonColor = "#1F2A38"; // Slightly darker for buttons

  const filteredEvents = eventsData.filter((event) => {
    if (selectedMonth === "All") return true;
    const eventMonth = new Date(event.date).toLocaleString("default", {
      month: "long",
    });
    return eventMonth === selectedMonth;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6 pt-32 text-gray-800">
      {/* Hero Section */}
      <motion.div className="text-center mb-12 max-w-3xl mx-auto">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-4 text-[#2C3E50]"
        >
          Upcoming Events in Sikkim
        </motion.h1>
        <motion.p
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 text-lg"
        >
          Explore festivals, retreats, and adventures across Sikkim
        </motion.p>
      </motion.div>

      {/* Month Filter */}
      <div className="max-w-md mx-auto mb-12 flex justify-center gap-4 flex-wrap">
        {months.map((month) => (
          <motion.button
            key={month}
            onClick={() => setSelectedMonth(month)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 rounded-full font-semibold text-sm transition border shadow-sm"
            style={{
              backgroundColor: selectedMonth === month ? primaryColor : "white",
              color: selectedMonth === month ? "white" : primaryColor,
              borderColor: selectedMonth === month ? primaryColor : "#ccc",
              boxShadow:
                selectedMonth === month
                  ? `0 4px 12px rgba(44, 62, 80, 0.3)`
                  : "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            {month}
          </motion.button>
        ))}
      </div>

      {/* Timeline Events */}
      <div className="relative max-w-6xl mx-auto">
        {filteredEvents.map((event, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: isEven ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`mb-16 flex flex-col md:flex-row items-center w-full ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <div className="relative w-full md:w-1/2 p-4">
                <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transform transition-transform duration-500">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>

              {/* Card */}
              <div
                className={`w-full md:w-1/2 p-6 bg-white rounded-2xl shadow-lg flex flex-col justify-between hover:shadow-2xl transition-shadow cursor-pointer ${
                  isEven ? "md:ml-8" : "md:mr-8"
                }`}
              >
                <h2
                  className="text-2xl font-bold mb-2"
                  style={{ color: primaryColor }}
                >
                  {event.title}
                </h2>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <div className="flex gap-4 text-gray-700 mb-4">
                  <div className="flex items-center gap-1">
                    <FiCalendar />{" "}
                    {new Date(event.date).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <FiMapPin /> {event.location}
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="mt-auto py-3 rounded-xl font-semibold transition"
                  style={{
                    backgroundColor: buttonColor,
                    color: "white",
                    boxShadow: "0 4px 12px rgba(44, 62, 80, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Register Now
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mt-16"
      >
        <h2 className="text-3xl font-bold mb-4" style={{ color: primaryColor }}>
          Don’t Miss Out!
        </h2>
        <p className="text-gray-700 mb-6">
          Join our newsletter to get updates on upcoming events.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-8 py-3 rounded-full font-semibold transition"
          style={{
            backgroundColor: buttonColor,
            color: "white",
            boxShadow: "0 4px 12px rgba(44, 62, 80, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          Subscribe
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Events;
