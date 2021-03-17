import { forwardRef, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import projects from "../../models/projects";
import Projects from "./Projects";

gsap.registerPlugin(ScrollTrigger);

interface Props {}

const Section = styled.section`
  width: 100%;
  height: 100vh;
`;

const ProjectsSection = forwardRef<HTMLElement>((props: Props, ref) => {
  const [project, setProject] = useState(projects[0]);

  return (
    <Section ref={ref}>
      <Projects project={project} />
    </Section>
  );
});

export default ProjectsSection;
