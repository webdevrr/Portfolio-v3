import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";
import Scene from "./Scene";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;
const Invitation = styled.div`
  width: 50%;
  height: 100%;
`;
const WelcomeSection = () => {
  return (
    <Section>
      <Invitation />
      <Canvas
        pixelRatio={[1, 2]}
        style={{ width: "50%", backgroundColor: "transparent" }}
      >
        <Scene />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </Section>
  );
};

export default WelcomeSection;
