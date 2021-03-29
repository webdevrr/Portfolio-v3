import { forwardRef, useState } from "react";
import styled from "styled-components";

import projects from "../../models/projects";
import Project from "./Project";

const Section = styled.section`
  width: 100%;
`;

const ProjectsSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <Section ref={ref}>
      {projects.map((project) => (
        <Project project={project} key={project.name} />
      ))}
    </Section>
  );
});

export default ProjectsSection;
