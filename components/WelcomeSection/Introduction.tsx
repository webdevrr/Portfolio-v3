import { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";

interface Props {
  darkMode: boolean;
}

const Section = styled.div`
  width: 50%;
  height: 100vh;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Inter", sans-serif;
  color: #f0f0f0;
`;
const Hello = styled.h2`
  transform: translateY(150px);
  font-size: 5em;
`;

const Name = styled.h2`
  transform: translateY(150px);
  color: #e8b059;
  font-size: 5em;
`;
const Role = styled.h2`
  transform: translateY(-150px);
  font-size: 2em;
`;
const FlexContainer = styled.div`
  z-index: 101;
  display: flex;
  flex-direction: column;
`;
const Overflow = styled.span`
  overflow: hidden;
`;

const Introduction = ({ darkMode }: Props) => {
  const firstLine = useRef(null);
  const secondLine = useRef(null);
  const name = useRef(null);
  const role = useRef(null);

  useEffect(() => {
    gsap.to([firstLine.current, secondLine.current, role.current], {
      color: darkMode ? "#f0f0f0" : "#1b1b1d",
    });
  }, [darkMode]);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to([firstLine.current, secondLine.current, name.current], {
      y: 0,
      duration: 0.5,
      stagger: 0.25,
    }).to(role.current, { y: 0, duration: 0.5, stagger: 0.25 });
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <Section>
      <FlexContainer>
        <Overflow>
          <Hello ref={firstLine}>Hello.</Hello>
        </Overflow>
        <Overflow>
          <Hello ref={secondLine}>my name is</Hello>
        </Overflow>
        <Overflow>
          <Name ref={name}>Robert</Name>
        </Overflow>
        <Overflow>
          <Role ref={role}>web dev</Role>
        </Overflow>
      </FlexContainer>
    </Section>
  );
};

export default Introduction;
