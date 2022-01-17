import type { NextPage } from "next";
import Head from "next/head";
import Header from "../../layouts/Header";

const MainPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>GoToRedLight</title>
        <meta name="description" content="상한가를 향해" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* menu */}
      <Header />

      {/* main */}
      <main>asd</main>

      {/* footer */}
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by {"hyemin"}
        </a>
      </footer>
    </div>
  );
};

export default MainPage;
