import { BaseProps, BaseStyleProps } from "@src/styles/common";
import theme from "@src/styles/theme";
import React from "react";
import styled from "styled-components";

import SmallRightArrowIcon from "../icon/SmallRightArrow.icon";
import { TextButton } from "../atoms/TextButton";
import CheckIcon from "../icon/Check.icon";

export const TermButtonContentsWrapper = styled.div<BaseProps>`
  ${BaseStyleProps};
  display: flex;
  justify-content: flex-start;
  alignitems: center;

  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

interface CircleButtonProps {
  size: string;
  filled?: boolean;
  selected?: boolean;
}

export const CircleButton = styled.div<CircleButtonProps>`
  cursor: pointer;
  border: 1px solid ${theme.color.gray3};
  border-radius: 100px;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: calc(${({ size }) => size} - 14px);

  ${({ selected = false, filled = true }) =>
    selected &&
    `
    background-color: ${filled ? theme.color.primary : "#fff"}; 
    border-color: transparent;
    svg {
      color: #fff;
    }
  `}

  svg {
    width: calc(${({ size }) => size} - 12px);
    height: calc(${({ size }) => size} - 12px);
  }
`;

const TermCheckButtonComponent = ({
  confirmed,
  toggleConfirmed,
  termName,
  setPopupVisible,
}: any) => {
  return (
    <TermButtonContentsWrapper mb="20px">
      <div>
        <CircleButton
          size="24px"
          selected={confirmed}
          onClick={toggleConfirmed}
        >
          <CheckIcon color={confirmed ? "#fff" : theme.color.gray3} />
        </CircleButton>
      </div>

      <TextButton fontSize="small" onClick={setPopupVisible}>
        <span>{termName}</span>
        <SmallRightArrowIcon />
      </TextButton>
    </TermButtonContentsWrapper>
  );
};

export default TermCheckButtonComponent;
