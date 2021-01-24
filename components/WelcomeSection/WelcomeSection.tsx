import styled from "styled-components";

import WelcomeSectionTitle from "./WelcomeSectionTitle";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  font-family: "Monument";
  display: flex;
  justify-content: center;
  align-items: center;
`;
const WelcomeSection = () => {
  return (
    <Section>
      <WelcomeSectionTitle />
    </Section>
  );
};

export default WelcomeSection;
