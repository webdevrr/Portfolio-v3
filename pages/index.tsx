import styled from "styled-components";

import WelcomeSection from "../components/WelcomeSection/WelcomeSection";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";
import Header from "../components/Header";

const Main = styled.main`
  background-color: #1b1b1d;
`;

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <WelcomeSection />
        <ProjectsSection />
      </Main>
    </>
  );
}
