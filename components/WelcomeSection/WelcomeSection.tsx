import styled from "styled-components";

import Title from "./Title";
import Circle from "./Circle";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  font-family: "Monument";
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  position: relative;
  padding-top: 10%;
  width: 70%;
  height: 100%;
`;
const WelcomeSection = () => {
  return (
    <Section>
      <Content>
        <Title />
        <Circle />
      </Content>
    </Section>
  );
};

export default WelcomeSection;
