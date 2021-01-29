import styled from "styled-components";

import { Project } from "../../models/projects";

interface Props {
  projects: Project[];
}
const Section = styled.div<Props>`
  height: ${(props) => props.projects.length * 150}vh;
  width: 50%;
`;

const ScrollingTypography = ({ projects }: Props) => {
  return <Section projects={projects}></Section>;
};

export default ScrollingTypography;
