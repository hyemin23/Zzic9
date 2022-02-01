import { Button } from "@src/components/atoms/Button";
import LeftArrowIcon from "@src/components/atoms/LeftArrow.icon";
import { TextButton } from "@src/components/atoms/TextButton";
import TitleHeaderComponent from "@src/components/molecules/TitleHeader.component";
import BasicInfoStepComponent from "@src/components/organs/BasicInfoStep.component";
import ProfileStepComponent from "@src/components/organs/ProfileStep.component";
import TermConfirmStepComponent from "@src/components/organs/TermConfirmStep.component";
import { SignupStep } from "@src/constant/enum.constant";
import { SignupTitleMessages } from "@src/constant/message.constant";
import Grid from "@src/elements/Grid";
import { BaseProps, BaseStyleProps } from "@src/styles/common";
import { GuestMain } from "@src/styles/template/GuestMain.styles";
import { FontSize, Padding } from "@src/styles/theme";
import React from "react";
import styled from "styled-components";

interface SignupObjectType {
  [SignupStep.TERM_CONFIRM]: boolean;
  [SignupStep.USER_INFO]: boolean;
  [SignupStep.PROFILE_INPUT]: boolean;
}

export type SignupTemplateProps = {
  step: SignupStep;
  confirmed: boolean;
  setConfirmed?: (conf: boolean) => void;
  onClickNext?: () => void;
  onClickPrev?: () => void;
  isStepCompleted: SignupObjectType;
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: ${Padding.page};
`;

const HeaderWrap = styled.div<BaseProps>`
  ${BaseStyleProps};
  height: 60px;
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

interface BackWrapProp {
  show: boolean;
}

const BackWrap = styled.div<BackWrapProp>`
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  margin-bottom: 20px;
  width: fit-content;
`;

const S = {
  Container,
  TitleWrap,
  TitleText,
  DescriptionText,
  HeaderWrap,
};

const SignupPageTemplate = ({
  step = SignupStep.TERM_CONFIRM,
  confirmed,
  isStepCompleted,
  setConfirmed,
  onClickNext,
  onClickPrev,
}: SignupTemplateProps) => {
  return (
    <Grid maxWidth="414px" width="auto" margin="auto" padding="0 35px">
      {step === 0 && <TitleHeaderComponent title="" />}

      <S.HeaderWrap pt="20px" mb="30px">
        {step !== 0 && (
          <BackWrap show={SignupTitleMessages[step].allowBack}>
            <TextButton color="black" onClick={onClickPrev}>
              <LeftArrowIcon />
            </TextButton>
          </BackWrap>
        )}
      </S.HeaderWrap>

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

        {step === SignupStep.USER_INFO && <BasicInfoStepComponent />}

        {step === SignupStep.PROFILE_INPUT && <ProfileStepComponent />}
      </Grid>

      {SignupTitleMessages[step].button && (
        <GuestMain.BottomWrap>
          <Button
            type="button"
            color="primary"
            disabled={!isStepCompleted[step]}
            onClick={onClickNext}
          >
            {SignupTitleMessages[step].button}
          </Button>
        </GuestMain.BottomWrap>
      )}
    </Grid>
  );
};

export default SignupPageTemplate;
