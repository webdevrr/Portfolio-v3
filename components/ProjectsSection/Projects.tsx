import { forwardRef, useImperativeHandle, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: blue;
  z-index: 10;
  position: absolute;
`;
const Title = styled.h1``;
const Image = styled.img``;
interface Props {}

const Projects = forwardRef((props: Props, ref) => {
  const wrapperRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);

  useImperativeHandle(ref, () => ({
    get wrapper() {
      return wrapperRef.current;
    },
    get title() {
      return titleRef.current;
    },
    get image() {
      return imageRef.current;
    },
  }));

  return (
    <Wrapper ref={wrapperRef}>
      <Title ref={titleRef}>Projects</Title>
      <Image ref={imageRef} />
    </Wrapper>
  );
});

export default Projects;
