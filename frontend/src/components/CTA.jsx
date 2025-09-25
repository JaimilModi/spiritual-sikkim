import React from "react";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/trip");
  };

  return (
    <section className="py-20 px-6 md:px-16 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white text-center rounded-xl mx-6 md:mx-16 mb-10">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
        Ready to Explore Sikkim?
      </h2>
      <p className="text-lg md:text-xl mb-8">
        Start planning your unforgettable journey to the Himalayan paradise
        today!
      </p>
      <button
        onClick={handleClick}
        className="px-10 py-4 bg-white text-indigo-600 cursor-pointer font-bold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 animate-pulse"
      >
        Plan My Trip
      </button>
    </section>
  );
};

export default CTA;
