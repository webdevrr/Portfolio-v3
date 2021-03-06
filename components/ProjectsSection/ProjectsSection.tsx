import styled from "styled-components";
import { Element } from "react-scroll";

interface Props {}
const Section = styled.section`
  height: 100vh;
`;

const ProjectsSection = (props: Props) => {
  return (
    <Element name="projects">
      <Section></Section>
    </Element>
  );
};

export default ProjectsSection;
