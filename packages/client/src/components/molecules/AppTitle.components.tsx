import Grid from "@src/elements/Grid";
import { BaseMarginBottom, BaseProps } from "@src/styles/common";
import { FontFamily, FontSize } from "@src/styles/theme";
import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div<BaseProps>`
  ${BaseMarginBottom};
`;

const MainText = css`
  ${BaseMarginBottom}
  color: #ffff;
  font-family: ${FontFamily.point};
  user-selecto: none;
`;

const MainTitle = styled.h1<BaseProps>`
  ${MainText};
  font-size: ${FontSize.MainTitle};
  font-weight: 500;
  line-height: 2.156rem;
`;

const MainDescription = styled.h3`
  ${MainText};
  font-size: ${FontSize.SubTitle};
  font-weight: 500;
`;

const Strong = styled.strong`
  ${MainText}
  font-size: ${FontSize.MainTitleStrong};
  font-weight: 700;
`;

const S = {
  Container,
  MainTitle,
  Strong,
  MainDescription,
};

type Props = {
  mb: string;
};

const AppTitleComponent = ({ mb = "0" }: Props) => {
  return (
    <Container mb={mb}>
      <MainTitle>
        재능교환?
        <br />A piece of<S.Strong>Cake</S.Strong>이지
      </MainTitle>
      <S.MainDescription>
        우리 학교 재능 공유 플랫폼<i>!</i>
      </S.MainDescription>
    </Container>
  );
};

export default AppTitleComponent;
