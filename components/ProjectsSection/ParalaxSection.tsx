import styled from "styled-components";

import projects from "../../models/projects";

const Section = styled.div`
  height: ${projects.length * 150}vh;
  width: 50%;
`;

const ParalaxSection = () => {
  return <Section></Section>;
};

export default ParalaxSection;
