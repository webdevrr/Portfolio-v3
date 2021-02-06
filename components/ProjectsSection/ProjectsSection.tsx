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

  const [project, setProject] = useState(projects[1]);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    ScrollTrigger.create({
      markers: true,
      trigger: paralaxSectionRef.current,
      start: "top",
      onEnter: () => setIsContentVisible(true),
      onLeaveBack: () => setIsContentVisible(false),
      onLeave: () => setIsContentVisible(false),
      onEnterBack: () => setIsContentVisible(true),
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
    <Section>
      <ProjectDescription
        isContentVisible={isContentVisible}
        project={project}
        ref={projectDescRef}
      />
      <ParalaxSection ref={paralaxSectionRef} />
    </Section>
  );
};

export default ProjectsSection;
