import Grid from "@src/elements/Grid";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Router from "next/router";
import Link from "next/link";

const IntroPage = () => {
  return (
    <Grid maxWidth={"414px"} height="80vh" margin={`0 auto`}>
      <Grid>
        <SlideContainer {...settings}>
          <Grid>
            <img
              src="https://getting.co.kr/img/GUIicon/landing1.svg"
              alt=""
              style={{ maxWidth: "100%", margin: "0 auto" }}
            />
          </Grid>
          <Grid>
            <img
              src="https://getting.co.kr/img/GUIicon/landing2.svg"
              style={{
                maxWidth: "100%",
                margin: "0 auto",
              }}
            />
          </Grid>
        </SlideContainer>
        <div
          style={{
            maxWidth: "305px",
            bottom: 0,
            left: 0,
            right: 0,
            margin: "20px auto 0",
          }}
        >
          <ButtonBox
            onClick={() => {
              Router.push("/");
            }}
          >
            <Link href="/signup">
              <a>
                <Button>회원가입</Button>
              </a>
            </Link>
          </ButtonBox>
        </div>
      </Grid>
    </Grid>
  );
};

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  margin: 10px auto;
  background-color: white;
  border-radius: 25px;
  border: solid 0.5px #eee;
  cursor: pointer;
`;

const Button = styled.button`
  all: unset;
  color: #fe7968;
  font-weight: 800;
`;

const settings = {
  dots: true, // 슬라이드 밑에 점 보이게
  infinite: false, // 무한으로 반복
  speed: 500,
  autoplay: false,
  autoplaySpeed: 500, // 넘어가는 속도
  slidesToShow: 1, // 4장씩 보이게
  slidesToScroll: 1, // 1장씩 뒤로 넘어가게
  centerMode: true,
  centerPadding: "0px", // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
};

const SlideContainer = styled(Slider)`
  .slick-list {
    max-width: 414px;
    margin: 0 auto;
  }
  .slick-dots li {
    margin: 0 0rem;
  }

  .slick-dots {
    position: sticky;
    left: 0;
    right: 0;

    .slick-active {
      button::before {
        color: #fe7968;
      }
    }
    button::before {
      color: #b6b1b0;
    }
  }
`;

export default IntroPage;
