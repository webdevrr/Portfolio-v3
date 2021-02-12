import { useRef } from "react";
import { Canvas } from "react-three-fiber";
import Box from "./Box";
const Background = () => {
  return (
    <>
      <Canvas style={{ position: "fixed", backgroundColor: "#1b1b1d" }}>
        <Box />
      </Canvas>
    </>
  );
};

export default Background;
