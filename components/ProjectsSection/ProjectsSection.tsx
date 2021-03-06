import { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import Projects from "./Projects";
import Trigger from "./Trigger";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

interface Props {}

const Section = styled.section`
  height: 100vh;
`;

const ProjectsSection = (props: Props) => {
  const projectsRef = useRef(null);

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
      id: "Pin",
      markers: true,
      trigger: projectsRef.current,
      start: "top",
      end: "bottom 5%",
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
      <Projects ref={projectsRef} />
    </Section>
  );
};

export default ProjectsSection;
