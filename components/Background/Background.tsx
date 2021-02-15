import { useEffect } from "react";
import { Canvas, extend } from "react-three-fiber";
import Box from "./Box";
import { calculatePositionsOnCircle } from "../../utils/helpers";
import { OrbitControls } from "@react-three/drei";
const Background = () => {
  return (
    <>
      <Canvas style={{ position: "fixed", backgroundColor: "#1b1b1d" }}>
        {calculatePositionsOnCircle(4, 1).map((coords, index) => {
          return <Box position={[...coords, 0]} key={index} />;
        })}
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default Background;
