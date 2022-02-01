import { Resource } from "@src/models/dto/api-response";
import { ThreeDots } from "react-loader-spinner";
import { BaseProps, BaseStyleProps } from "@src/styles/common";
import theme from "@src/styles/theme";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import styled from "styled-components";
import PatisserieIcon from "../icon/Patisserie.icon";
import { Loading } from "@nextui-org/react";
import UploadComponent from "./UploadComponent";
import { FolderPathType } from "@src/constant/enum.constant";
import CameraIcon from "../icon/Camera.icon";

interface ProfileImageProps {
  mb?: string;
  size?: "small" | "large" | "mid-small" | "medium";
  allowUpload?: boolean;
  src?: string;
  onUploadImage?: (e: Resource[]) => void;
}

const ProfileImageWrapper = styled.div<BaseProps>`
  ${BaseStyleProps};
  position: relative;
  width: fit-content;
`;
const Circle = styled.div<ProfileImageProps>`
  border: 6px solid ${theme.color.primary};

  img {
    width: auto;
    height: ${({ size }) => {
      switch (size) {
        case "large":
          return "80px";
        case "medium":
          return "72px";
        case "mid-small":
          return "56px";
        case "small":
          return "32px";
        default:
          return "80px";
      }
    }};
  }

  svg {
    width: auto;
    height: ${({ size }) => {
      switch (size) {
        case "large":
          return "48px";
        case "medium":
          return "48px";
        case "mid-small":
          return "32px";
        case "small":
          return "18px";
        default:
          return "48px";
      }
    }};
  }

  ${({ size }) => {
    switch (size) {
      case "large":
        return `  
        width: 80px;
       height: 80px;
        `;
      case "medium":
        return `  
        width: 72px;
        height: 72px;
        border-width: 5px;
        `;
      case "mid-small":
        return `  
        width: 56px;
        height: 56px;
        border-width: 5px;
        `;
      case "small":
        return `  
        width: 32px;
        height: 32px;
        border-width: 3px;
        `;
      default:
        return `  
        width: 80px;
        height: 80px;`;
    }
  }}

  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  position: relative;

  background-color: ${theme.color.gray0};
`;

const CameraButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 10;

  border: 1px solid ${theme.color.gray2};
  border-radius: 50%;
  background-color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 32px;
  width: 32px;

  cursor: pointer;
`;

const S = {
  ProfileImageWrapper,
  Circle,
};
const ProfileImageComponent: React.FC<ProfileImageProps> = ({
  mb = "",
  size = "large",
  allowUpload = true,
  src = "",
  onUploadImage = null,
}) => {
  const [loading, setLoading] = useState(false);

  const image = useMemo(() => {
    if (loading) return <Loading color="secondary" type="gradient" />;
    if (src) return <Image src={src} alt="프로필 이미지" />;
    return <PatisserieIcon />;
  }, [src, loading]);
  return (
    <S.ProfileImageWrapper mb={mb}>
      <S.Circle size={size}>{image}</S.Circle>
      {allowUpload && (
        <UploadComponent
          folder={FolderPathType.PROFILE}
          icon={
            <CameraButtonWrapper>
              <CameraIcon />
            </CameraButtonWrapper>
          }
          setLoading={setLoading}
          onUploaded={onUploadImage}
        />
      )}
    </S.ProfileImageWrapper>
  );
};

export default ProfileImageComponent;
