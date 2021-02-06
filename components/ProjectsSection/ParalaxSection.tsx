import styled from "styled-components";

import ParalaxItem from "./ParalaxItem";

import projects from "../../models/projects";

const Section = styled.div`
  width: 50%;
`;

const ParalaxSection = () => {
  return (
    <Section>
      {projects.map((project) => (
        <ParalaxItem />
      ))}
    </Section>
  );
};

export default ParalaxSection;
