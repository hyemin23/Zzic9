import Grid from "@src/elements/Grid";
import useVisibleHook from "@src/hooks/useVisible.hook";
import theme, { Padding } from "@src/styles/theme";
import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import { Button } from "../atoms/Button";
import CheckIcon from "../atoms/Check.icon";
import Privacy from "../atoms/terms/Privacy";
import Term from "../atoms/terms/Term";
import TermCheckButtonComponent, {
  CircleButton,
  TermButtonContentsWrapper,
} from "../molecules/TermCheckButton.component";
import TermPopupComponent from "./TermPopup.component";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: ${Padding.page};
`;

const TermConfirmStepComponent = ({ confirmed, setConfirmed }: any) => {
  // 이용약관
  const [
    termConfirmed,
    setTermConfirmed,
    setTermNotConfirmed,
    toggleTermConfirmed,
  ] = useVisibleHook(false);

  // 개인정보 처리방침
  const [
    privacyConfirmed,
    setPrivacyConfirmed,
    setPrivacyNotConfirmed,
    togglePrivacyConfirmed,
  ] = useVisibleHook(false);
  const [termVisible, setTermVisible, setTermInvisible] = useVisibleHook(false);
  const [privacyVisible, setPrivacyVisible, setPrivacyInvisible] =
    useVisibleHook(false);

  const onClickConfirmAll = useCallback(() => {
    if (!confirmed) {
      setTermConfirmed();
      setPrivacyConfirmed();
      setConfirmed(true);
    } else {
      setTermNotConfirmed();
      setPrivacyNotConfirmed();
      setConfirmed(false);
    }
    setConfirmed(!confirmed);
  }, [
    confirmed,
    setConfirmed,
    setPrivacyConfirmed,
    setPrivacyNotConfirmed,
    setTermConfirmed,
    setTermNotConfirmed,
  ]);

  useEffect(() => {
    if (termConfirmed && privacyConfirmed && !confirmed) {
      setConfirmed(true);
    }
    if (confirmed && (!termConfirmed || !privacyConfirmed)) {
      setConfirmed(false);
    }
  }, [confirmed, setConfirmed, privacyConfirmed, termConfirmed]);
  return (
    <Container>
      <TermPopupComponent
        title="이용약관"
        visible={termVisible}
        setInvisible={setTermInvisible}
      >
        <Term />
      </TermPopupComponent>

      <TermPopupComponent
        title="개인정보 처리방침"
        visible={privacyVisible}
        setPrivacyVisible={setPrivacyVisible}
      >
        <Privacy />
      </TermPopupComponent>

      <Button
        height="56px"
        fontSize="default"
        color={`${confirmed ? "point" : "white"}`}
        mb="40px"
        filled={confirmed}
        p="0 10px"
        onClick={onClickConfirmAll}
      >
        <TermButtonContentsWrapper>
          <CircleButton size="28px" filled={false} selected={confirmed}>
            <CheckIcon
              color={confirmed ? theme.color.primary : theme.color.gray3}
            />
          </CircleButton>
          약관 전체 동의
        </TermButtonContentsWrapper>
      </Button>
      <TermCheckButtonComponent
        confirmed={termConfirmed}
        toggleConfirmed={toggleTermConfirmed}
        setPopupVisible={setTermVisible}
        termName="(필수) 찍구 이용약관"
      />
      <TermCheckButtonComponent
        confirmed={privacyConfirmed}
        toggleConfirmed={togglePrivacyConfirmed}
        setPopupVisible={setPrivacyVisible}
        termName="(필수) 찍구 개인정보처리방침"
      />
    </Container>
  );
};

export default TermConfirmStepComponent;
