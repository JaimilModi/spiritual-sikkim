import React from "react";
import { motion } from "framer-motion";
import { FiClock, FiMapPin, FiInfo, FiCheckCircle } from "react-icons/fi";
import Navbar from "../components/Navbar";

// Placeholder images
import step1 from "../assets/image1.png";
import step2 from "../assets/image2.png";
import step3 from "../assets/image3.png";

const visitSteps = [
  {
    title: "Check Opening Hours",
    description:
      "Most monasteries are open from 8 AM to 6 PM daily, except Tuesdays.",
    icon: <FiClock size={36} />,
    image: step1,
    action: "View Timings",
    bg: "#F0F4F8",
  },
  {
    title: "Plan Your Route",
    description:
      "Find the best scenic routes and transportation options across Sikkim.",
    icon: <FiMapPin size={36} />,
    image: step2,
    action: "Get Directions",
    bg: "#FFFFFF",
  },
  {
    title: "Visitor Guidelines",
    description:
      "Respect the sanctity, wear modest clothing, and maintain silence.",
    icon: <FiInfo size={36} />,
    image: step3,
    action: "Learn More",
    bg: "#F0F4F8",
  },
  {
    title: "Prepare Essentials",
    description:
      "Carry water, wear comfortable shoes, and keep your camera ready.",
    icon: <FiCheckCircle size={36} />,
    image: step1,
    action: "Checklist",
    bg: "#FFFFFF",
  },
];

const Visit = () => {
  return (
    <div className="bg-white min-h-screen text-[#2C3E50]">
      <Navbar theme="light" />
      <div className="flex flex-col">
        {visitSteps.map((step, index) => (
          <motion.section
            key={index}
            className="relative flex flex-col md:flex-row items-center px-8 py-20 overflow-hidden"
            style={{ backgroundColor: step.bg }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Text Content */}
            <div
              className={`md:w-1/2 md:pr-12 ${
                index % 2 !== 0 ? "md:order-2 md:pl-12 md:pr-0" : ""
              }`}
            >
              <div className="flex items-center mb-4">
                <span className="text-[#2C3E50]">{step.icon}</span>
                <h2 className="text-4xl font-bold ml-4">{step.title}</h2>
              </div>
              <p className="text-gray-700 mb-6">{step.description}</p>
              <button className="bg-[#2C3E50] text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
                {step.action}
              </button>
            </div>

            {/* Floating Image */}
            <motion.div
              className={`md:w-1/2 mt-8 md:mt-0 ${
                index % 2 !== 0 ? "md:order-1" : ""
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-64 md:h-80 object-cover rounded-xl shadow-2xl"
              />
            </motion.div>
          </motion.section>
        ))}
      </div>
    </div>
  );
};

export default Visit;
