import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

// Placeholder images (replace with your own later)
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";

const exploreData = [
  {
    title: "Rumtek Monastery",
    description:
      "Experience the spiritual aura and stunning architecture of Rumtek Monastery.",
    image: image1,
  },
  {
    title: "Ravangla Buddha Park",
    description:
      "Explore the serene Buddha Park nestled in the scenic hills of Sikkim.",
    image: image2,
  },
  {
    title: "Namgyal Institute of Tibetology",
    description:
      "Dive into Tibetan culture and heritage at this renowned institute.",
    image: image3,
  },
];

const Explore = () => {
  return (
    <div className="bg-white min-h-screen text-[#2C3E50]">
      <Navbar theme="light" />
      <div className="px-8 py-16">
        <h2 className="text-5xl font-bold text-center mb-16">
          Your Spiritual Journey
        </h2>
        <div className="relative border-l-4 border-[#2C3E50] ml-8">
          {exploreData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className={`mb-20 ml-6 flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full md:w-1/3 h-64 object-cover rounded-xl shadow-2xl border-4 border-[#2C3E50]"
              />
              <div className="md:w-2/3 md:px-8 mt-6 md:mt-0">
                <h3 className="text-3xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
              {/* Dot on timeline */}
              <div className="absolute -left-5 top-10 w-8 h-8 bg-[#2C3E50] rounded-full border-4 border-white"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
