import { LightUnderline, Underline } from "@src/styles/common";
import theme from "@src/styles/theme";
import React, { ReactEventHandler, SelectHTMLAttributes, useMemo } from "react";
import styled from "styled-components";

export type SelectStyleProp = {
  shape: "default" | "light" | "rounded";
  selected: string | null;
};

interface SelectProp<T> extends SelectHTMLAttributes<HTMLSelectElement> {
  selected?: string | null;
  list: T[];
  idKeyName: string;
  labelKeyName: string;
  onSelect: ReactEventHandler<HTMLSelectElement>;
  shape?: "default" | "light" | "rounded";
  iconPosition?: string;
}

const Select = styled.select<SelectStyleProp>`
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;

  position: relative;

  ${({ shape }) => {
    switch (shape) {
      case "default":
        return Underline;
      case "light":
        return LightUnderline;
      default:
        return Underline;
    }
  }};

  ${({ shape }) => (shape === "light" ? "padding-left: 6px;" : "")};

  width: 100%;
  cursor: pointer;

  &:focus {
    outline: none;
    background-color: #fff;
  }

  color: ${({ selected }) =>
    selected ? theme.color.black : theme.color.gray4};

  ${({ shape }) =>
    shape === "rounded"
      ? `
      height: 58px;
      padding: 0 15px;
    border-radius: 100px;
    border: 1px solid ${theme.color.primary};  
  `
      : ""}

  option {
    margin: 0;
    padding: 0;
    &:disabled {
      background-color: #fff;
    }
  }

  &:disabled {
    background-color: #fff;
  }
  background-color: #fff;
`;

const Wrapper = styled.div`
  position: relative;
`;

function SelectComponent<T>({
  name,
  selected,
  list,
  idKeyName,
  labelKeyName,
  onSelect,
  shape,
  iconPosition = "10px",
  placeholder = "",
}: SelectProp<T>) {
  const options = useMemo(() => {
    const disabledKeyName = "disabled";

    const optionList = list.map((x: any) => ({
      key: x[idKeyName],
      label: x[labelKeyName],
      disabled: x[disabledKeyName],
    }));

    return optionList.map((x) => (
      <option key={x.key} value={x.key} disabled={x.disabled}></option>
    ));
  }, [list, idKeyName, labelKeyName]);

  return (
    <Wrapper>
      {/* <Select selected={selected} shape={shape}></Select> */}
    </Wrapper>
  );
}

export default SelectComponent;
