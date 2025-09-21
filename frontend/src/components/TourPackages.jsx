import React from "react";

const packages = [
  {
    title: "3 Days Spiritual Retreat",
    price: "₹8,999",
    desc: "Visit monasteries and explore the spiritual heart of Sikkim.",
  },
  {
    title: "Adventure Trek in Himalayas",
    price: "₹12,499",
    desc: "Trek through valleys, rivers, and high mountain passes.",
  },
  {
    title: "Family Cultural Tour",
    price: "₹10,999",
    desc: "Enjoy family-friendly sightseeing, culture, and nature walks.",
  },
];

const TourPackages = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#2C3E50] mb-12">
        Tour Packages
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {packages.map((pkg, i) => (
          <div
            key={i}
            className="bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.title}</h3>
            <p className="text-gray-600 mb-4">{pkg.desc}</p>
            <p className="text-indigo-600 font-semibold text-xl">{pkg.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TourPackages;
