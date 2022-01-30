import { FontSize } from "@src/styles/theme";
import React from "react";
import styled from "styled-components";
import { PagePopup } from "../atoms/PagePopup";
import TitleHeaderComponent from "../molecules/TitleHeader.component";

const ContentsWrapper = styled.div`
  padding-top: 60px;
  overflow-y: auto;
  font-size: ${FontSize.Small};
`;
const TermPopupComponent = ({
  visible,
  setInvisible,
  title,
  children,
}: any) => {
  return (
    <PagePopup visible={visible}>
      <TitleHeaderComponent title={title} onBack={setInvisible} />
      <ContentsWrapper>{children}</ContentsWrapper>
    </PagePopup>
  );
};

export default TermPopupComponent;
