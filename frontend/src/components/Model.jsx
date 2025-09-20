import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { scene } = useGLTF("/Rumtek_Monastery.glb");
  return <primitive object={scene} {...props} />;
}

useGLTF.preload("/Rumtek_Monastery.glb");
