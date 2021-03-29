import { useRef } from "react";
import styled from "styled-components";

import { ProjectModel } from "../../models/projects";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  z-index: 10;
  display: flex;
`;
const Title = styled.h1`
  font-size: 4em;
  z-index: 101;
`;
const Paragraph = styled.p`
  z-index: 101;
`;
const TextWrapper = styled.div`
  color: white;
  font-family: "Inter", sans-serif;
  display: flex;
  flex-direction: column;
  width: 35%;
  padding-left: 10%;
  justify-content: center;
`;

interface Props {
  project: ProjectModel;
}

const Project = ({ project }: Props) => {
  const wrapper = useRef(null);
  const title = useRef(null);

  const { name, description } = project;

  return (
    <Wrapper ref={wrapper}>
      <TextWrapper>
        <Title ref={title}>{name}</Title>
        <Paragraph>{description}</Paragraph>
      </TextWrapper>
    </Wrapper>
  );
};

export default Project;
