import React from "react";
import { useNavigate } from "react-router-dom";

import nathulaImg from "../assets/Nathula-Pass.png";
import ravanglaImg from "../assets/Ravangla-buddga-park.png";
import rankaImg from "../assets/ranka_monastery.png";
import gangtokImg from "../assets/landing_image.png";

const locationsData = [
  {
    id: "nathula",
    name: "Nathula Pass",
    description:
      "Historic and scenic pass on the Indo-China border, surrounded by majestic mountains.",
    imageUrl: nathulaImg,
  },
  {
    id: "ravangla",
    name: "Ravangla Buddha Park",
    description:
      "A serene place with the giant Buddha statue and lush greenery.",
    imageUrl: ravanglaImg,
  },
  {
    id: "ranka",
    name: "Ranka Monastery",
    description:
      "Peaceful monastery known for its spiritual atmosphere and architecture.",
    imageUrl: rankaImg,
  },
  {
    id: "gangtok",
    name: "Gangtok City View",
    description: "Panoramic view of Gangtok city amidst mountains and rivers.",
    imageUrl: gangtokImg,
  },
];

const LocationCard = ({ location }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/location/${location.id}`)}
      className="relative rounded-xl overflow-hidden cursor-pointer group shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
    >
      <img
        src={location.imageUrl}
        alt={location.name}
        className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-4 left-4 text-white">
        <h2 className="text-2xl font-bold">{location.name}</h2>
        <p className="text-sm mt-1 max-w-xs">{location.description}</p>
      </div>
    </div>
  );
};

const SikkimImageGrid = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-8 pt-28">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-12">
        Discover the Beauty of Sikkim
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
        {locationsData.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
    </div>
  );
};

export default SikkimImageGrid;
