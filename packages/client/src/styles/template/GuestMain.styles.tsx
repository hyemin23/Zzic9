import styled from "styled-components";
import theme, { Padding, windowSize } from "../theme";

const BottomWrap = styled.div`
  position: fixed;
  bottom: 30px;
  left: ${Padding.pageX};
  right: ${Padding.pageX};

  ${theme.window.tab} {
    max-width: 414px;
    width: calc(${windowSize.mobile} - ${Padding.pageX} * 8);
    left: auto;
    right: auto;
  }
`;

export const GuestMain = {
  BottomWrap,
};

export default {
  BottomWrap,
};
