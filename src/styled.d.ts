import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {

    color: {
      black: string;
      black15: string;
      black20: string;
      black25: string;
      black30: string;
      black60: string;
      dark: string;
      gray: string;
      light: string;
      white: string;
      white30: string;
      white60: string;
      white80: string;
      warmLight: string;
      warmLight30: string;
      warmDark: string;
      neutralLight: string;
      neutralDark: string;
      coolLight: string;
      coolLight30: string;
      coolLight20: string;
      coolLight12: string;
      coolDark: string;
      coolDark30: string;
      error: string;
      warn: string;
      success: string;
      specialDark: string;
    };

    font: {
      extraMini: string;
      mini: string;
      extraSmall: string;
      small: string;
      semiBase: string;
      base: string;
      medium: string;
      large: string;
      extraLarge: string;
    };
  }
}
