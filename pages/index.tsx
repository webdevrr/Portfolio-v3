import styled from "styled-components";
import { useState, useRef, useEffect } from "react";

import gsap from "gsap";
import WelcomeSection from "../components/WelcomeSection/WelcomeSection";
import ContactSection from "../components/ContactSection/ContactSection";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";
import Renderer from "../components/Scene/Renderer";
import Header from "../components/Header";

const Main = styled.main`
  background: #1b1b1d;
  overflow: hidden;
`;

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const mainRef = useRef(null);
  const projectsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.to(mainRef.current, {
      background: darkMode ? "#1b1b1d" : "#f0f0f0",
    });
  }, [darkMode]);

  return (
    <>
      <Header />
      <Main ref={mainRef}>
        <WelcomeSection
          projectsRef={projectsRef}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <Renderer
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          projectsRef={projectsRef}
        />
        <ProjectsSection ref={projectsRef} />
        <ContactSection />
      </Main>
    </>
  );
}
