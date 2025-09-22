import React, { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textSpeed = 0.7;
  const fadeStart = window.innerHeight * 0.4;
  const fadeEnd = window.innerHeight * 0.9;

  const getOpacity = (lineOffset) => {
    const start = fadeStart + lineOffset;
    const end = fadeEnd + lineOffset;
    if (scrollY <= start) return 1;
    if (scrollY >= end) return 0;
    const progress = (scrollY - start) / (end - start);
    return 1 - Math.pow(progress, 1.5);
  };

  const lines = [
    {
      text: "Discover the Mystical Land of",
      offset: 0,
      className: "uppercase tracking-widest text-sm text-gray-800 mb-3",
    },
    {
      text: "Mystical Monasteries of Sikkim",
      offset: 50,
      className:
        "text-5xl md:text-6xl font-extrabold text-gray-900 mb-2 leading-tight",
    },
    {
      text: "Monasteries",
      offset: 100,
      className:
        "text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight",
    },
    {
      text: "Embark on a spiritual journey through the serene monasteries, rich culture, and timeless traditions of Sikkim.",
      offset: 150,
      className: "text-lg md:text-xl max-w-xl text-gray-700 text-center",
    },
  ];

  return (
    <section className="relative w-full h-[200vh] overflow-hidden bg-[#B3E5FC]">
      {/* Large Clouds */}
      <div
        className="absolute top-[10%] left-[0%] cloud big-cloud"
        style={{ width: "480px", transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <img src="/clouds.png" alt="cloud" style={{ width: "100%" }} />
      </div>
      <div
        className="absolute top-[25%] right-[0%] cloud big-cloud"
        style={{ width: "600px", transform: `translateY(${scrollY * 0.4}px)` }}
      >
        <img src="/clouds.png" alt="cloud" style={{ width: "100%" }} />
      </div>
      <div
        className="absolute top-[40%] left-[15%] cloud big-cloud"
        style={{ width: "800px", transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <img src="/clouds.png" alt="cloud" style={{ width: "100%" }} />
      </div>

      {/* Medium Clouds */}
      <div
        className="absolute top-[15%] left-[50%] cloud med-cloud"
        style={{ width: "250px" }}
      >
        <img src="/clouds.png" alt="medium cloud" style={{ width: "100%" }} />
      </div>
      <div
        className="absolute top-[60%] right-[25%] cloud med-cloud"
        style={{ width: "220px" }}
      >
        <img src="/clouds.png" alt="medium cloud" style={{ width: "100%" }} />
      </div>
      <div
        className="absolute top-[35%] left-[30%] cloud med-cloud"
        style={{ width: "200px" }}
      >
        <img src="/clouds.png" alt="medium cloud" style={{ width: "100%" }} />
      </div>

      {/* Small Clouds */}
      <div
        className="absolute top-[5%] left-[70%] cloud small-cloud"
        style={{ width: "150px" }}
      >
        <img src="/clouds.png" alt="small cloud" style={{ width: "100%" }} />
      </div>
      <div
        className="absolute top-[55%] right-[35%] cloud small-cloud"
        style={{ width: "120px" }}
      >
        <img src="/clouds.png" alt="small cloud" style={{ width: "100%" }} />
      </div>
      <div
        className="absolute top-[70%] left-[40%] cloud small-cloud"
        style={{ width: "100px" }}
      >
        <img src="/clouds.png" alt="small cloud" style={{ width: "100%" }} />
      </div>

      {/* Text */}
      <div className="h-screen flex flex-col items-center justify-center relative z-10">
        {lines.map((line, index) => (
          <div
            key={index}
            className={`text-center px-4 ${line.className}`}
            style={{
              transform: `translateY(${scrollY * textSpeed}px)`,
              opacity: getOpacity(line.offset),
              transition: "opacity 0.2s linear",
            }}
          >
            {line.text}
          </div>
        ))}
      </div>

      {/* Mountain */}
      <div className="relative h-screen">
        <div className="sticky top-0 h-screen w-full z-20">
          <img
            src="/landing_image-2.png"
            alt="Mountain"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Cloud Animations */}
      <style>{`
        /* Big Clouds */
        @keyframes bigCloudAnim1 { 0%,100%{transform:scale(1) rotate(0deg) translateX(0);}25%{transform:scale(1.12) rotate(3deg) translateX(30px);}50%{transform:scale(1) rotate(-2deg) translateX(-20px);}75%{transform:scale(1.08) rotate(1.5deg) translateX(15px);} }
        @keyframes bigCloudAnim2 { 0%,100%{transform:scale(1) rotate(0deg) translateX(0);}25%{transform:scale(1.1) rotate(-3deg) translateX(-25px);}50%{transform:scale(1) rotate(2deg) translateX(20px);}75%{transform:scale(1.07) rotate(-1.5deg) translateX(-15px);} }
        @keyframes bigCloudAnim3 { 0%,100%{transform:scale(1) rotate(0deg) translateX(0);}25%{transform:scale(1.09) rotate(1.5deg) translateX(20px);}50%{transform:scale(1) rotate(-1.5deg) translateX(-15px);}75%{transform:scale(1.11) rotate(2deg) translateX(10px);} }

        .big-cloud:nth-child(1) { animation: bigCloudAnim1 15s ease-in-out infinite; }
        .big-cloud:nth-child(2) { animation: bigCloudAnim2 18s ease-in-out infinite; }
        .big-cloud:nth-child(3) { animation: bigCloudAnim3 20s ease-in-out infinite; }

        /* Medium Clouds */
        @keyframes medCloudAnim1 { 0%,100%{transform:translateX(0) scale(1) rotate(0deg);}50%{transform:translateX(35px) scale(1.05) rotate(1deg);} }
        @keyframes medCloudAnim2 { 0%,100%{transform:translateX(0) scale(1) rotate(0deg);}50%{transform:translateX(-40px) scale(1.04) rotate(-1deg);} }
        @keyframes medCloudAnim3 { 0%,100%{transform:translateX(0) scale(1) rotate(0deg);}50%{transform:translateX(30px) scale(1.03) rotate(1deg);} }

        .med-cloud:nth-child(4) { animation: medCloudAnim1 22s ease-in-out infinite; }
        .med-cloud:nth-child(5) { animation: medCloudAnim2 28s ease-in-out infinite; }
        .med-cloud:nth-child(6) { animation: medCloudAnim3 25s ease-in-out infinite; }

        /* Small Clouds */
        @keyframes smallCloudAnim1 { 0%,100%{transform:translateX(0) scale(1) rotate(0deg);}50%{transform:translateX(50px) scale(1.05) rotate(1deg);} }
        @keyframes smallCloudAnim2 { 0%,100%{transform:translateX(0) scale(1) rotate(0deg);}50%{transform:translateX(-60px) scale(1.04) rotate(-1deg);} }
        @keyframes smallCloudAnim3 { 0%,100%{transform:translateX(0) scale(1) rotate(0deg);}50%{transform:translateX(40px) scale(1.03) rotate(1deg);} }

        .small-cloud:nth-child(7) { animation: smallCloudAnim1 20s ease-in-out infinite; }
        .small-cloud:nth-child(8) { animation: smallCloudAnim2 25s ease-in-out infinite; }
        .small-cloud:nth-child(9) { animation: smallCloudAnim3 22s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Hero;
