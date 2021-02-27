import { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

`;

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default App;
