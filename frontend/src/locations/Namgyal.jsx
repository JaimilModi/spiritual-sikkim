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
      mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28758.02477624413!2d88.598643!3d27.325201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a59cc3a3db61%3A0xa6b13caa3cd59adf!2sNamgyal%20Institute%20of%20Tibetology!5e0!3m2!1sen!2sin!4v1695386512345!5m2!1sen!2sin"
    />
  );
};

export default Namgyal;
