import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigation
import image from "/src/assets/image3.png";

const CultureExperience = () => {
  const navigate = useNavigate(); // ✅ Hook for navigation

  const handleExploreClick = () => {
    navigate("/monasteries"); // ✅ Redirect to /monasteries
  };

  return (
    <section className="py-20 px-6 md:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="md:w-1/2">
          <img
            src={image}
            alt="Culture Experience"
            className="rounded-2xl shadow-xl transform transition duration-700 hover:scale-105"
          />
        </div>

        {/* Right Text */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-extrabold text-[#2C3E50] mb-4 animate-slideRight">
            Experience Sikkim's Rich Culture
          </h2>
          <p className="text-gray-600 mb-6 animate-slideLeft">
            Immerse yourself in vibrant festivals, traditional dances, and
            serene monasteries. Every corner of Sikkim tells a story.
          </p>
          <button
            onClick={handleExploreClick} // ✅ Added onClick event
            className="px-8 py-3 cursor-pointer bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 animate-pulse"
          >
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CultureExperience;
