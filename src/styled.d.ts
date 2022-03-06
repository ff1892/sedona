import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {

    color: {
      black: string;
      dark: string;
      gray: string;
      light: string;
      white: string;
      warmLight: string;
      warmDark: string;
      neutralLight: string;
      neutralDark: string;
      coolLight: string;
      coolDark: string;
      coolLight20: string;
      coolLight12: string;
      error: string;
      warn: string;
      success: string;
    };

    font: {
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
