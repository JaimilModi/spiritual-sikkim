import React from "react";
import LocationTemplate from "./LocationTemplate";
import nathulaImg1 from "../assets/Nathula-Pass.png";
import nathulaImg2 from "../assets/ranka_monastery.png"; // sample second image

const Nathula = () => {
  return (
    <LocationTemplate
      name="Nathula Pass"
      description="A historic and scenic mountain pass on the Indo-China border, surrounded by majestic mountains."
      locationInfo="East Sikkim, India"
      specialityPoints={[
        "Strategic military location",
        "Scenic Himalayan views",
        "Part of the ancient Silk Route",
        "Popular among tourists for photography",
      ]}
      detailedHistory={`Nathula Pass is a mountain pass in the Himalayas, located at an elevation of 4,310 meters (14,140 ft). 
It connects India with the Tibet Autonomous Region of China and was part of the historic Silk Route. 
Tourists often visit to witness the breathtaking landscapes and to explore the Indo-China border area. 
Special permits are required for foreign nationals.`}
      images={[nathulaImg1, nathulaImg2]}
      modelUrl="/Nathula_Pass_Complex.glb"
      mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28483.3802529672!2d88.759216!3d27.386994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a6f7b3c2bcb9%3A0x1f1c28b1c52f9c4d!2sNathuLa%20Pass!5e0!3m2!1sen!2sin!4v1695383512345!5m2!1sen!2sin"
    />
  );
};

export default Nathula;
