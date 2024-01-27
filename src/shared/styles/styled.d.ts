import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors:{
      basicColorBlack: string;
      basicColorBlack60: string;
      basicColorGrayMedium: string;
      basicColorWhite: string;
      primaryColorGreen: string;
      secondaryColorPink: string;
    },
    media:{
      mobileL: string;
      tablet: string;
      desktop: string;
      desktopL: string;
    }
  }
}
