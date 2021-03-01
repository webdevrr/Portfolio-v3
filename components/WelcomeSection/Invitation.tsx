import styled from "styled-components";
import { a, useSpring } from "@react-spring/web";
interface Props {
  darkMode: boolean;
}

const Section = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
`;
const Title = styled(a.h2)`
  font-family: "Inter", sans-serif;
`;

const Invitation = ({ darkMode }: Props) => {
  const [{ color }] = useSpring(
    {
      color: darkMode ? "#f0f0f0" : "#1b1b1d",
    },
    [darkMode]
  ) as any;

  return (
    <Section>
      <Title style={{ color }}>Hello</Title>
    </Section>
  );
};

export default Invitation;
