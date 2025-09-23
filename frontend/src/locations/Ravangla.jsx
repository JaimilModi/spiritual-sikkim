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
      mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28751.940524858377!2d88.360463!3d27.315680!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a5115a3b1b9f%3A0x2e85d2c8f0f2d0f4!2sBuddha%20Park%20of%20Ravangla!5e0!3m2!1sen!2sin!4v1695384512345!5m2!1sen!2sin"
    />
  );
};

export default Ravangla;
