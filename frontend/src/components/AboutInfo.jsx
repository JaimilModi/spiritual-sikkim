import React from "react";
import { motion } from "framer-motion";
import image1 from "../assets/image1.png"; // replace with your own

const AboutInfo = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20 text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-6 text-[#2C3E50]"
        >
          About <span className="text-[#16A085]">Spiritual Sikkim</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12"
        >
          A digital heritage platform dedicated to preserving and showcasing the
          spiritual, historical, and cultural richness of Sikkim’s monasteries.
        </motion.p>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              To digitize and make accessible the cultural treasures of Sikkim’s
              monasteries through immersive experiences, interactive maps, and
              educational resources.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-600">
              We aim to preserve endangered heritage and bring global awareness,
              ensuring that the legacy of Sikkim’s monasteries inspires
              generations worldwide.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src={image1}
              alt="Monastery"
              className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>

        {/* Key Features */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-10 text-[#2C3E50]"
        >
          Key Features
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Virtual Tours",
              desc: "360° panoramic monastery views with narrated walkthroughs.",
            },
            {
              title: "Interactive Map",
              desc: "Geo-tagged monastery locations, routes, and nearby attractions.",
            },
            {
              title: "Digital Archives",
              desc: "Scanned manuscripts, murals, and rare documents.",
            },
            {
              title: "Smart Audio Guide",
              desc: "GPS/Bluetooth-based audio guides with offline support.",
            },
            {
              title: "Cultural Calendar",
              desc: "Festival and ritual schedules with booking options.",
            },
            {
              title: "AI Chatbot Assistance",
              desc: "Categorization and quick access for tourists & researchers.",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-[#16A085]">
                {f.title}
              </h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-[#2C3E50]">Impact</h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Spiritual Sikkim boosts tourism, preserves endangered cultural
            assets, empowers local communities, and supports global educational
            and spiritual exploration.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutInfo;
