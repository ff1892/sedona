import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { appTheme as theme } from '../../theme';

type ButtonProps = {
  primaryColor: string,
  secondaryColor: string,
  outlineColor: string,
  ghostColor: string,
}

export const ButtonColor = styled(Link)`
  display: block;
  padding: 9px;
  text-align: center;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.mini};
  line-height: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.white};
  border-radius: 4px;
`

const ButtonStyle = ({
  primaryColor, secondaryColor, outlineColor, ghostColor
}: ButtonProps) => css`
  background-color: ${primaryColor};

  &:hover {
    background-color: ${secondaryColor};
  }

  &:focus {
    background-color: ${secondaryColor};
    outline: ${outlineColor} solid 3px;
  }

  &:active {
    background-color: ${secondaryColor};
    outline: none;
    color: ${ghostColor}
  }
`;

export const ButtonWarm = styled(ButtonColor)`
  ${ButtonStyle({
    primaryColor: theme.color.warmLight,
    secondaryColor: theme.color.warmDark,
    outlineColor: theme.color.coolLight,
    ghostColor: theme.color.white30,
  })}
`;

export const ButtonCold = styled(ButtonColor)`
  ${ButtonStyle({
    primaryColor: theme.color.coolLight,
    secondaryColor: theme.color.coolDark,
    outlineColor: theme.color.warmLight,
    ghostColor: theme.color.white30,
  })}
`;
