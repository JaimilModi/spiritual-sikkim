import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Example testimonial images
import user1 from "../assets/image3.png";
import user2 from "../assets/image4.png";
import user3 from "../assets/image5.png";

const testimonials = [
  { name: "Amit Sharma", img: user1, review: "An unforgettable journey through Sikkim's monasteries and mountains!" },
  { name: "Neha Singh", img: user2, review: "Beautiful landscapes and rich culture, highly recommended!" },
  { name: "Rohit Verma", img: user3, review: "Excellent trip organization and breathtaking views everywhere!" },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-gray-50">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#2C3E50] mb-12">
        What Our Tourists Say
      </h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="max-w-4xl mx-auto"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <img
                src={t.img}
                alt={t.name}
                className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
              />
              <p className="text-gray-700 italic mb-4">"{t.review}"</p>
              <h3 className="text-lg font-semibold text-gray-800">{t.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
