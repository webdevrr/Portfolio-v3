import styled from "styled-components";
import { useState } from "react";
import { a, useSpring } from "@react-spring/web";

import WelcomeSection from "../components/WelcomeSection/WelcomeSection";
import ContactSection from "../components/ContactSection/ContactSection";
import Header from "../components/Header";

const Main = styled(a.main)``;

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const [{ background }] = useSpring(
    { background: isDarkMode ? "#1b1b1d" : "#f0f0f0" },
    [isDarkMode]
  );

  return (
    <>
      <Header />
      <Main style={{ background }}>
        <WelcomeSection isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <ContactSection />
      </Main>
    </>
  );
}
