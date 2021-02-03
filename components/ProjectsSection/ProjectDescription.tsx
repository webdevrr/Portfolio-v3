import styled from "styled-components";
import { forwardRef } from "react";
import { Project } from "../../models/projects";

interface Props {
  project: Project;
}
const Section = styled.div`
  padding: 5% 5% 5% 5%;
  width: 50%;
  height: 100vh;
`;
const Number = styled.h2`
  font-size: 30px;
`;
const Name = styled.h1`
  font-size: 50px;
`;
const Flex = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15%;
  padding-left: 5%;
`;
const Description = styled.p`
  display: flex;
`;
const ProjectDescription = forwardRef<HTMLDivElement, Props>(
  ({ project }, ref) => {
    const { index, name, description } = project;
    return (
      <Section ref={ref}>
        <Number>{`0${index}`}</Number>
        <Flex>
          <Name>{name}</Name>
          <Description>{description}</Description>
        </Flex>
      </Section>
    );
  }
);

export default ProjectDescription;
