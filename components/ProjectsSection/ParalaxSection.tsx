import styled from "styled-components";
import { forwardRef } from "react";

import ParalaxItem from "./ParalaxItem";

import projects from "../../models/projects";

interface Props {
  changeProject: (index: number) => void;
}
const Section = styled.div`
  width: 50%;
`;

const ParalaxSection = forwardRef<HTMLDivElement, Props>(
  ({ changeProject }: Props, ref) => {
    return (
      <Section ref={ref}>
        {projects.map((project, id) => (
          <ParalaxItem
            key={project.name}
            changeProject={changeProject}
            id={id}
          />
        ))}
      </Section>
    );
  }
);

export default ParalaxSection;
