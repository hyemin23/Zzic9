// constant

import { Grid } from "@nextui-org/react";
import { SignupStep } from "@src/components/constant/enum.constant";
import { SignupTitleMessages } from "@src/components/constant/message.constant";
import TitleHeaderComponent from "@src/components/molecules/TitleHeader.component";
import TermConfirmStepComponent from "@src/components/organs/TermConfirmStep.component";
import { BaseProps, BaseStyleProps } from "@src/styles/common";
import { FontSize, Padding } from "@src/styles/theme";
import React from "react";
import styled from "styled-components";

export type SignupTemplateProps = {
  step: SignupStep;
  confirmed: boolean;
  setConfirmed?: (conf: boolean) => void;
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: ${Padding.page};
`;

const TitleWrap = styled.div<BaseProps>`
  ${BaseStyleProps}
`;
const TitleText = styled.h2<BaseProps>`
  ${BaseStyleProps}
  font-size: ${FontSize.PrimaryLabel};
  font-weight: 500;
  /* 의미있는 문자열을 줄바꿈 금지 */
  word-break: keep-all;
  line-height: ${FontSize.MainTitle};
`;

const DescriptionText = styled.div`
  font-size: ${FontSize.PrimaryDescription};
  font-weight: 400;
  word-break: keep-all;
  line-height: ${FontSize.PrimaryLabel};
`;

const S = {
  Container,
  TitleWrap,
  TitleText,
  DescriptionText,
};

const SignupPageTemplate = ({
  step = SignupStep.TERM_CONFIRM,
  confirmed,
  setConfirmed,
}: SignupTemplateProps) => {
  return (
    <S.Container>
      {/* 약관 동의 페이지 진입 시 */}
      {step === 0 && <TitleHeaderComponent title="" />}
      <S.TitleWrap mb="60px">
        <S.TitleText mb="8px">{SignupTitleMessages[step].title}</S.TitleText>
        <S.DescriptionText>
          {SignupTitleMessages[step].description}
        </S.DescriptionText>
      </S.TitleWrap>

      <Grid>
        {step === SignupStep.TERM_CONFIRM && (
          <TermConfirmStepComponent
            confirmed={confirmed}
            setConfirmed={setConfirmed}
          />
        )}
      </Grid>
    </S.Container>
  );
};

export default SignupPageTemplate;
