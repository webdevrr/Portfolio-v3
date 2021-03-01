import styled from "styled-components";
import { a, useSpring } from "@react-spring/web";
interface Props {
  darkMode: boolean;
}

const Section = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Inter", sans-serif;
`;
const Hello = styled(a.h1)`
  font-size: 5em;
`;

const Name = styled(a.h2)`
  color: #e8b059;
  font-size: 5em;
`;
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Invitation = ({ darkMode }: Props) => {
  const [{ color }] = useSpring(
    {
      color: darkMode ? "#f0f0f0" : "#1b1b1d",
    },
    [darkMode]
  ) as any;

  const Overflow = styled.span`
    overflow: hidden;
  `;
  return (
    <Section>
      <FlexContainer>
        <Overflow>
          <Hello style={{ color }}>Hello.</Hello>
        </Overflow>
        <Overflow>
          <Hello style={{ color }}>my name is</Hello>
        </Overflow>
        <Overflow>
          <Name>Robert</Name>
        </Overflow>
      </FlexContainer>
    </Section>
  );
};

export default Invitation;
