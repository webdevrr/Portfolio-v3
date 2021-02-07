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
  color: white;
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
  z-index: 50;
  opacity: 0;
  font-size: 30px;
  display: inline-block;
`;

const Name = styled.h1`
  opacity: 0;
  font-size: 50px;
`;
const Description = styled.p`
  opacity: 0;
  line-height: 1.5em;
`;
const ProjectDescription = forwardRef<HTMLDivElement, Props>(
  ({ project }, ref) => {
    const numberRef = useRef(null);
    const nameRef = useRef(null);
    const descriptionRef = useRef(null);
    const numberWrapperRef = useRef(null);
    const nameWrapperRef = useRef(null);
    const descWrapperRef = useRef(null);

    useLayoutEffect(() => {
      let tl = gsap.timeline();

      if (numberWrapperRef.current || numberRef.current) {
        tl.to([numberRef.current, nameRef.current, descriptionRef.current], {
          opacity: 0,
          duration: 0,
        })
          .fromTo(
            [
              numberWrapperRef.current,
              nameWrapperRef.current,
              descWrapperRef.current,
            ],
            {
              transformOrigin: "left center",
              scaleX: 0,
            },
            { scaleX: 1, duration: 0.25 }
          )
          .to([numberRef.current, nameRef.current, descriptionRef.current], {
            opacity: 1,
            duration: 0,
          })
          .to(
            [
              numberWrapperRef.current,
              nameWrapperRef.current,
              descWrapperRef.current,
            ],
            { transformOrigin: "right center", scaleX: 0 }
          );
      }
      return () => tl.kill();
    }, [project]);

    return (
      <Section ref={ref}>
        {project ? (
          <>
            <AnimatedWrapper ref={numberWrapperRef}>
              <Number ref={numberRef}>{`0${project.index}`}</Number>
            </AnimatedWrapper>
            <Flex>
              <AnimatedWrapper ref={nameWrapperRef}>
                <Name ref={nameRef}>{project.name}</Name>
              </AnimatedWrapper>
              <AnimatedWrapper ref={descWrapperRef}>
                <Description ref={descriptionRef}>
                  {project.description}
                </Description>
              </AnimatedWrapper>
            </Flex>
          </>
        ) : null}
      </Section>
    );
  }
);

export default ProjectDescription;
