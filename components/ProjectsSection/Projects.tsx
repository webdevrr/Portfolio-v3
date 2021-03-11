import { forwardRef } from "react";
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

const Projects = forwardRef<HTMLDivElement>((props: Props, ref) => {
  return (
    <Wrapper ref={ref}>
      <Title>Project</Title>
      <Image />
    </Wrapper>
  );
});

export default Projects;
