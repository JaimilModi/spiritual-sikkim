import React from "react";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";

const galleryImages = [
  {
    src: image3,
    title: "Buddhist Traditional Dancers",
    desc: "Experience the vibrant traditional dances at Rumtek Monastery, Sikkim.",
  },
  {
    src: image4,
    title: "Ranka Monastery",
    desc: "Serene landscapes surrounding Ranka Monastery in Gangtok, Sikkim.",
  },
  {
    src: image5,
    title: "Himalayan Peaks",
    desc: "Marvel at the majestic Kangchenjunga and pristine Himalayan landscapes near Sikkim.",
  },
];

const Gallery = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-gray-50">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#2C3E50] animate-fadeInUp">
        Explore the Hidden Gems of Sikkim
      </h2>
      <p className="text-gray-600 text-center mt-4 max-w-xl mx-auto text-lg md:text-xl animate-fadeInUp delay-200">
        A visual journey through the breathtaking landscapes, ancient
        monasteries, and vibrant culture that make Sikkim truly unforgettable.
      </p>

      {/* Desktop gallery */}
      <div className="hidden md:flex items-center gap-6 h-[450px] w-full max-w-6xl mt-12 mx-auto overflow-hidden">
        {galleryImages.map((img, i) => (
          <div
            key={i}
            className="relative group flex-grow transition-all w-56 h-[450px] duration-500 hover:w-full cursor-pointer"
          >
            <img
              className="h-full w-full object-cover object-center rounded-xl shadow-xl transform group-hover:scale-105 transition-transform duration-500"
              src={img.src}
              alt={img.title}
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl">
              <h3 className="text-2xl font-bold">{img.title}</h3>
              <p className="text-sm mt-1">{img.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile gallery */}
      <div className="flex md:hidden gap-4 h-[400px] overflow-x-auto snap-x snap-mandatory mt-12 px-2">
        {galleryImages.map((img, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 w-56 h-[400px] rounded-xl snap-start cursor-pointer shadow-lg"
          >
            <img
              className="h-full w-full object-cover object-center rounded-xl"
              src={img.src}
              alt={img.title}
            />
            {/* Always visible overlay on mobile */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/40 text-white rounded-b-xl">
              <h3 className="text-lg font-bold">{img.title}</h3>
              <p className="text-xs mt-1">{img.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
