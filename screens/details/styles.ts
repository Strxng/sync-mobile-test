import { ITheme } from "@/common/theme";
import styled from "styled-components/native";

export const PaddingContainer = styled.View<{ theme: ITheme }>``;

export const Banner = styled.View<{ theme: ITheme }>`
  background-color: ${({ theme }) => theme.colors.backdrop};
  height: 200px;
  width: 100%;
`;

export const Avatar = styled.View<{ theme: ITheme }>`
  border-color: ${({ theme }) => theme.colors.background};
  left: 50%;
  top: 200px;
  margin-left: -75px;
  margin-top: -75px;
  background-color: grey;
  position: absolute;
  border-radius: 75px;
  height: 150px;
  width: 150px;
  border-width: 10px;
`;

export const Content = styled.View<{ theme: ITheme }>`
  padding: ${({ theme }) => theme.spacing.paddings.large}px;
  align-items: center;
  margin-top: 75px;
  width: 100%;
`;

export const InterestContainer = styled.View<{ theme: ITheme }>`
  border-color: ${({ theme }) => theme.colors.backdrop};
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border-width: 2px;
  border-radius: 15px;
`;

export const InterestSection = styled.View<{ theme: ITheme }>`
  margin-top: ${({ theme }) => theme.spacing.margins.large}px;
  gap: ${({ theme }) => theme.spacing.gaps.medium}px;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
`;
