import styled from "styled-components";
import { forwardRef } from "react";
import { Project } from "../../models/projects";

interface Props {
  project: Project;
  isContentVisible: boolean;
}
const Section = styled.div`
  padding: 5% 5% 5% 5%;
  width: 50%;
  height: 100vh;
`;
const Number = styled.h2`
  font-size: 30px;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15%;
  padding-left: 5%;
`;
const Name = styled.h1`
  font-size: 50px;
`;
const Description = styled.p`
  padding-top: 5%;
  display: flex;
  line-height: 1.5em;
`;
const ProjectDescription = forwardRef<HTMLDivElement, Props>(
  ({ project, isContentVisible }, ref) => {
    const { index, name, description } = project;
    return (
      <Section ref={ref}>
        {isContentVisible ? (
          <>
            <Number>{`0${index}`}</Number>
            <Flex>
              <Name>{name}</Name>
              <Description>{description}</Description>
            </Flex>
          </>
        ) : null}
      </Section>
    );
  }
);

export default ProjectDescription;
