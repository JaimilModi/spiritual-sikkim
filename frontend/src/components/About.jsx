import React from "react";
import { GiMountainCave, GiMeditation, GiHiking } from "react-icons/gi";

const About = () => {
  return (
    <section
      id="about-sikkim"
      className="relative py-24 px-6 md:px-16 bg-gradient-to-b from-[#FFFAF9] to-[#F0FFF4] overflow-hidden"
    >
      <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-[1200px] h-[600px] bg-[#3AAFA9]/10 rounded-full -rotate-12"></div>
      <div className="absolute -bottom-32 right-1/3 w-[1000px] h-[500px] bg-[#FF6F61]/10 rounded-full rotate-6"></div>

      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#3AAFA9] mb-6">
          Welcome to <span className="text-[#FF6F61]">Sikkim Trails</span>
        </h2>
        <p className="text-gray-700 text-lg md:text-xl mb-12 leading-relaxed">
          Immerse yourself in the{" "}
          <span className="text-[#3AAFA9]/80 font-semibold">
            spiritual serenity
          </span>
          and{" "}
          <span className="text-[#FF6F61]/80 font-semibold">
            breathtaking landscapes
          </span>{" "}
          of Sikkim. Discover ancient monasteries, hidden valleys, and vibrant
          local culture that promise memories to last a lifetime.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="flex flex-col items-center bg-white p-8 rounded-3xl shadow-lg border-t-4 border-[#3AAFA9] hover:scale-105 transition-transform duration-500">
            <GiMountainCave className="text-5xl text-[#3AAFA9] mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Scenic Monasteries
            </h3>
            <p className="text-gray-600 text-sm">
              Explore majestic monasteries nestled in peaceful surroundings.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white p-8 rounded-3xl shadow-lg border-t-4 border-[#FF6F61] hover:scale-105 transition-transform duration-500">
            <GiMeditation className="text-5xl text-[#FF6F61] mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Spiritual Journey
            </h3>
            <p className="text-gray-600 text-sm">
              Find inner peace through meditation and cultural experiences.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white p-8 rounded-3xl shadow-lg border-t-4 border-[#3AAFA9] hover:scale-105 transition-transform duration-500">
            <GiHiking className="text-5xl text-[#3AAFA9] mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Adventure Trails
            </h3>
            <p className="text-gray-600 text-sm">
              Hike and explore the pristine valleys and mountain trails.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
