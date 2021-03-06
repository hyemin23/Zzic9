import {
  BaseProps,
  BaseStyleProps,
  LightUnderline,
  Underline,
} from "@src/styles/common";
import theme from "@src/styles/theme";
import styled, { css } from "styled-components";

export interface InputStyleProps extends BaseProps {
  shape?: "underline";
}

const BaseInput = css<InputStyleProps>`
  ${BaseStyleProps};
  width: 100%;

  &:focus {
    outline: none;
  }
`;

export const BoxInput = styled.input<InputStyleProps>`
  ${BaseInput};

  padding: 10px 20px;
  border-radius: 50px;
  border: 1px solid ${theme.color.point};
`;

export const DividedInput = styled.input`
  ${BaseInput};
  border: none;
  &:not(:first-child) {
    border-top: 1px solid ${theme.color.gray2};
  }
`;

export const UnderlineInput = styled.input<InputStyleProps>`
  ${BaseInput};
  ${Underline};

  &:placeholder-shown {
    border-bottom: 3px solid ${theme.color.gray3};
  }

  &:disabled {
    background: transparent;
    color: ${theme.color.gray5};
  }
`;

export const LightUnderlineInput = styled.input<InputStyleProps>`
  ${LightUnderline};
  ${BaseInput};

  &:disabled {
    background-color: #fff;
  }
`;
