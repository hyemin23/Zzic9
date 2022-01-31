import React from "react";
import styled from "styled-components";

interface IProps {
  isValid: boolean;
  text: string;
}

const Container = styled.p<{ isValid: boolean }>`
  color: ${({ isValid }) => (isValid ? `red` : `green`)};
  display: flex;
  align-items: center;
  /* svg {
    margin-right: 8px;
  } */
`;

const PasswordWarning: React.FC<IProps> = ({ isValid, text }) => {
  return <Container isValid={isValid}>{text}</Container>;
};

export default PasswordWarning;
