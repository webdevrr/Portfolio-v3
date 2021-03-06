import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";
import Scene from "./Scene";
import Introduction from "./Introduction";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

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
`;

const WelcomeSection = ({ darkMode, setDarkMode }: Props) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      id: "Welcome",
      trigger: sectionRef.current,
      end: "bottom top+=10px",
      onEnterBack: () => {
        gsap.to(window, {
          scrollTo: { y: sectionRef.current, autoKill: false },
          duration: 1,
          ease: "power2.out",
        });
      },
    });
    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        t.kill();
      });
    };
  }, []);

  return (
    <Section ref={sectionRef}>
      <Introduction darkMode={darkMode} />
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
