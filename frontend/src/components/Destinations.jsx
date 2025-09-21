import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";

const destinations = [
  {
    src: image3,
    title: "Rumtek Monastery",
    desc: "One of the most famous monasteries in Sikkim, known for its rich culture.",
  },
  {
    src: image4,
    title: "Nathula Pass",
    desc: "A stunning mountain pass on the Indo-China border with breathtaking views.",
  },
  {
    src: image5,
    title: "Yumthang Valley",
    desc: "Also called the 'Valley of Flowers', full of vibrant meadows and hot springs.",
  },
  {
    src: image6,
    title: "Tsomgo Lake",
    desc: "A glacial lake at high altitude, offering stunning reflections of the Himalayas.",
  },
];

const Destinations = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#2C3E50] mb-4">
        Popular Destinations
      </h2>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
        From spiritual monasteries to breathtaking landscapes, explore the most
        visited attractions in Sikkim.
      </p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true} 
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          reverseDirection: false, 
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination", 
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto"
      >
        {destinations.map((place, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
              <img
                src={place.src}
                alt={place.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  {place.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">{place.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-pagination flex justify-center mt-6"></div>
    </section>
  );
};

export default Destinations;
