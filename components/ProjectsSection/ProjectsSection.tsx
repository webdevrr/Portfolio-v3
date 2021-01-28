import Sticky from "./Sticky";
import styled from "styled-components";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
  width: 100%;
  height: 100vh;
  font-family: "Monument";
  display: flex;
`;

const ProjectsSection = () => {
  const stickyRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({ markers: true });
  }, []);

  return (
    <Section>
      <Sticky ref={stickyRef} />
    </Section>
  );
};

export default ProjectsSection;
