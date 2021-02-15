import { useEffect } from "react";
import { Canvas } from "react-three-fiber";
import Box from "./Box";
import { calculatePositionsOnCircle } from "../../utils/helpers";

const Background = () => {
  console.log(calculatePositionsOnCircle(2, 12));
  return (
    <>
      <Canvas style={{ position: "fixed", backgroundColor: "#1b1b1d" }}>
        <Box />
      </Canvas>
    </>
  );
};

export default Background;
