import { BaseProps } from "@src/styles/common";
import React from "react";
import styled, { css } from "styled-components";

export interface ButtonStyleProps extends BaseProps {}

export const BaseButton = css<ButtonStyleProps>``;

export const Button = styled.button<ButtonStyleProps>``;
