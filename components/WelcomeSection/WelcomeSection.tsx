import { Dispatch, MutableRefObject, SetStateAction } from "react";

import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

import Introduction from "./Introduction";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

interface Props {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  projectsRef: MutableRefObject<HTMLElement>;
}

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

const WelcomeSection = ({ darkMode }: Props) => {
  return (
    <Section>
      <Introduction darkMode={darkMode} />
    </Section>
  );
};

export default WelcomeSection;
