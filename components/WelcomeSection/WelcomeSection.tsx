import { Dispatch, SetStateAction } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

import Scene from "./Scene";
import Introduction from "./Introduction";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

interface Props {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

const WelcomeSection = ({ darkMode, setDarkMode }: Props) => {
  return (
    <Section>
      <Introduction darkMode={darkMode} />
      <Canvas
        pixelRatio={[1, 2]}
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "transparent",
          position: "fixed",
        }}
      >
        <Scene darkMode={darkMode} setDarkMode={setDarkMode} />
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
