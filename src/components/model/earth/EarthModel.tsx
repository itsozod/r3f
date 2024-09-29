import { useEffect, useRef } from "react";
import { Group } from "three";
import { useAnimations, useGLTF } from "@react-three/drei";

useGLTF.preload("/earth__terra_-_downloadable_model.glb");
export default function EarthModel() {
  const group = useRef<Group>(null);

  const { scene, animations } = useGLTF(
    "/earth__terra_-_downloadable_model.glb"
  );
  const { actions } = useAnimations(animations, scene);

  console.log(actions);

  useEffect(() => {
    if (actions && actions["ArmatureAction"]) {
      actions["ArmatureAction"].play();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <group ref={group} scale={1} position={[0, -1, 0]}>
      <primitive object={scene} />
    </group>
  );
}
