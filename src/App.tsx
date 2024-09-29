// import { Canvas } from "@react-three/fiber";
import "./App.css";
// import Box from "./components/box/Box";
import Scene from "./components/scene/Scene";

function App() {
  return (
    <>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // minHeight: "100vh",
          flexDirection: "column",
        }}
      > */}
        {/* <div>React three fiber</div> */}
        {/* <Canvas>
          <ambientLight intensity={Math.PI / 2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            decay={0}
            intensity={Math.PI}
          />
          <pointLight
            position={[-10, -10, -10]}
            decay={0}
            intensity={Math.PI}
          />
          <Box position={[-1.2, 0, 0]} />
        </Canvas> */}
        <Scene />
      {/* </div> */}
    </>
  );
}

export default App;
