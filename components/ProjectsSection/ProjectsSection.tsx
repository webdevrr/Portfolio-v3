import styled from "styled-components";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import ProjectDescription from "./ProjectDescription";
import Paralax from "./Paralax";

import projects from "../../models/projects";

const Section = styled.section`
  width: 100%;
  font-family: "Roboto";
  display: flex;
  color: white;
`;

const ProjectsSection = () => {
  const projectDescRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const [project, setProject] = useState(projects[1]);

  useEffect(() => {
    ScrollTrigger.create({
      markers: true,
      trigger: projectsSectionRef.current,
      start: "top",
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
      <ProjectDescription project={project} ref={projectDescRef} />
      <Paralax />
    </Section>
  );
};

export default ProjectsSection;
