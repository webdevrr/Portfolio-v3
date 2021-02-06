import styled from "styled-components";
import { forwardRef } from "react";

import ParalaxItem from "./ParalaxItem";

import projects from "../../models/projects";

const Section = styled.div`
  width: 50%;
`;

const ParalaxSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Section ref={ref}>
      {projects.map((project) => (
        <ParalaxItem />
      ))}
    </Section>
  );
});

export default ParalaxSection;
