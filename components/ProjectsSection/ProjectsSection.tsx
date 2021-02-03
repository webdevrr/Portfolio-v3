import styled from "styled-components";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import ProjectDescription from "./ProjectDescription";
import Paralax from "./Paralax";

const Section = styled.section`
  width: 100%;
  font-family: "Monument";
  display: flex;
`;

const ProjectsSection = () => {
  const projectDescRef = useRef(null);
  const projectsSectionRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      markers: true,
      trigger: projectsSectionRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: projectDescRef.current,
    });
    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        t.kill();
      });
    };
  }, []);

  return (
    <Section ref={projectsSectionRef}>
      <ProjectDescription ref={projectDescRef} />
      <Paralax />
    </Section>
  );
};

export default ProjectsSection;
