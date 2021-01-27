import Sticky from "./Sticky";
import styled from "styled-components";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  font-family: "Monument";
  display: flex;
`;
const ProjectsSection = () => {
  const stickyRef = useRef<HTMLDivElement>(null);

  return (
    <Section>
      <Sticky ref={stickyRef} />
    </Section>
  );
};

export default ProjectsSection;
