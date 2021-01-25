import styled from "styled-components";

import Head from "next/head";
import WelcomeSection from "../components/WelcomeSection/WelcomeSection";

const Main = styled.main`
  background-color: #1b1b1d;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Robert Ryszka</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Main>
        <WelcomeSection />
      </Main>
    </>
  );
}
