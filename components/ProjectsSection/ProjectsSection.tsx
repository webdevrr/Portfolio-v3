import { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import projects from "../../models/projects";
import Projects from "./Projects";
import Trigger from "./Trigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {}

const Section = styled.section``;
const TriggerWrapper = styled.div`
  position: relative;
`;

const ProjectsSection = (props: Props) => {
  const projectsRef = useRef(null);
  const triggerWrapperRef = useRef(null);

  useEffect(() => {
    //pin
    ScrollTrigger.create({
      id: "Pin",
      trigger: triggerWrapperRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: projectsRef.current,
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        t.kill();
      });
    };
  }, []);

  return (
    <Section>
      <TriggerWrapper ref={triggerWrapperRef}>
        <Projects ref={projectsRef} />
        {projects.map((project, index) => {
          return (
            <Trigger projectsRef={projectsRef} key={index} index={index} />
          );
        })}
      </TriggerWrapper>
    </Section>
  );
};

export default ProjectsSection;
