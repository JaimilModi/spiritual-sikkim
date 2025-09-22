import React from "react";
import LocationTemplate from "./LocationTemplate";

import frontImg from "../assets/Namgyal-Institute-of-Tibetology-front.png";
import inside1Img from "../assets/Namgyal-Institute-of-Tibetology-inside.png";
import inside2Img from "../assets/Namgyal-Institute-of-Tibetology-inside-2.png";
import inside3Img from "../assets/Namgyal-Institute-of-Tibetology-inside-3.png";
import topImg from "../assets/Namgyal-Institute-of-Tibetology-top.png";

const Namgyal = () => {
  const images = [frontImg, inside1Img, inside2Img, inside3Img, topImg];

  const specialityPoints = [
    "Renowned research institute for Tibetan culture",
    "Extensive collection of ancient manuscripts and artifacts",
    "Architectural blend of traditional Tibetan and modern style",
    "Cultural programs and exhibitions held regularly",
  ];

  const detailedHistory = `Founded in 1958, the Namgyal Institute of Tibetology in Gangtok, Sikkim is dedicated to preserving and promoting Tibetan culture and heritage. It houses thousands of rare manuscripts, books, and historical artifacts, attracting scholars and tourists alike. The institute also engages in research, education, and cultural exchange programs.`;

  return (
    <LocationTemplate
      name="Namgyal Institute of Tibetology"
      description="A prestigious institute dedicated to the study and preservation of Tibetan culture, art, and heritage."
      locationInfo="Located in Gangtok, Sikkim, this institute serves as a museum and research center for Tibetan studies."
      images={images}
      modelUrl="/Namgyal_Institute_of_Tibetology.glb"
      specialityPoints={specialityPoints}
      detailedHistory={detailedHistory}
    />
  );
};

export default Namgyal;
