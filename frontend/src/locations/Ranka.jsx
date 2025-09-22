import React from "react";
import LocationTemplate from "./LocationTemplate";
import rankaImg1 from "../assets/ranka_monastery.png";
import rankaImg2 from "../assets/image1.png";
import rankaImg3 from "../assets/image2.png";

const Ranka = () => {
  return (
    <LocationTemplate
      name="Ranka Monastery"
      description="A beautiful monastery showcasing traditional Sikkimese architecture."
      locationInfo="East Sikkim, India"
      specialityPoints={[
        "Historic Buddhist monastery",
        "Traditional architecture",
        "Cultural and spiritual significance",
        "Popular among tourists and pilgrims",
      ]}
      detailedHistory={`Ranka Monastery, also known as Rumtek Monastery's smaller counterpart, is a serene place of worship. 
The monastery is surrounded by lush greenery and offers insight into Sikkimese Buddhist culture and traditions.`}
      images={[rankaImg1, rankaImg2, rankaImg3]}
      modelUrl="/Rumtek_Monastery.glb"
    />
  );
};

export default Ranka;
