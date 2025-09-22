import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowLeft,
  FiMaximize,
  FiMinimize,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

// Model Viewer Component
const ModelViewer = ({ modelUrl, fullscreen }) => {
  const gltf = useGLTF(modelUrl);
  const scale = fullscreen ? 2.5 : 1.8;
  return <primitive object={gltf.scene} scale={scale} />;
};

const LocationTemplate = ({
  name,
  description,
  images,
  modelUrl,
  locationInfo,
  specialityPoints = [],
  detailedHistory = "",
}) => {
  const navigate = useNavigate();
  const [fullscreen, setFullscreen] = useState(false);
  const [activeTab, setActiveTab] = useState(modelUrl ? "3d" : "images");
  const [currentImage, setCurrentImage] = useState(0);

  const totalImages = images.length;

  // Auto-play images every 3 seconds
  useEffect(() => {
    if (activeTab === "images" && totalImages > 1) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % totalImages);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [activeTab, totalImages]);

  const handleBack = () => {
    if (fullscreen) setFullscreen(false);
    else navigate(-1);
  };

  return (
    <div className="relative bg-gray-100 min-h-screen pt-24 md:pt-28">
      {/* Top Viewer */}
      <div className="relative w-full h-[500px] md:h-[700px] overflow-hidden rounded-xl shadow-lg">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="absolute top-4 left-4 z-40 flex items-center gap-2 bg-gray-50 p-2 rounded-full shadow hover:bg-gray-200 transition"
        >
          <FiArrowLeft className="text-lg text-teal-600" />
          <span className="hidden md:inline font-medium text-teal-600">
            Back
          </span>
        </button>

        {/* Fullscreen Button */}
        {!fullscreen && modelUrl && (
          <button
            onClick={() => setFullscreen(true)}
            className="absolute bottom-4 right-4 z-40 bg-gray-50 p-2 rounded-full shadow hover:bg-gray-200 transition"
          >
            <FiMaximize className="text-lg text-teal-600" />
          </button>
        )}

        {/* Tab Selector */}
        {modelUrl && !fullscreen && (
          <div className="absolute top-4 right-4 z-40 flex gap-2 bg-gray-50 rounded-full shadow overflow-hidden">
            {["3d", "images"].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 font-medium transition ${
                  activeTab === tab
                    ? "bg-teal-600 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "3d" ? "3D Model" : "Images"}
              </button>
            ))}
          </div>
        )}

        {/* Viewer */}
        <div className="w-full h-full flex items-center justify-center bg-gray-200 relative">
          <AnimatePresence mode="wait">
            {activeTab === "3d" && modelUrl ? (
              <motion.div
                key="3d"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-full"
              >
                <Canvas className="w-full h-full">
                  <ambientLight intensity={0.6} />
                  <directionalLight position={[5, 5, 5]} />
                  <ModelViewer modelUrl={modelUrl} fullscreen={fullscreen} />
                  <OrbitControls
                    enableZoom
                    enablePan
                    enableRotate
                    maxDistance={10}
                  />
                </Canvas>
              </motion.div>
            ) : (
              <motion.img
                key={currentImage}
                src={images[currentImage]}
                alt={`slide-${currentImage}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full object-cover rounded-xl"
              />
            )}
          </AnimatePresence>

          {/* Carousel Arrows */}
          {activeTab === "images" && totalImages > 1 && (
            <>
              <button
                onClick={() =>
                  setCurrentImage(
                    (prev) => (prev - 1 + totalImages) % totalImages
                  )
                }
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-40 bg-gray-50 p-2 rounded-full shadow hover:bg-gray-200 transition"
              >
                <FiChevronLeft className="text-2xl text-teal-600" />
              </button>
              <button
                onClick={() =>
                  setCurrentImage((prev) => (prev + 1) % totalImages)
                }
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-40 bg-gray-50 p-2 rounded-full shadow hover:bg-gray-200 transition"
              >
                <FiChevronRight className="text-2xl text-teal-600" />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Info Card */}
      <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row gap-6 mt-6">
        <div className="md:w-3/4 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-teal-700">{name}</h1>
          {locationInfo && <p className="text-gray-600">{locationInfo}</p>}
          {specialityPoints.length > 0 && (
            <ul className="list-disc list-inside text-gray-700">
              {specialityPoints.map((p, idx) => (
                <li key={idx}>{p}</li>
              ))}
            </ul>
          )}
          <p className="text-gray-500 mt-2">{description}</p>
          <button className="mt-4 bg-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-700 transition w-fit">
            Plan a Tour
          </button>
          {detailedHistory && (
            <div className="mt-6 bg-white p-6 rounded-xl shadow-lg text-gray-700 whitespace-pre-line">
              {detailedHistory}
            </div>
          )}
        </div>
      </div>

      {/* Fullscreen Overlay */}
      {fullscreen && (
        <div className="fixed inset-0 z-40 bg-white/90 flex flex-col items-center justify-start p-4 overflow-auto">
          <div className="w-full max-w-6xl mt-4 md:mt-8 relative">
            {/* Top Buttons */}
            <div className="flex justify-between items-center sticky top-28 z-40 bg-white/80 backdrop-blur-md rounded-xl p-2 shadow">
              {/* Back / Close */}
              <button
                onClick={() => setFullscreen(false)}
                className="flex items-center gap-2 bg-gray-100 p-2 rounded-full shadow hover:bg-gray-200 transition"
              >
                <FiMinimize className="text-lg text-teal-600" />
                <span className="hidden md:inline font-medium text-teal-600">
                  Close
                </span>
              </button>

              {/* Tab Selector */}
              <div className="flex gap-2 bg-gray-100 rounded-full shadow overflow-hidden">
                {["3d", "images"].map((tab) => (
                  <button
                    key={tab}
                    className={`px-4 py-2 font-medium transition ${
                      activeTab === tab
                        ? "bg-teal-600 text-white"
                        : "text-gray-700 hover:bg-gray-200"
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab === "3d" ? "3D Model" : "Images"}
                  </button>
                ))}
              </div>
            </div>

            {/* Viewer */}
            <div className="w-full h-[80vh] md:h-[90vh] mt-4 rounded-xl shadow-lg flex items-center justify-center bg-gray-100 relative">
              <AnimatePresence mode="wait">
                {activeTab === "3d" && modelUrl ? (
                  <motion.div
                    key="3d-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full h-full"
                  >
                    <Canvas className="w-full h-full rounded-xl">
                      <ambientLight intensity={0.6} />
                      <directionalLight position={[5, 5, 5]} />
                      <ModelViewer
                        modelUrl={modelUrl}
                        fullscreen={fullscreen}
                      />
                      <OrbitControls
                        enableZoom
                        enablePan
                        enableRotate
                        maxDistance={10}
                      />
                    </Canvas>
                  </motion.div>
                ) : (
                  <motion.img
                    key={currentImage + "-full"}
                    src={images[currentImage]}
                    alt={`slide-${currentImage}`}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full object-contain rounded-xl"
                  />
                )}
              </AnimatePresence>

              {/* Carousel Arrows */}
              {activeTab === "images" && totalImages > 1 && (
                <>
                  <button
                    onClick={() =>
                      setCurrentImage(
                        (prev) => (prev - 1 + totalImages) % totalImages
                      )
                    }
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 z-40 bg-gray-50 p-2 rounded-full shadow hover:bg-gray-200 transition"
                  >
                    <FiChevronLeft className="text-2xl text-teal-600" />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentImage((prev) => (prev + 1) % totalImages)
                    }
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 z-40 bg-gray-50 p-2 rounded-full shadow hover:bg-gray-200 transition"
                  >
                    <FiChevronRight className="text-2xl text-teal-600" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationTemplate;
