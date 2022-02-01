import { NextUIProvider } from "@nextui-org/react";
import { AppProps } from "next/dist/shared/lib/router/router";
import styled, { css, ThemeProvider } from "styled-components";
import Head from "next/head";
import theme, { windowSize } from "@src/styles/theme";
import GlobalStyle from "@src/styles/globals";
import GlobalFont from "@src/styles/fonts";

function MyApp({ Component, pageProps }: AppProps) {
  // 서비스 워커 등록
  // if ("serviceWorker" in navigator) {
  //   window.addEventListener("load", () => {
  //     // sw.js 등록
  //     navigator.serviceWorker.register("");
  //   });
  // }

  const Container = styled.div`
    ${({ theme: defaultTheme }) => css`
      background-color: ${defaultTheme.color.gray0};
    `}
  `;

  const Content = styled.div`
    background-color: #fff;
    height: 100vh;
    margin: 0 auto;
    width: ${windowSize.mobile};

    ${({ theme: defaultTheme }) => {
      const { window } = defaultTheme;
      return css`
        ${window.mobile} {
          width: 100vw;
        }
      `;
    }}
  `;

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
        <GlobalFont />
        <Container>
          <Content>
            <NextUIProvider>
              <Component {...pageProps} />
            </NextUIProvider>
          </Content>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
