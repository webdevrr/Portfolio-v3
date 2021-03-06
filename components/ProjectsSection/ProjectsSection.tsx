import { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

import projects from "../../models/projects";
import Projects from "./Projects";
import Trigger from "./Trigger";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

interface Props {}

const Section = styled.section``;
const TriggerWrapper = styled.div`
  position: relative;
`;

const ProjectsSection = (props: Props) => {
  const projectsRef = useRef(null);
  const triggerWrapperRef = useRef(null);

  useEffect(() => {
    //sctrollTo
    ScrollTrigger.create({
      id: "Projects",
      trigger: projectsRef.current,
      start: "top+=10px bottom",
      onEnter: () => {
        gsap.to(window, {
          scrollTo: { y: projectsRef.current, autoKill: false },
          duration: 1,
          ease: "power2.out",
        });
      },
    });
    //pin
    ScrollTrigger.create({
      // markers: true,
      id: "Pin",
      markers: true,
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
          return <Trigger key={index} />;
        })}
      </TriggerWrapper>
    </Section>
  );
};

export default ProjectsSection;
