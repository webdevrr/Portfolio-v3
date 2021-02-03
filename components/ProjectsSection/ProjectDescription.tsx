import styled from "styled-components";
import { forwardRef } from "react";
import { Project } from "../../models/projects";

interface Props {
  project: Project;
}
const Section = styled.div`
  width: 50%;
  height: 100vh;
`;
const Number = styled.div``;

const ProjectDescription = forwardRef<HTMLDivElement, Props>(
  ({ project }, ref) => {
    const { index } = project;
    return (
      <Section ref={ref}>
        <Number></Number>
      </Section>
    );
  }
);

export default ProjectDescription;
