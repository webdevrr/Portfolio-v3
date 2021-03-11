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
      <TriggerWrapper ref={triggerWrapperRef}>
        <Projects ref={projectsRefs} />
        {projects.map((project, index) => {
          return <Trigger key={index} index={index} ref={projectsRefs} />;
        })}
      </TriggerWrapper>
    </Section>
  );
};

export default ProjectsSection;
