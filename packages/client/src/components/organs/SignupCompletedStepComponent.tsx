import { GuestMain } from "@src/styles/template/GuestMain.styles";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Button } from "../atoms/Button";

const Container = styled.div`
  h3 {
    margin-top: 20xp;
  }
`;

const SignupCompletedStepComponent = () => {
  return (
    // signup page loading 회원가입 분기 체크 오류도 체크하기
    <div>
      <Container>
        <h3>회원가입이 완료되었습니다!</h3>
        <p>가입한 계정으로 로그인해주세요!</p>
        <GuestMain.BottomWrap>
          <Link href="/login">
            <a>
              <Button color="primary">로그인</Button>
            </a>
          </Link>
        </GuestMain.BottomWrap>
      </Container>
    </div>
  );
};

export default SignupCompletedStepComponent;
