import { Button } from "@src/components/atoms/Button";
import { DividedInput } from "@src/components/atoms/Input";
import AppTitleComponent from "@src/components/molecules/AppTitle.components";
import Grid from "@src/elements/Grid";
import { BaseProps, BaseStyleProps } from "@src/styles/common";
import { GuestMain } from "@src/styles/template/GuestMain.styles";
import theme from "@src/styles/theme";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const ContentsWrap = styled.form<BaseProps>`
  ${BaseStyleProps};

  background: #ffff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding: 5px 20px;
`;

const S = { ContentsWrap };

export type LoginForm = {
  email: string;
  password: string;
};

const LoginPageTemplate = ({ onSubmit, onChange, values, error }: any) => {
  return (
    <GuestMain.Container>
      <AppTitleComponent mb="60px" />
      <S.ContentsWrap mb="20px" onSubmit={onSubmit}>
        <DividedInput
          height="65px"
          value={values.email}
          onChange={onChange}
          placeholder="아이디"
          id="email"
          name="email"
          type="email"
          autoComplete="on"
        />
        <DividedInput
          height="65px"
          value={values.password}
          onChange={onChange}
          placeholder="비밀번호"
          id="password"
          name="password"
          type="password"
          autoComplete="on"
        />
        <Button onClick={onSubmit} color="primary" height="50px" mb="10px">
          로그인
        </Button>

        {/* 에러 메시지 보여쥬가 */}
      </S.ContentsWrap>
      <Link href="/signup">
        <a>
          <Button color="white" mb="20px">
            회원가입
          </Button>
        </a>
      </Link>
    </GuestMain.Container>
  );
};

export default LoginPageTemplate;
