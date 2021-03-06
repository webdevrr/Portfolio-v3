import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";
import Scene from "./Scene";
import Introduction from "./Introduction";
import Scroll from "react-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
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
  const scroller = Scroll.scroller;
  const sectionRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      markers: true,
      start: "bottom bottom-=25px",
      onEnter: () => {
        scroller.scrollTo("projects", {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
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
