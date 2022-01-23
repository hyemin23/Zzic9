import styled from "styled-components";

interface gridType {
  className?: string | null;
  children?: any;
  id?: string;
  margin?: string | null;
  padding?: string | null;
  width?: string;
  height?: string;
  bg?: string | null;
  display?: string | null;
  justifyContent?: string | null;
  alignItems?: boolean;
  flexDirection?: boolean;
  flexWrap?: string | null;
  textAlign?: boolean;
  border?: string | null;
  borderRadius?: boolean;
  borderTop?: string | null;
  borderBottom?: string | null;
  borderLeft?: string | null;
  borderRight?: string | null;
  overflow?: string | null;
  overflowX?: string | null;
  overflowY?: string | null;
  minWidth?: string | null;
  maxWidth?: string | null;
  minHeight?: string | null;
  maxHeight?: string | null;
  boxShadow?: string | null;
  potision?: string | null;
  top?: string | null;
  bottom?: string | null;
  left?: string | null;
  right?: string | null;
  hover?: string | null;
  zIndex?: string | null;
  _onClick?: () => {};
  is_flex?: string | null;
  color?: string | null;
  fontSize?: string | null;
  backdropFilter?: string | null;
  bgi?: string | null;
  bgisize?: string | null;
  bgiposition?: string | null;
  bgirepeat?: string | null;
  cusor?: string | null;
  pointerEvents?: string | null;
  backgroundColor?: string | null;
  lineHeight?: string | null;
  boxSizing?: string | null;
  position?: string | null;
}

const GridBox = styled.div<any>`
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.bg};
  display: ${(props) => props.display};
  ${(props) =>
    props.flexDirection ? `flex-direction:${props.flexDirection}` : ""};
  flex-wrap: ${(props) => props.flexWrap};
  ${(props) => (props.alignItems ? `align-items: ${props.alignItems};` : "")};
  justify-content: ${(props) => props.justifyContent};
  text-align: ${(props) => props.textAlign};
  border: ${(props) => props.border};
  ${(props) =>
    props.borderRadius ? `border-radius: ${props.borderRadius}` : ""};
  border-top: ${(props) => props.borderTop};
  border-bottom: ${(props) => props.borderBottom};
  border-left: ${(props) => props.borderLeft};
  border-right: ${(props) => props.borderRight};
  overflow-x: ${(props) => props.overflowX};
  overflow-y: ${(props) => props.overflowY};
  overflow: ${(props) => props.overflow};
  min-width: ${(props) => props.minWidth};
  max-width: ${(props) => props.maxWidth};
  min-height: ${(props) => props.minHeight};
  max-height: ${(props) => props.maxHeight};
  background-color: ${(props) => props.backgroundColor};
  box-sizing: ${(props) => props.boxSizing};
  box-shadow: ${(props) => props.boxShadow};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  cursor: ${(props) => props.cusor};
  ${(props) => (props.bgi ? `background-image:url(${props.bgi})` : "")};
  z-index: ${(props) => props.zIndex};
  ${(props) => (props.bgisize ? `background-size:${props.bgisize}` : "")};
  ${(props) =>
    props.bgiposition ? `background-position:${props.bgiposition}` : ""};
  ${(props) => (props.bgirepeat ? `background-repeat:${props.bgirepeat}` : "")};
  z-index: ${(props) => props.zIndex};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  backdrop-filter: ${(props) => props.backdropFilter};
  font-family: "NanumSquareR";
  ${(props) =>
    props.is_flex ? `display: flex;  justify-content: space-between;` : ""}

  ::-webkit-scrollbar {
    display: none;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 15px;
  }
  ::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 15px;
  }
`;

const Grid = (props: gridType) => {
  const {
    className = "",
    children = null,
    _onClick,
    id = "",
    margin = "",
    padding = null,
    width = "100%",
    height = "100%",
    bg = null,
    display = null,
    justifyContent = null,
    alignItems = false,
    flexDirection = false,
    flexWrap = null,
    textAlign = false,
    border = null,
    borderRadius = false,
    borderTop = null,
    borderBottom = null,
    borderLeft = null,
    borderRight = null,
    overflow = null,
    overflowX = null,
    overflowY = null,
    minWidth = null,
    maxWidth = null,
    minHeight = null,
    maxHeight = null,
    boxShadow = null,
    backgroundColor = null,
    lineHeight = null,
    boxSizing = null,
    position = null,
    top = null,
    bottom = null,
    left = null,
    right = null,
    hover = null,
    zIndex = null,
    is_flex = null,
    color = null,
    fontSize = null,
    backdropFilter = null,
    bgi = null,
    bgisize = null,
    bgiposition = null,
    bgirepeat = null,
    cusor = null,
    pointerEvents = null,
  } = props;

  const styles = {
    id,
    margin,
    padding,
    width,
    height,
    bg,
    display,
    justifyContent,
    alignItems,
    flexDirection,
    flexWrap,
    textAlign,
    border,
    borderRadius,
    borderTop,
    borderBottom,
    borderLeft,
    borderRight,
    overflow,
    overflowX,
    overflowY,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    boxShadow,
    backgroundColor,
    lineHeight,
    boxSizing,
    position,
    top,
    bottom,
    left,
    right,
    hover,
    zIndex,
    is_flex,
    color,
    fontSize,
    backdropFilter,
    bgi,
    bgisize,
    bgiposition,
    bgirepeat,
    cusor,
    pointerEvents,
  };
  return (
    <GridBox {...styles} onClick={_onClick} id={id} className={className}>
      {children}
    </GridBox>
  );
};

export default Grid;
