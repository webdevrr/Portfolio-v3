import { useEffect } from "react";

import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
interface Props {
  changeProject: (index: number) => void;
  index: number;
}

const Wrapper = styled.div`
  height: 150vh;
  width: 100%;
`;
const ParalaxItem = ({ changeProject, index }: Props) => {
  return <Wrapper></Wrapper>;
};

export default ParalaxItem;
