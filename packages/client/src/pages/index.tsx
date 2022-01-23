import type { NextPage } from "next";
import Header from "../../layouts/Header";

const MainPage: NextPage = () => {
  return (
    <div>
      <Header />
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
