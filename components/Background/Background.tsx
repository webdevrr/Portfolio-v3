import { useRef } from "react";
import { Canvas } from "react-three-fiber";

const Background = () => {
  return (
    <>
      <Canvas style={{ position: "fixed", backgroundColor: "#1b1b1d" }}>
        <pointLight position={[10, 10, 10]} />
        <mesh>
          <boxBufferGeometry />
          <meshStandardMaterial color="yellow" />
        </mesh>
      </Canvas>
    </>
  );
};

export default Background;
