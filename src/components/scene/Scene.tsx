import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import RobotModel from "../model/robot/RobotModel";
import { OrbitControls } from "@react-three/drei";
import EarthModel from "../model/earth/EarthModel";

const Scene = () => {
  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Canvas>
        <ambientLight intensity={4} />
        <directionalLight position={[5, 5, 5]} intensity={5} />
        <pointLight position={[-5, -5, -5]} intensity={5} />
        <OrbitControls />
        <Suspense fallback={null}>
          <RobotModel />
          <EarthModel />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
