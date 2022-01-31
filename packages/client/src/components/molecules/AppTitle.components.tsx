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
        직구할 땐?
        <br />
        <S.Strong>찍 - ! 구 (Zzic 9)</S.Strong>
      </MainTitle>
      <S.MainDescription>
        직구가 어려운 사람들 모두 모여라<i>!</i>
      </S.MainDescription>
    </Container>
  );
};

export default AppTitleComponent;
