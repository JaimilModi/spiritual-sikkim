import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Model from "../components/Model";

const Fullscreen3D = () => {
  const containerRef = useRef();
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen bg-gradient-to-r from-[#3AAFA9]/20 via-[#FF6F61]/20 to-[#3AAFA9]/20 flex items-center justify-center overflow-hidden px-6"
    >
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-[#3AAFA9]/20 animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-28 h-28 rounded-full bg-[#FF6F61]/20 animate-pulse delay-500"></div>
      <div className="absolute bottom-1/4 left-16 w-24 h-24 rounded-full bg-[#3AAFA9]/10 animate-pulse delay-1000"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-[#FF6F61]/10 animate-pulse delay-1500"></div>

      <div className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-10 z-20">
        <div className="w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <Canvas camera={{ position: [0, 1, 3], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />

            <AutoRotate>
              <Model scale={1} position={[0, -0.5, 0]} />
            </AutoRotate>

            <OrbitControls
              enableZoom={true}
              enablePan={false}
              rotateSpeed={0.7}
              zoomSpeed={0.5}
            />
            <Environment preset="sunset" />
          </Canvas>
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left text-[#2C3E50]">
          <h1 className="text-3xl font-bold">Rumtek Monastery</h1>
          <p className="mt-4 text-lg leading-relaxed">
            Discover the spiritual and cultural essence of Rumtek Monastery, the
            seat of the Karmapa in Sikkim. Nestled in the Himalayas, it is known
            for its stunning architecture, golden stupa, and peaceful
            surroundings that attract pilgrims and travelers worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

const AutoRotate = ({ children }) => {
  const ref = useRef();
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.2;
    }
  });
  return <group ref={ref}>{children}</group>;
};

export default Fullscreen3D;
