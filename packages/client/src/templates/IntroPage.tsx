import Grid from "@src/elements/Grid";
import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { Button } from "@src/components/atoms/Button";
import theme from "@src/styles/theme";
import AppTitleComponent from "@src/components/molecules/AppTitle.components";

const IntroPage = () => {
  return (
    <Grid
      backgroundColor={theme.color.point}
      maxWidth={"414px"}
      height="100vh"
      padding={`20vh 20px 0 20px`}
      margin={`0 auto`}
    >
      <AppTitleComponent mb="60px" />
      <Grid
        display={"grid"}
        flexDirection={true}
        height="130px"
        alignItems={true}
      >
        <Link href="/login">
          <a>
            <Button type="button" color="white" data-testid="go-login-btn">
              로그인
            </Button>
          </a>
        </Link>
        <Link href="/signup">
          <a>
            <Button color="white" type="button">
              간편 회원가입
            </Button>
          </a>
        </Link>
      </Grid>
    </Grid>
  );
};

export default IntroPage;
