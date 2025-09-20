// components/Model.jsx
import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { scene } = useGLTF("/7d030d1e6a119fe282424c80d767715b.glb");
  return <primitive object={scene} {...props} />;
}

useGLTF.preload("/7d030d1e6a119fe282424c80d767715b.glb");
