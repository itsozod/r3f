import { useAnimations, useGLTF } from "@react-three/drei";

import { useEffect, useRef } from "react";
import { Group } from "three";
useGLTF.preload("/robot_playground.glb");

export default function RobotModel() {
  const group = useRef<Group>(null);
  const { scene, animations } = useGLTF("/robot_playground.glb");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions && actions["Experiment"]) {
      actions["Experiment"].play();
    }
    return () => {
      actions["Experiment"]?.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <group ref={group} scale={1.5}>
      <primitive object={scene} />
    </group>
  );
}
