import { Dispatch, SetStateAction } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";
import Scene from "./Scene";
import Invitation from "./Invitation";

interface Props {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const WelcomeSection = ({ darkMode, setDarkMode }: Props) => {
  return (
    <Section>
      <Invitation darkMode={darkMode} />
      {/* <Canvas
        pixelRatio={[1, 2]}
        style={{ width: "50%", backgroundColor: "transparent" }}
      >
        <Scene darkMode={darkMode} setDarkMode={setDarkMode} />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas> */}
    </Section>
  );
};

export default WelcomeSection;
