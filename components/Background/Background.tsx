import { Canvas } from "react-three-fiber";

const Background = () => {
  return (
    <>
      <Canvas style={{ position: "fixed" }}>
        <ambientLight intensity={2} />
      </Canvas>
    </>
  );
};

export default Background;
