import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {

    color: {
      black: string;
      black25: string;
      dark: string;
      gray: string;
      light: string;
      white: string;
      white30: string;
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
