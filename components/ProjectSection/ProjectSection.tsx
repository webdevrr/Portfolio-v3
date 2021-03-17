import { forwardRef, useState } from "react";
import styled from "styled-components";

import projects from "../../models/projects";
import Projects from "./Projects";

const Section = styled.section`
  width: 100%;
  height: 100vh;
`;

const ProjectsSection = forwardRef<HTMLElement>((props, ref) => {
  const [project, setProject] = useState(projects[0]);

  return (
    <Section ref={ref}>
      <Projects project={project} />
    </Section>
  );
});

export default ProjectsSection;
