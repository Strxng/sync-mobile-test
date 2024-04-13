import styled from "styled-components/native";
import { ITextProps } from "./index";
import { ITheme } from "@/common/theme";

export const Text = styled.Text<{ theme: ITheme } & ITextProps>`
  color: ${({ color, theme }) => theme.colors.texts[color]};
  font-family: ${({ family, theme }) => theme.fonts[family]};
  font-size: ${({ theme, size }) => theme.sizes.font[size]}px;
  /* line-height: ${({ theme, size }) => theme.sizes.font[size]}px; */
  text-align: ${({ align }) => align ?? "left"};
  flex-wrap: wrap;
`;
