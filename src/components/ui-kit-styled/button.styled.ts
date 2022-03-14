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
  display: inline-block;
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

export const ButtonColdCatalog = styled(ButtonColor)`
  ${ButtonStyle({
    primaryColor: theme.color.coolLight,
    secondaryColor: theme.color.coolDark,
    outlineColor: theme.color.warmLight,
    ghostColor: theme.color.white30,
  })}

  &:hover {
    outline: ${theme.color.warmLight} solid 1px;
    outline-offset: -1px;
  }

  &:active {
    outline: ${theme.color.warmLight} solid 1px;
    outline-offset: -1px;
  }
`;

export const ButtonColdFilter = styled(ButtonColor)`
  ${ButtonStyle({
    primaryColor: theme.color.coolLight,
    secondaryColor: theme.color.coolDark,
    outlineColor: theme.color.white,
    ghostColor: theme.color.white30,
  })}
`;

export const ButtonNeutral = styled(ButtonColor)`
  ${ButtonStyle({
  primaryColor: theme.color.neutralLight,
  secondaryColor: theme.color.neutralDark,
  outlineColor: theme.color.warmLight,
  ghostColor: theme.color.white30,
})}
`;

export const ButtonIconBlack = styled.button`
  width: 48px;
  height: 48px;
  border: none;
  outline: none;
  border-radius: 4px;
  box-shadow: inset 0 0 0 2px ${({ theme }) => theme.color.gray};
  background-color: ${({ theme }) => theme.color.white};

  &:hover {
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.color.coolLight};
  }

  &:focus {
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.color.coolLight};
  }

  &:active {
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.color.black};
  }
`;
