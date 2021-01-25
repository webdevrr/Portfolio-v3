import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Projects = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1``;
const ProjectsSection = () => {
  return (
    <Section>
      <Projects></Projects>
    </Section>
  );
};

export default ProjectsSection;
