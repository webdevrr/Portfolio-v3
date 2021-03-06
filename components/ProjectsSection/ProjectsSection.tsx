import { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

interface Props {}

const Section = styled.section`
  height: 100vh;
`;

const ProjectsSection = (props: Props) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      id: "Projects",
      trigger: sectionRef.current,
      start: "top+=10px bottom",
      onEnter: () => {
        gsap.to(window, {
          scrollTo: { y: sectionRef.current, autoKill: false },
          duration: 1,
          ease: "power2.out",
        });
      },
    });
    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        t.kill();
      });
    };
  }, []);

  return <Section ref={sectionRef}></Section>;
};

export default ProjectsSection;
