import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import projects from "../../models/projects";
import Projects from "./Projects";

gsap.registerPlugin(ScrollTrigger);

interface Props {}

const Section = styled.section``;
const TriggerWrapper = styled.div`
  position: relative;
`;

const ProjectsSection = (props: Props) => {
  const [project, setProject] = useState(projects[0]);
  const projectsRefs = useRef(null);
  const triggerWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //pin
    ScrollTrigger.create({
      id: "Pin",
      trigger: triggerWrapperRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: projectsRefs.current.wrapper,
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        t.kill();
      });
    };
  }, []);

  return (
    <Section>
      <Projects project={project} ref={projectsRefs} />
    </Section>
  );
};

export default ProjectsSection;
