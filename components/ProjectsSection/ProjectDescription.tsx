import { useRef } from "react";
import styled from "styled-components";
import { forwardRef } from "react";
import { Project } from "../../models/projects";
import gsap from "gsap";
import AnimatedWrapper from "./AnimatedWrapper";
interface Props {
  project: Project;
}
const Section = styled.div`
  padding: 5% 5% 5% 5%;
  width: 50%;
  height: 100vh;
`;
const Flex = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15%;
  padding-left: 5%;
`;
const Number = styled.h2`
  font-size: 30px;
  /* visibility: hidden; */
`;

const Name = styled.h1`
  font-size: 50px;
  /* visibility: hidden; */
`;
const Description = styled.p`
  padding-top: 5%;
  display: flex;
  line-height: 1.5em;
  /* visibility: hidden; */
`;
const ProjectDescription = forwardRef<HTMLDivElement, Props>(
  ({ project }, ref) => {
    const { index, name, description } = project;
    // const animate = () => {gsap.fromTo()};
    const numberRef = useRef(null);
    const nameRef = useRef(null);
    const descriptionRef = useRef(null);

    return (
      <Section ref={ref}>
        <AnimatedWrapper>
          <Number ref={numberRef}>{`0${index}`}</Number>
        </AnimatedWrapper>

        <Flex>
          <AnimatedWrapper>
            <Name ref={nameRef}>{name}</Name>
          </AnimatedWrapper>
          <AnimatedWrapper>
            <Description ref={descriptionRef}>{description}</Description>
          </AnimatedWrapper>
        </Flex>
      </Section>
    );
  }
);

export default ProjectDescription;
