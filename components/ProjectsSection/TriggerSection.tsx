import styled from "styled-components";
import { forwardRef } from "react";

import TriggerItem from "./TriggerItem";

import projects from "../../models/projects";

interface Props {
  changeProject: (index: number) => void;
}
const Section = styled.div`
  width: 50%;
`;

const TriggerSection = forwardRef<HTMLDivElement, Props>(
  ({ changeProject }: Props, ref) => {
    return (
      <Section ref={ref}>
        {projects.map((project, id) => (
          <TriggerItem
            key={project.name}
            changeProject={changeProject}
            id={id}
          />
        ))}
      </Section>
    );
  }
);

export default TriggerSection;
