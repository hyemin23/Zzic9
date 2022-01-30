import theme, {
  FixedX,
  FontSize,
  Padding,
  windowSize,
} from "@src/styles/theme";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import styled from "styled-components";
import LeftArrowIcon from "../atoms/LeftArrow.icon";

const Container = styled.div`
  display :flex;
  justify-content :space-between;
  align-items : center;
  padding : ${Padding.pageX}

  position : absolute;
  top : 0;
  left : 0;
  right  : 0;
  background-color : #fff;
  height : 60px;
  z-index : 5000;


  ${theme.window.tab} {
    width: ${windowSize.mobile};
    left: ${FixedX};
    right: ${FixedX};
    margin: 0;
  }

`;

const Title = styled.p`
  margin: 0;
  font-size: ${FontSize.Default};
`;

const IconWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const S = { Container, Title };
const TitleHeaderComponent = ({ title = "", onBack = null }: any) => {
  console.log("title : ", title);
  const router = useRouter();
  const back = useCallback(
    (e) => {
      console.log("백 버튼 누름");
      console.log(document.referrer);
      e.stopPropagation();
      router.back();
      // if (!!onBack) {
      //   onBack();
      // }
      // // 정상적인 접근이 아니면 팅궈내기
      // else if (
      //   document.referrer &&
      //   document.referrer.indexOf(
      //     String(process.env.NEXT_PUBLIC_DOMAIN_NAME),
      //   ) !== -1
      // ) {
      //   console.log("정상적인 접근이 아님");
      //   window.history.back();
      // } else {
      //   console.log("나머지  els 상호아");
      //   router.push("/");
      // }
    },
    [router, onBack],
  );
  return (
    <S.Container>
      <IconWrapper onClick={back}>
        <LeftArrowIcon />
      </IconWrapper>
      <S.Title>{title}</S.Title>
      <div />
    </S.Container>
  );
};

export default TitleHeaderComponent;
