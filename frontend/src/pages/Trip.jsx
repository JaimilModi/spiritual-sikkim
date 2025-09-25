import React from "react";
import { motion } from "framer-motion";

import trip1 from "../assets/image3.png";
import trip2 from "../assets/image4.png";
import trip3 from "../assets/image5.png";
import trip4 from "../assets/image6.png";

const trips = [
  {
    src: trip1,
    title: "Monastery Exploration Tour",
    duration: "3 Days / 2 Nights",
    desc: "Explore the most iconic monasteries in Gangtok and Rumtek with guided tours.",
  },
  {
    src: trip2,
    title: "Himalayan Adventure Trip",
    duration: "5 Days / 4 Nights",
    desc: "Trek through scenic valleys and enjoy the breathtaking Himalayan landscapes.",
  },
  {
    src: trip3,
    title: "Valley of Flowers & Yumthang",
    duration: "2 Days / 1 Night",
    desc: "Visit the serene Yumthang Valley and experience nature's vibrant colors.",
  },
  {
    src: trip4,
    title: "Tsomgo Lake & Nathula Pass",
    duration: "1 Day",
    desc: "Witness the beauty of glacial Tsomgo Lake and the majestic Nathula Pass.",
  },
];

const Trip = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-[#2C3E50] mb-6"
        >
          Explore Sikkim Trips
        </motion.h1>
        <motion.p
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 text-center mb-16 max-w-3xl mx-auto"
        >
          Plan your next adventure with curated trips and itineraries covering Sikkim’s
          monasteries, valleys, lakes, and cultural landmarks. Each trip is designed
          to offer an immersive experience.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trips.map((trip, i) => (
            <motion.div
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white shadow-2xl rounded-3xl overflow-hidden hover:shadow-3xl transition duration-500"
            >
              <img
                src={trip.src}
                alt={trip.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#2C3E50]">{trip.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{trip.duration}</p>
                <p className="text-gray-600 mt-4">{trip.desc}</p>
                <button className="mt-6 w-full bg-[#16A085] text-white py-3 cursor-pointer rounded-lg font-semibold hover:bg-[#13856E] transition">
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trip;