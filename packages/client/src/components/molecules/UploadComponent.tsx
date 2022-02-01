import React from "react";
import { useCallback } from "react";
import styled from "styled-components";
import { ButtonStyleProps } from "../atoms/Button";

const IconButton = styled.label<ButtonStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    display: none;
  }
`;

const S = {
  IconButton,
};
const UploadComponent = ({
  folder,
  icon,
  onUploaded,
  setLoading,
  multiple = false,
}: any) => {
  const onUploadFile = useCallback(
    async (e) => {
      setLoading(true);

      // 이미지 업로드
      // const uploaded = await Promise.all(
      //   Object.entries(e.target.files).map((file)=> file[1],foleder)
      // )

      // 업로드가 끝내며 loading false로
    },
    [setLoading, onUploaded, folder],
  );
  return (
    <form>
      <S.IconButton htmlFor="file" color="gray">
        {icon}
        <input
          id="file"
          type="file"
          accept="image/*"
          onChange={onUploadFile}
          multiple={multiple}
        />
      </S.IconButton>
    </form>
  );
};

export default UploadComponent;
