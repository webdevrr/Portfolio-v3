import styled from "styled-components";
import { useState } from "react";
import WelcomeSection from "../components/WelcomeSection/WelcomeSection";
import ContactSection from "../components/ContactSection/ContactSection";

import Header from "../components/Header";

const Main = styled.main`
  background-color: #1b1b1d;
`;

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <>
      <Header />
      <Main>
        <WelcomeSection isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <ContactSection />
      </Main>
    </>
  );
}
