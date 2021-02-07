import styled from "styled-components";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import ProjectDescription from "./ProjectDescription";
import ParalaxSection from "./ParalaxSection";

import projects from "../../models/projects";

const Section = styled.section`
  width: 100%;
  font-family: "Roboto";
  display: flex;
  color: white;
`;

const ProjectsSection = () => {
  const projectDescRef = useRef<HTMLDivElement>(null);
  const paralaxSectionRef = useRef<HTMLDivElement>(null);

  const [project, setProject] = useState(null);

  useEffect(() => {
    ScrollTrigger.create({
      markers: true,
      trigger: paralaxSectionRef.current,
      start: "top",
      end: "bottom 5%",
      pin: projectDescRef.current,
      onLeaveBack: () => setProject(null),
      onLeave: () => setProject(null),
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        t.kill();
      });
    };
  }, []);

  const changeProject = (index: number) => {
    setProject(projects[index]);
  };

  return (
    <Section>
      <ProjectDescription project={project} ref={projectDescRef} />
      <ParalaxSection changeProject={changeProject} ref={paralaxSectionRef} />
    </Section>
  );
};

export default ProjectsSection;
