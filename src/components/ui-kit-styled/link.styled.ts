import { css } from 'styled-components';
import { appTheme as theme } from '../../theme';


type LinkStyleProps = {
  primaryColor: string,
  secondaryColor: string,
  outlineColor: string,
  ghostColor: string,
}

const TextLinkStyle = ({
  primaryColor, secondaryColor, outlineColor, ghostColor
}: LinkStyleProps) => css`

  color: ${primaryColor};

  &:hover {
    color: ${secondaryColor};
  }

  &:focus {
    outline: ${outlineColor} solid 3px;
    outline-offset: -3px;
    color: ${secondaryColor};
  }

  &:active {
    outline: none;
    color: ${ghostColor};
  }
`;


export const TextLinkStyleBlack = TextLinkStyle({
  primaryColor: theme.color.black,
  secondaryColor: theme.color.warmLight,
  outlineColor: theme.color.coolLight,
  ghostColor: theme.color.warmLight30,
});


const IconLinkStyle = ({
  primaryColor, secondaryColor, outlineColor, ghostColor
}: LinkStyleProps) => css`

  svg path {
    fill: ${primaryColor};
  }

   &:hover svg path {
      fill: ${secondaryColor};
  }

  &:focus {
    outline: ${outlineColor} solid 3px;
    outline-offset: -3px;

    svg path {
      fill: ${secondaryColor};
    }
  }

  &:active {
    outline: none;
    svg path {
      fill: ${ghostColor};
    }
  }
`;

export const IconLinkStyleWarm = IconLinkStyle({
  primaryColor: theme.color.warmDark,
  secondaryColor: theme.color.warmLight,
  outlineColor: theme.color.coolLight,
  ghostColor: theme.color.warmLight30,
});

export const IconLinkStyleCool = IconLinkStyle({
  primaryColor: theme.color.coolLight,
  secondaryColor: theme.color.coolDark,
  outlineColor: theme.color.coolLight,
  ghostColor: theme.color.coolDark30,
});

export const IconLinkStyleBlack = IconLinkStyle({
  primaryColor: theme.color.black,
  secondaryColor: theme.color.warmLight,
  outlineColor: theme.color.coolLight,
  ghostColor: theme.color.warmLight30,
});
