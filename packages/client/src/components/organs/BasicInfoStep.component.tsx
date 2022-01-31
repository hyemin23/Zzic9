import useInput from "@src/hooks/useInput.hook";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { UnderlineInput } from "../atoms/Input";
import PasswordWarning from "../atoms/PasswordWarning";
import { Button } from "../atoms/Button";
import styled from "styled-components";
import Grid from "@src/elements/Grid";
import { BaseMarginBottom, BaseProps } from "@src/styles/common";

// 리렌더링 방지
const PASSWORD_MIN_LENGTH = 8;

const EmailWrap = styled.div<BaseProps>`
  ${BaseMarginBottom}
  display: flex;
  align-items: center;
  width: 100%;
`;

const BasicInfoStepComponent = () => {
  const [email, , setEmail] = useInput("");
  const [subEmail, , setSubEmail] = useInput("");
  const [password, passwordChange] = useInput("");
  const [passwordCheck, passwordChangeCheck] = useInput("");
  const [passwordFocused, setPasswordFocused] = useState(false);

  // 비밀번호 focus시
  const onFocusPassword = useCallback(() => {
    setPasswordFocused(true);
  }, []);

  // * 비밀번호 확인 조건
  const isPasswordOverMinLength = useMemo(
    () =>
      !!password &&
      !!passwordCheck &&
      passwordCheck.length >= PASSWORD_MIN_LENGTH &&
      password.length >= PASSWORD_MIN_LENGTH,
    [password, passwordCheck],
  );

  const onChangeEmail = useCallback(
    ({ target }) => {
      setEmail(target.value);
    },
    [email],
  );

  const onChangeSubEmail = useCallback(
    ({ target }) => {
      setSubEmail(target.value);
    },
    [subEmail],
  );
  const S = {
    EmailWrap,
  };
  return (
    <div>
      <S.EmailWrap mb="20px">
        <UnderlineInput
          type="email"
          value={email}
          onChange={onChangeEmail}
          placeholder="이메일 입력"
        />
        <span>@</span>
        <UnderlineInput
          type="text"
          list="emailList-options"
          value={subEmail}
          onChange={onChangeSubEmail}
        />
        <datalist id="emailList-options">
          <option value="naver.com" />
          <option value="daum.com" />
        </datalist>
      </S.EmailWrap>
      <UnderlineInput
        value={password}
        onChange={passwordChange}
        type="password"
        placeholder="비밀번호 입력"
        onFocus={onFocusPassword}
      />
      <UnderlineInput
        value={passwordCheck}
        onChange={passwordChangeCheck}
        type="password"
        placeholder="비밀번호 확인"
        onFocus={onFocusPassword}
      />
      {passwordFocused && (
        <PasswordWarning
          isValid={!isPasswordOverMinLength}
          text="최소 8자 이상 입력해주세요."
        />
      )}
    </div>
  );
};

export default BasicInfoStepComponent;
