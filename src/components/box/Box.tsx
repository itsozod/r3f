import { ThreeElements, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

const Box = (props: ThreeElements["mesh"]) => {
  const meshBoxRef = useRef<THREE.Mesh>(null!);
  const [active, setActive] = useState(false);
  useFrame((_, delta) => (meshBoxRef.current.rotation.x += delta));
  return (
    <mesh
      {...props}
      scale={active ? 1.5 : 1}
      ref={meshBoxRef}
      onClick={() => setActive(!active)}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={"hotpink"} />
    </mesh>
  );
};

export default Box;
