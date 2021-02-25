import { Canvas } from "react-three-fiber";

import { OrbitControls } from "@react-three/drei";
import projects from "../../models/projects";

const Background = () => {
  return (
    <>
      <Canvas style={{ position: "fixed", backgroundColor: "#1b1b1d" }}>
        <ambientLight />
        <gridHelper args={[30, 30, 30]} />
        <axesHelper args={[10]} />
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default Background;
