import styled from "styled-components";
import { useLayoutEffect, useEffect, useRef } from "react";
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
  const roleRef = useRef(null);

  useEffect(() => {
    gsap.to([firstLineRef.current, secondLineRef.current, roleRef.current], {
      color: darkMode ? "#f0f0f0" : "#1b1b1d",
    });
  }, [darkMode]);

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.to([firstLineRef.current, secondLineRef.current, nameRef.current], {
      y: 0,
      duration: 0.5,
      stagger: 0.25,
    }).to(roleRef.current, { y: 0, duration: 0.5, stagger: 0.25 });
    return () => {
      tl.kill();
    };
  }, []);

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
        <Overflow>
          <Role ref={roleRef}>web dev</Role>
        </Overflow>
      </FlexContainer>
    </Section>
  );
};

export default Invitation;
