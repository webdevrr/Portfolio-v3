import styled from "styled-components";
import { useEffect, useRef } from "react";
import gsap from "gsap";
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
  color: #f0f0f0;
`;
const Hello = styled.h2`
  font-size: 5em;
`;

const Name = styled.h2`
  color: #e8b059;
  font-size: 5em;
`;
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Overflow = styled.span`
  overflow: hidden;
`;

const Invitation = ({ darkMode }: Props) => {
  const firstLineRef = useRef(null);
  const secondLineRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {
    gsap.to([firstLineRef.current, secondLineRef.current], {
      color: darkMode ? "#f0f0f0" : "#1b1b1d",
    });
  }, [darkMode]);

  return (
    <Section>
      <FlexContainer>
        <Overflow>
          <Hello ref={firstLineRef}>Hello.</Hello>
        </Overflow>
        <Overflow>
          <Hello ref={secondLineRef}>my name is</Hello>
        </Overflow>
        <Overflow>
          <Name ref={nameRef}>Robert</Name>
        </Overflow>
      </FlexContainer>
    </Section>
  );
};

export default Invitation;
