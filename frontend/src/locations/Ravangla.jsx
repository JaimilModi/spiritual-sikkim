import React from "react";
import LocationTemplate from "./LocationTemplate";
import ravanglaImg1 from "../assets/Ravangla-buddga-park.png";
import ravanglaImg2 from "../assets/image1.png";
import ravanglaImg3 from "../assets/image2.png";
import ravanglaImg4 from "../assets/image3.png";

const Ravangla = () => {
  return (
    <LocationTemplate
      name="Ravangla Buddha Park"
      description="Famous for the giant Buddha statue and serene park setting."
      locationInfo="South Sikkim, India"
      specialityPoints={[
        "Giant Buddha statue",
        "Peaceful park environment",
        "Panoramic Himalayan views",
        "Ideal for meditation and photography",
      ]}
      detailedHistory={`Ravangla Buddha Park, also known as Tathagata Tsal, is a spiritual and cultural landmark in Sikkim. 
It features a 130-foot Buddha statue and beautifully landscaped gardens. 
The park is a major attraction for tourists and devotees, offering meditation spaces and cultural exhibits.`}
      images={[ravanglaImg1, ravanglaImg2, ravanglaImg3, ravanglaImg4]}
      modelUrl="/Ravangla-buddha.glb"
    />
  );
};

export default Ravangla;
