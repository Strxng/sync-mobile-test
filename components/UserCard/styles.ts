import { ITheme } from "@/common/theme";
import styled from "styled-components/native";

export const Container = styled.View<{ theme: ITheme }>`
  padding: ${({ theme }) => theme.spacing.paddings.large}px;
  background-color: ${({ theme }) => theme.colors.backdrop};
  border-radius: 20px;
  width: 100%;
`;

export const Column = styled.View``;

export const Row = styled.View<{ theme: ITheme }>`
  gap: ${({ theme }) => theme.spacing.gaps.large}px;
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

export const Avatar = styled.View<{ theme: ITheme }>`
  background-color: grey;
  height: 60px;
  width: 60px;
  border-radius: 30px;
`;
