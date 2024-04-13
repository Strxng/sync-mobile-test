import CSS from "csstype";

export interface ITheme {
  colors: {
    background: CSS.Property.Color;
    backdrop: CSS.Property.Color;
    primary: CSS.Property.Color;
    texts: {
      primary: CSS.Property.Color;
      secondary: CSS.Property.Color;
    };
  };

  spacing: {
    paddings: {
      large: number;
    };
    gaps: {
      large: number;
    };
  };
  sizes: {
    font: {
      extraSmall: number;
      small: number;
      medium: number;
      large: number;
      extraLarge: number;
    };
  };
  fonts: {
    light: string;
    regular: string;
    medium: string;
    semiBold: string;
    bold: string;
  };
}

export const theme: ITheme = {
  colors: {
    background: "#ffffff",
    backdrop: "#f9fafb",
    primary: "#238bfd",
    texts: {
      primary: "#35404f",
      secondary: "#5c6a7d",
    },
  },
  fonts: {
    light: "light",
    regular: "regular",
    medium: "medium",
    semiBold: "semiBold",
    bold: "bold",
  },
  spacing: {
    paddings: {
      large: 20,
    },
    gaps: {
      large: 20,
    },
  },
  sizes: {
    font: {
      extraSmall: 8,
      small: 12,
      medium: 16,
      large: 20,
      extraLarge: 28,
    },
  },
};
