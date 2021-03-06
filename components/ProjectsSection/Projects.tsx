import { forwardRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: red;
`;
interface Props {}

const Projects = forwardRef<HTMLDivElement>((props: Props, ref) => {
  return <Wrapper ref={ref}></Wrapper>;
});

export default Projects;
