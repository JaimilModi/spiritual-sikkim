import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowLeft,
  FiMaximize,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const ModelViewer = ({ modelUrl, fullscreen }) => {
  const gltf = useGLTF(modelUrl);
  const ref = useRef();
  const scale = fullscreen ? 2.5 : 1.8;

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
    }
  });

  return <primitive ref={ref} object={gltf.scene} scale={scale} />;
};

const LocationTemplate = ({
  name,
  description,
  images,
  modelUrl,
  locationInfo,
  specialityPoints = [],
  detailedHistory = "",
  mapUrl,
}) => {
  const navigate = useNavigate();
  const [fullscreen, setFullscreen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const totalImages = images.length;

  useEffect(() => {
    if (totalImages > 1) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % totalImages);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [totalImages]);

  const handleBack = () => {
    if (fullscreen) {
      setFullscreen(false);
    } else {
      navigate("/monasteries");
    }
  };

  // Theme colors
  const primaryColor = "#2C3E50";
  const accentColor = "#3AAFA9";
  const bgColor = "#F3F4F6";
  const cardBg = "#FFFFFF";

  return (
    <div
      className="min-h-screen relative"
      style={{ backgroundColor: bgColor, paddingTop: "6rem" }}
    >
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="fixed top-20 left-4 z-[9999] flex items-center gap-2 px-4 py-2 rounded-full shadow hover:brightness-105 transition"
        style={{ backgroundColor: "white" }}
      >
        <FiArrowLeft className="text-lg" style={{ color: accentColor }} />
        <span
          className="hidden sm:inline font-medium"
          style={{ color: primaryColor }}
        >
          Back
        </span>
      </button>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10 p-6">
        {/* Left Panel */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <h1
            className="text-4xl md:text-5xl font-bold"
            style={{ color: primaryColor }}
          >
            {name}
          </h1>
          {locationInfo && (
            <p className="text-lg" style={{ color: primaryColor }}>
              {locationInfo}
            </p>
          )}

          {specialityPoints.length > 0 && (
            <div className="mt-2">
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: accentColor }}
              >
                Highlights
              </h3>
              <ul
                className="list-disc list-inside space-y-1"
                style={{ color: primaryColor }}
              >
                {specialityPoints.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          )}

          <div
            className="mt-4 text-lg leading-relaxed"
            style={{ color: primaryColor }}
          >
            {description}
          </div>

          {detailedHistory && (
            <div
              className="mt-6 p-6 rounded-xl shadow-lg"
              style={{
                backgroundColor: cardBg,
                color: primaryColor,
                whiteSpace: "pre-line",
              }}
            >
              {detailedHistory}
            </div>
          )}
        </div>

        {/* 3D Model Panel */}
        <div className="md:w-1/2 relative w-full h-[500px] md:h-[600px] rounded-xl shadow-lg bg-white">
          {!fullscreen && modelUrl && (
            <button
              onClick={() => setFullscreen(true)}
              className="absolute bottom-4 right-4 z-40 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
            >
              <FiMaximize className="text-lg" style={{ color: accentColor }} />
            </button>
          )}
          <Canvas className="w-full h-full rounded-xl">
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} />
            {modelUrl && (
              <ModelViewer modelUrl={modelUrl} fullscreen={fullscreen} />
            )}
            <OrbitControls enableZoom enablePan enableRotate maxDistance={10} />
          </Canvas>
        </div>
      </div>

      {/* Fullscreen 3D */}
      {fullscreen && modelUrl && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 overflow-auto"
          style={{ backgroundColor: "rgba(243,244,246,0.95)" }}
        >
          <button
            onClick={handleBack}
            className="absolute top-6 left-6 z-[9999] flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow hover:bg-gray-100 transition"
          >
            <FiArrowLeft className="text-lg" style={{ color: accentColor }} />
            <span
              className="hidden sm:inline font-medium"
              style={{ color: primaryColor }}
            >
              Back
            </span>
          </button>
          <Canvas className="w-full h-[90vh] rounded-xl bg-white">
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} />
            <ModelViewer modelUrl={modelUrl} fullscreen={fullscreen} />
            <OrbitControls enableZoom enablePan enableRotate maxDistance={10} />
          </Canvas>
        </div>
      )}

      {/* Image Slider */}
      <div className="w-full py-20 flex justify-center">
        <div className="w-full max-w-4xl relative rounded-xl overflow-hidden shadow-lg bg-white">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={images[currentImage]}
              alt={`slide-${currentImage}`}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
              className="w-full h-[500px] object-cover rounded-xl"
            />
          </AnimatePresence>

          {totalImages > 1 && (
            <>
              <button
                onClick={() =>
                  setCurrentImage(
                    (prev) => (prev - 1 + totalImages) % totalImages
                  )
                }
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-40 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
              >
                <FiChevronLeft
                  className="text-2xl"
                  style={{ color: primaryColor }}
                />
              </button>
              <button
                onClick={() =>
                  setCurrentImage((prev) => (prev + 1) % totalImages)
                }
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-40 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
              >
                <FiChevronRight
                  className="text-2xl"
                  style={{ color: primaryColor }}
                />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Map & Action Buttons */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 p-6">
        {mapUrl ? (
          <div className="md:w-1/2 w-full h-[500px] rounded-xl overflow-hidden relative">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Location Map"
            ></iframe>
            <a
              href={mapUrl.replace("/embed", "")}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 px-4 py-2 rounded-lg shadow transition"
              style={{ backgroundColor: accentColor, color: "#FFFFFF" }}
            >
              Open in Google Maps
            </a>
          </div>
        ) : (
          <div
            className="md:w-1/2 w-full h-[500px] rounded-xl flex items-center justify-center"
            style={{
              backgroundColor: "#E5E7EB",
              color: primaryColor,
              fontSize: "1.25rem",
            }}
          >
            Map here
          </div>
        )}

        <div className="md:w-1/2 flex flex-col gap-6">
          <h2 className="text-3xl font-bold" style={{ color: primaryColor }}>
            More About {name}
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: primaryColor }}
          >
            {locationInfo || "Additional description of the place goes here."}
          </p>
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => navigate("/tour")}
              className="px-6 py-3 rounded-xl font-semibold transition cursor-pointer"
              style={{ backgroundColor: accentColor, color: "#FFFFFF" }}
            >
              Plan a Tour
            </button>
            <button
              onClick={() => navigate("/events")}
              className="px-6 py-3 rounded-xl font-semibold transition cursor-pointer"
              style={{ backgroundColor: "#10B981", color: "#FFFFFF" }}
            >
              View Cultural Events
            </button>
          </div>

          {detailedHistory && (
            <div
              className="mt-4 p-4 rounded-xl shadow whitespace-pre-line"
              style={{ backgroundColor: cardBg, color: primaryColor }}
            >
              {detailedHistory}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationTemplate;
