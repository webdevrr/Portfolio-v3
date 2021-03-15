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
    const tl = gsap.timeline();
    if (index === 0) {
      // tl.to(ref.current.wrapper, {
      //   scrollTrigger: {
      //     id: index.toString(),
      //     trigger: dummyRef.current,
      //     markers: true,
      //     start: "top center",
      //   },
      //   background: "red",
      // });
    } else {
      tl.to(ref.current.wrapper, {
        scrollTrigger: {
          id: index.toString(),
          trigger: dummyRef.current,
          markers: true,
          start: "top center",
          onEnter: () => {
            gsap.to(window, {
              scrollTo: { y: `.project-${index}`, autoKill: false },
              duration: 1,
              ease: "power2.out",
            });
          },
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        t.kill();
      });
    };
  }, []);

  return <Dummy className={`project-${index}`} ref={dummyRef}></Dummy>;
});

export default Trigger;
