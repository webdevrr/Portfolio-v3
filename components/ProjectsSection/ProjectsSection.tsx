import Sticky from "./Sticky";
import styled from "styled-components";
import { useState } from "react";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  font-family: "Monument";
  display: flex;
`;
const ProjectsSection = () => {
  const [sticky, setSticky] = useState(false);
  return (
    <Section>
      <Sticky sticky={sticky} />
    </Section>
  );
};

export default ProjectsSection;
