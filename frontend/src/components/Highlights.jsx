// Highlights.jsx
import React from "react";
import { motion } from "framer-motion"; // for animation

const highlights = [
  {
    icon: "",
    title: "Mountains & Lakes",
    desc: "Explore the breathtaking Himalayan peaks and serene high-altitude lakes.",
  },
  {
    icon: "",
    title: "Spiritual Monasteries",
    desc: "Experience peace and spirituality in centuries-old monasteries.",
  },
  {
    icon: "",
    title: "Festivals & Culture",
    desc: "Immerse yourself in vibrant festivals and unique cultural traditions.",
  },
  {
    icon: "",
    title: "Adventure & Nature",
    desc: "Discover lush valleys, trekking trails, and untouched natural beauty.",
  },
];

const Highlights = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
          Discover Sikkim at a Glance
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
