import { forwardRef, useImperativeHandle, useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { Project } from "../../models/projects";

gsap.registerPlugin(ScrollTrigger);

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  z-index: 10;
  display: flex;
`;
const Title = styled.h1`
  color: white;
  font-family: "Inter", sans-serif;
`;
const Image = styled.img``;
interface Props {
  project: Project;
}

const Projects = forwardRef(({ project }: Props, ref) => {
  const wrapperRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);

  const { logo, name } = project;

  useEffect(() => {
    ScrollTrigger.create({
      markers: true,
      id: "Projects",
      trigger: wrapperRef.current,
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        t.kill();
      });
    };
  }, []);
  return (
    <Wrapper ref={wrapperRef}>
      <Title ref={titleRef}>{name}</Title>
      <Image ref={imageRef} src={logo} />
    </Wrapper>
  );
});

export default Projects;
