import { NextUIProvider } from "@nextui-org/react";
import { AppProps } from "next/dist/shared/lib/router/router";
import styled, { ThemeProvider, css } from "styled-components";
import Head from "next/head";
import theme, { windowSize } from "styles/theme";
import GlobalStyle from "styles/globals";

const Container = styled.div`
  background-color: #ffff;
  width: ${windowSize.mobile};
  margin: 0 auto;
  height: 100%;

  ${({ theme: defaultTheme }) => {
    const { window } = defaultTheme;
    return css`
      ${window.mobile} {
        width: 100vw;
      }
    `;
  }}
`;

function MyApp({ Component, pageProps }: AppProps) {
  // 서비스 워커 등록
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      // sw.js 등록
      navigator.serviceWorker.register("");
    });
  }
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,maximum-scale=1.0"
        />
        <title>Zzic9(찍구)</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <NextUIProvider>
          <Container>
            <Component {...pageProps} />
          </Container>
        </NextUIProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
