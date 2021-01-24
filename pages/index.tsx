import Head from "next/head";
import WelcomeSection from "../components/WelcomeSection/WelcomeSection";
import styled from "styled-components";

const Main = styled;

export default function Home() {
  return (
    <>
      <Head>
        <title>Robert Ryszka</title>
      </Head>
      <main>
        <WelcomeSection />
      </main>
    </>
  );
}
