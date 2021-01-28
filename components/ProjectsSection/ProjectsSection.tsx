import ProjectDescription from "./ProjectDescription";
import ScrollingTypography from "./ScrollingTypography";
import projects from "../../models/projects";
import styled from "styled-components";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
  width: 100%;
  font-family: "Monument";
  display: flex;
`;

const ProjectsSection = () => {
  const projectDescRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      markers: true,
      trigger: sectionRef.current,
      start: "top 10%",
      pin: projectDescRef.current,
    });
  }, []);

  return (
    <Section ref={sectionRef}>
      <ProjectDescription ref={projectDescRef} />
      <ScrollingTypography projects={projects} />
    </Section>
  );
};

export default ProjectsSection;
