// Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      // 🔽 Replace with your image path
      style={{ backgroundImage: "url('/src/assets/image5.png')" }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Discover the Beauty of Spiritual Sikkim
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Experience the peaceful monasteries, breathtaking landscapes, and
          soulful journeys that connect tradition with serenity.
        </p>
        <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 transition duration-300 rounded-lg shadow-lg font-medium">
          Start Your Journey
        </button>
      </div>
    </section>
  );
};

export default Hero;
