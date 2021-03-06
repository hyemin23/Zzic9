import { css, DefaultTheme, ThemeProps } from "styled-components";
import theme, { FontSize } from "./theme";

export interface BaseProps extends ThemeProps<DefaultTheme> {
  mb?: string;
  mr?: string;
  pt?: string;
  p?: string;
  fontSize?: "small" | "default" | "large";
  height?: string;
  textAlign?: "left" | "center" | "right";
}

export const BaseMarginBottom = css`
  margin-bottom: ${(props: BaseProps) => props.mb};
`;

export const BaseMarginRight = css`
  margin-right: ${(props: BaseProps) => props.mr};
`;

export const BasePaddingTop = css`
  padding-top: ${(props: BaseProps) => props.pt};
`;

export const BasePadding = css`
  padding: ${(props: BaseProps) => props.p};
`;

export const BaseHeight = css`
  height: ${(props: BaseProps) => props.height};
`;

export const BaseFontSize = css`
  font-size: ${({ fontSize }: BaseProps) => {
    switch (fontSize) {
      case "large":
        return FontSize.PrimaryLabel;
      case "default":
        return FontSize.Default;
      case "small":
        return FontSize.PrimaryDescription;
      default:
        return FontSize.Default;
    }
  }};
`;

export const BaseTextAlign = css`
  text-align: ${({ textAlign = "left" }: BaseProps) => textAlign};
`;

export const Underline = css`
  border: none;
  border-bottom: 3px solid ${theme.color.primary};
  border-radius: 0;
  font-weight: 400;
  padding: 15px 10px;

  text-align: inherit;

  &:focus {
    border-color: ${theme.color.primary};
  }
`;

export const LightUnderline = css`
  border: none;
  text-align: inherit;
  border-radius: 0;

  padding: 10px 10px;
  border-bottom: 1px solid ${theme.color.gray3};
`;

export const NoScroll = css`
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const BaseStyleProps = css`
  ${BasePadding};
  ${BasePaddingTop};
  ${BaseMarginBottom};
  ${BaseMarginRight};
  ${BaseFontSize};
  ${BaseHeight};
  ${BaseTextAlign};
`;
