import { useEffect, useRef } from "react";
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
  projectsRef;
}

const Trigger = ({ index }: Props) => {
  const dummyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (index === 0) {
      const tl = gsap.timeline({
        ScrollTrigger: {
          scrub: true,
          markers: true,
          id: index.toString(),
          trigger: dummyRef.current,
          start: "top center",
          end: "bottom bottom",
        },
      });
    } else {
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        t.kill();
      });
    };
  }, []);

  return <Dummy ref={dummyRef}></Dummy>;
};

export default Trigger;
