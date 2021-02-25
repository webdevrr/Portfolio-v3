import styled from "styled-components";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import ProjectDescription from "./ProjectDescription";
import TriggerSection from "./TriggerSection";
import Background from "../Background/Background";
import projects from "../../models/projects";

const Section = styled.section`
  width: 100%;
  font-family: "Roboto";
  display: flex;
  color: white;
`;

const ProjectsSection = () => {
  const projectDescRef = useRef<HTMLDivElement>(null);
  const triggerSectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  const [project, setProject] = useState(null);

  useEffect(() => {
    //Description
    ScrollTrigger.create({
      markers: true,
      trigger: triggerSectionRef.current,
      start: "top",
      end: "bottom bottom",
      pin: projectDescRef.current,
      onLeaveBack: () => setProject(null),
      onLeave: () => setProject(null),
    });
    //Canvas
    ScrollTrigger.create({
      // markers: true,
      trigger: triggerSectionRef.current,
      start: "top",
      end: "bottom bottom",
      pin: canvasRef.current,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);

  const changeProject = (index: number) => {
    setProject(projects[index]);
  };

  return (
    <Section>
      <Background ref={canvasRef} />
      <ProjectDescription project={project} ref={projectDescRef} />
      <TriggerSection changeProject={changeProject} ref={triggerSectionRef} />
    </Section>
  );
};

export default ProjectsSection;
