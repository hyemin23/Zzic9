import Grid from "@src/elements/Grid";
import useInput from "@src/hooks/useInput.hook";
import { Resource } from "@src/models/dto/api-response";
import { BaseProps, BaseStyleProps } from "@src/styles/common";
import React, { useMemo } from "react";
import { useCallback } from "react";
import styled from "styled-components";
import { getJoinPath } from "utils/enum.util";
import { UnderlineInput } from "../atoms/Input";
import ProfileImageComponent from "../molecules/ProfileImageComponent";

const FormWrapper = styled.div<BaseProps>`
  ${BaseStyleProps};

  div {
    margin: 0 auto;
  }

  text-align: center;
  width: 100%;
`;

const NicknameWrapper = styled.div`
  width: 50%;
`;

const ProfileStepComponent = () => {
  const [nickname, onChangeNickname, setNickname] = useInput("");

  const joinPath = useMemo(() => {
    return getJoinPath();
  }, []);

  const onUploadImage = useCallback((uploaded: Resource[]) => {}, []);

  return (
    <Grid>
      <FormWrapper>
        {/* 프로필 기본 사진 넣어주기 */}
        <ProfileImageComponent
          src={""}
          onUploadImage={onUploadImage}
          allowUpload
          mb="20px"
        />
        <NicknameWrapper>
          <UnderlineInput
            value={nickname}
            onChange={onChangeNickname}
            placeholder="닉네임"
            type="text"
          />
        </NicknameWrapper>
        {/* <SelectComponent list={joinPath} labelKeyName="value" idKeyName="key" /> */}
      </FormWrapper>
    </Grid>
  );
};

export default ProfileStepComponent;
