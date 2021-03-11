import { useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Dummy = styled.div`
  height: 100vh;
`;
interface Props {
  index: number;
}

const Trigger = ({ index }: Props) => {
  return <Dummy></Dummy>;
};

export default Trigger;
