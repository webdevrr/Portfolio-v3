import Head from "next/head";
import WelcomeSection from "../components/WelcomeSection/WelcomeSection";
import styled from "styled-components";

const Main = styled.main`
  background-color: #1b1b1d;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Robert Ryszka</title>
      </Head>
      <Main>
        <WelcomeSection />
      </Main>
    </>
  );
}
