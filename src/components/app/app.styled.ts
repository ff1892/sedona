import { createGlobalStyle } from 'styled-components';
import PtSansRegularWoff2 from '../../assets/fonts/pt-sans-regular.woff2';
import PtSansRegularWoff from '../../assets/fonts/pt-sans-regular.woff';
import PtSansBoldWoff2 from '../../assets/fonts/pt-sans-bold.woff2';
import PtSansBoldWoff from '../../assets/fonts/pt-sans-bold.woff';

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    src: url(${PtSansRegularWoff2}) format('woff2');
  }

  @font-face {
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    src: url(${PtSansRegularWoff}) format('woff');
  }

  @font-face {
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 700;
    src: url(${PtSansBoldWoff2}) format('woff2');
  }

  @font-face {
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 700;
    src: url(${PtSansBoldWoff}) format('woff');
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  body {
    width: 100%;
    height: 100%;

    font-family: 'PT Sans', Arial, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: ${({ theme }) => theme.font.base};
    line-height: 28px;
    color: ${({ theme }) => theme.color.black};
    font-feature-settings: 'pnum' on, 'lnum' on;

    background-color: ${({ theme }) => theme.color.light};

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: ${({ theme }) => theme.color.black};
    text-decoration: none;
  }

  img,
  video {
    display: block;
    max-width: 100%;
    height: auto;
  }

  textarea {
    resize: none;
  }

  /* chrome autofill background removal */
  input:-webkit-autofill {
    box-shadow: inset 0 0 0 1000px ${({ theme }) => theme.color.white};

    -webkit-text-fill-color: ${({ theme }) => theme.color.black}};
  }

  /* firefox placeholder \ invalid fix + ios bdrs */
  input {
    border-radius: 0;
  }

  input::placeholder {
    opacity: 1;
  }

  input:invalid {
    box-shadow: none;
  }

  textarea {
    border-radius: 0;
  }

  textarea::placeholder {
    opacity: 1;
  }

  textarea:invalid {
    box-shadow: none;
  }

  select {
    border-radius: 0;
  }

  /* chrome search X removal */
  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    appearance: none;
  }

  /* input[number] arrows removal */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    margin: 0;

    appearance: none;
  }

  input[type='number'] {
    appearance: textfield;
  }

  /* ios button \ inputs reset */
  select,
  textarea,
  input:matches([type='email'], [type='number'], [type='password'], [type='search'], [type='tel'], [type='text'], [type='url']) {
    appearance: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    appearance: none;
  }

  .visually-hidden {
    position: absolute;

    width: 1px;
    height: 1px;
    margin: -1px;

    clip: rect(0 0 0 0);
  }

  .prevent-scroll {
    overflow: hidden;
  }
`;

export { GlobalStyle };
