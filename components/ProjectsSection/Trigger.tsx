import { MutableRefObject, forwardRef, useEffect, useRef } from "react";
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

const Trigger = forwardRef(({ index }: Props, ref: MutableRefObject<any>) => {
  const dummyRef = useRef(null);

  useEffect(() => {
    if (index === 0) {
      gsap.to(ref.current.wrapper, {
        scrollTrigger: {
          trigger: dummyRef.current,
          markers: true,
          start: "top center",
        },
        background: "red",
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        t.kill();
      });
    };
  }, []);

  return <Dummy ref={dummyRef}></Dummy>;
});

export default Trigger;
