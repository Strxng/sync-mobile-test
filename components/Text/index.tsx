import { ReactNode } from "react";
import * as S from "./styles";

export interface ITextProps {
  size: "extraSmall" | "small" | "medium" | "large" | "extraLarge";
  family: "light" | "regular" | "medium" | "semiBold" | "bold";
  color: "primary" | "secondary";
  children: ReactNode;
  align?: "center" | "left" | "right";
  numberOfLines?: number;
}

export const Text = ({
  size = "medium",
  family = "regular",
  color = "primary",
  numberOfLines,
  align,
  children,
}: ITextProps) => {
  return (
    <S.Text
      numberOfLines={numberOfLines}
      align={align}
      size={size}
      color={color}
      family={family}
    >
      {children}
    </S.Text>
  );
};
