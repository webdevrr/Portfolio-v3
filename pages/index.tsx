import { useState, useRef, useEffect } from "react";

import styled from "styled-components";
import gsap from "gsap";

import WelcomeSection from "../components/WelcomeSection/WelcomeSection";
import ContactSection from "../components/ContactSection/ContactSection";
import ProjectSection from "../components/ProjectSection/ProjectSection";
import Renderer from "../components/Scene/Renderer";
import Header from "../components/Header";

const Main = styled.main`
  background: #1b1b1d;
  overflow: hidden;
`;

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const main = useRef(null);
  const projects = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.to(main.current, {
      background: darkMode ? "#1b1b1d" : "#f0f0f0",
    });
  }, [darkMode]);

  return (
    <>
      <Header />
      <Main ref={main}>
        <WelcomeSection
          projectsRef={projects}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <Renderer
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          projectsRef={projects}
        />
        <ProjectSection ref={projects} />
        <ContactSection />
      </Main>
    </>
  );
}
