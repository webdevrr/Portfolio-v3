import { useRef } from "react";
import styled from "styled-components";

import { Project } from "../../models/projects";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  z-index: 10;
  display: flex;
`;
const Title = styled.h1`
  color: white;
  font-family: "Inter", sans-serif;
`;
const Image = styled.img``;
interface Props {
  project: Project;
}

const Project = ({ project }: Props) => {
  const wrapper = useRef(null);
  const title = useRef(null);
  const image = useRef(null);

  const { logo, name } = project;

  return (
    <Wrapper ref={wrapper}>
      <Title ref={title}>{name}</Title>
      <Image ref={image} src={logo} />
    </Wrapper>
  );
};

export default Project;
