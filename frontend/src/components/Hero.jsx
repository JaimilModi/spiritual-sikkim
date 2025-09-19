import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden pt-24 md:pt-0 bg-gradient-to-r from-[#3AAFA9]/20 via-[#FF6F61]/20 to-[#3AAFA9]/20">
      <div className="absolute inset-0 md:hidden">
        <img
          src="/home_image.png"
          alt="Sikkim Landscape"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3AAFA9]/20 via-[#FF6F61]/20 to-white/80" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center items-center md:items-start px-6 md:px-16 lg:px-24 space-y-6 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2C3E50] leading-snug">
          Explore <span className="text-[#3AAFA9]">Sikkim</span> –{" "}
          <span className="text-[#FF6F61]">Spiritual & Pristine</span>{" "}
          Destinations
        </h1>

        <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-lg">
          Discover ancient monasteries, breathtaking landscapes, and vibrant
          culture. Choose curated packages or customize your adventure for an
          unforgettable experience.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto">
          <button className="bg-[#3AAFA9] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#FF6F61] hover:scale-105 transition-all duration-500 shadow-md w-full sm:w-auto">
            Explore Packages
          </button>
          <button className="border-2 border-[#FF6F61] text-[#FF6F61] px-8 py-3 rounded-full font-semibold hover:bg-[#FF6F61] hover:text-white transition-all duration-500 w-full sm:w-auto">
            Plan Your Trip
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 mt-4">
          <div className="bg-[#3AAFA9]/20 px-4 py-2 rounded-full text-sm font-medium text-[#2C3E50]">
            100+ Monasteries
          </div>
          <div className="bg-[#FF6F61]/20 px-4 py-2 rounded-full text-sm font-medium text-[#2C3E50]">
            5000+ Happy Travelers
          </div>
        </div>
      </div>

      <div className="hidden md:block relative flex-1 w-full md:h-full">
        <img
          src="/home_image.png"
          alt="Sikkim Landscape"
          className="w-full h-full object-cover rounded-lg md:rounded-none shadow-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3AAFA9]/20 via-[#FF6F61]/20 to-white/80" />
      </div>

      {/* Floating bubbles */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-[#3AAFA9]/20 animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-28 h-28 rounded-full bg-[#FF6F61]/20 animate-pulse delay-500"></div>
      <div className="absolute bottom-1/4 left-16 w-24 h-24 rounded-full bg-[#3AAFA9]/10 animate-pulse delay-1000"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-[#FF6F61]/10 animate-pulse delay-1500"></div>

      <div className="absolute -bottom-10 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,64L48,96C96,128,192,192,288,213.3C384,235,480,213,576,181.3C672,149,768,107,864,96C960,85,1056,107,1152,133.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
