import { useRef, useLayoutEffect } from "react";
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
  transform: scaleX(0);
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
    const numberRef = useRef(null);
    const nameRef = useRef(null);
    const descriptionRef = useRef(null);
    const numberWrapperRef = useRef(null);
    const nameWrapperRef = useRef(null);
    const descWrapperRef = useRef(null);

    const tl = gsap.timeline();
    useLayoutEffect(() => {
      if (numberWrapperRef.current) {
        console.log(numberWrapperRef.current);
        tl.fromTo(
          [
            numberWrapperRef.current,
            nameWrapperRef.current,
            descWrapperRef.current,
          ],
          {
            transformOrigin: "left center",
            scaleX: 0,
          },
          { scaleX: 1, duration: 0.5 }
        );
      }
    }, [project]);
    return (
      <Section ref={ref}>
        {project ? (
          <>
            <AnimatedWrapper ref={numberWrapperRef}>
              <Number>{`0${project.index}`}</Number>
            </AnimatedWrapper>
            <Flex>
              <AnimatedWrapper ref={nameWrapperRef}>
                <Name>{project.name}</Name>
              </AnimatedWrapper>
              <AnimatedWrapper ref={descWrapperRef}>
                <Description>{project.description}</Description>
              </AnimatedWrapper>
            </Flex>
          </>
        ) : null}
      </Section>
    );
  }
);

export default ProjectDescription;
