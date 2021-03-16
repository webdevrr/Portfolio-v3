import { useEffect, useRef, useState } from "react";
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

const ProjectsSection = (props: Props) => {
  const [project, setProject] = useState(projects[0]);
  const projectsRefs = useRef(null);

  return (
    <Section>
      <Projects project={project} ref={projectsRefs} />
    </Section>
  );
};

export default ProjectsSection;
