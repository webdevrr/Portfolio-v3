import { useRef, useEffect } from "react";
import styled from "styled-components";
import { forwardRef } from "react";
import { Project } from "../../models/projects";

import AnimatedWrapper from "./AnimatedWrapper";
import gsap from "gsap";
interface Props {
  project: Project;
}
const Section = styled.div`
  display: flex;
  flex-direction: column;
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
  display: inline-block;
  visibility: hidden;
`;

const Name = styled.h1`
  font-size: 50px;
  visibility: hidden;
`;
const Description = styled.p`
  line-height: 1.5em;
  visibility: hidden;
`;
const ProjectDescription = forwardRef<HTMLDivElement, Props>(
  ({ project }, ref) => {
    const { index, name, description } = project;
    const animate = () => {};
    const numberRef = useRef(null);
    const nameRef = useRef(null);
    const descriptionRef = useRef(null);
    const numberWrapperRef = useRef(null);
    const nameWrapperRef = useRef(null);
    const descWrapperRef = useRef(null);

    useEffect(() => {
      gsap.fromTo(
        [
          numberWrapperRef.current,
          nameWrapperRef.current,
          descWrapperRef.current,
        ],
        { scaleX: 0 },
        { scaleX: 1, transformOrigin: "left center" }
      );
    });
    return (
      <Section ref={ref}>
        <AnimatedWrapper ref={numberWrapperRef}>
          <Number>{`0${index}`}</Number>
        </AnimatedWrapper>
        <Flex>
          <AnimatedWrapper ref={nameWrapperRef}>
            <Name>{name}</Name>
          </AnimatedWrapper>
          <AnimatedWrapper ref={descWrapperRef}>
            <Description>{description}</Description>
          </AnimatedWrapper>
        </Flex>
      </Section>
    );
  }
);

export default ProjectDescription;
