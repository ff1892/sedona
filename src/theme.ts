import { DefaultTheme } from "styled-components";

const appTheme: DefaultTheme = {
  color: {
    black: '#000000',
    dark: '#333333',
    gray: '#E5E5E5',
    light: '#F2F2F2',
    white: '#FFFFFF',
    warmLight: '#756257',
    warmDark: '#615048',
    neutralLight: '#7DB54F',
    neutralDark: '#6C9E42',
    coolLight: '#83B3D3',
    coolDark: '#68A2CA',
    coolLight20: 'hsl(204 48% 67% / 0.2)',
    coolLight12: 'hsl(204 48% 67% / 0.12)',
    error: '#FF5757',
    warn: '#FD922E',
    success: '#7DB550',
  },

  font: {
    mini: '16px',
    extraSmall: '18px',
    small: '20px',
    semiBase: '22px',
    base: '24px',
    medium: '30px',
    large: '40px',
    extraLarge: '60px',
  }
};

export { appTheme }
