import { css, DefaultTheme, ThemeProps } from "styled-components";
import { FontSize } from "./theme";

export interface BaseProps extends ThemeProps<DefaultTheme> {
  mb?: string;
  mr?: string;
  pt?: string;
  p?: string;
  fontSize: "small" | "default" | "large";
  height?: string;
  textAlign?: "left" | "center" | "right";
}

export const BaseMarginBotton = css`
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

export const BaseTextAlign = css`
  text-align: ${({ textAlign = "left" }: BaseProps) => textAlign};
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
