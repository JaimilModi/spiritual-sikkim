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
      images={[nathulaImg1, nathulaImg2]} // For page 2 carousel
      modelUrl="/Nathula_Pass_Complex.glb" // For page 1 3D model
    />
  );
};

export default Nathula;
