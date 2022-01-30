import { NextUIProvider } from "@nextui-org/react";
import { AppProps } from "next/dist/shared/lib/router/router";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import theme from "@src/styles/theme";
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
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
