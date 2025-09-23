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
      detailedHistory={`Ranka Monastery, also known as Lingdum Monastery, is a serene place of worship located near Gangtok. 
The monastery is surrounded by lush greenery and offers insight into Sikkimese Buddhist culture and traditions.`}
      images={[rankaImg1, rankaImg2, rankaImg3]}
      modelUrl="/Rumtek_Monastery.glb"
      mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28758.699225112713!2d88.678851!3d27.314846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a5a34a7afccf%3A0xa7f8dbe05c5c1d6!2sLingdum%20(Ranka)%20Monastery!5e0!3m2!1sen!2sin!4v1695385512345!5m2!1sen!2sin"
    />
  );
};

export default Ranka;
