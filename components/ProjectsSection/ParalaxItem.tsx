import { useEffect, useRef } from "react";

import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
interface Props {
  changeProject: (index: number) => void;
  id: number;
}

const Wrapper = styled.div`
  height: 150vh;
  width: 100%;
`;
const ParalaxItem = ({ changeProject, id }: Props) => {
  const paralaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: paralaxRef.current,
      id: `item-${id}`,
      onEnter: () => changeProject(id),
      onEnterBack: () => changeProject(id),
      start: "top top",
      end: "bottom top",
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        t.kill();
      });
    };
  }, []);

  return <Wrapper ref={paralaxRef}></Wrapper>;
};

export default ParalaxItem;
