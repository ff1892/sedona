import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const ButtonWarm = styled(ButtonColor)`
  background-color: ${({ theme }) => theme.color.warmLight};

   &:hover {
    background-color: ${({ theme }) => theme.color.warmDark};
  }

  &:focus {
    outline: ${({ theme }) => theme.color.coolLight} solid 3px;
  }

  &:active {
    outline: none;
    color: ${({ theme }) => theme.color.white30};
  }
`

export const ButtonCold = styled(ButtonColor)`
  background-color: ${({ theme }) => theme.color.coolLight};

   &:hover {
    background-color: ${({ theme }) => theme.color.coolDark};
  }

  &:focus {
    outline: ${({ theme }) => theme.color.warmLight} solid 3px;
  }

  &:active {
    outline: none;
    color: ${({ theme }) => theme.color.white30};
  }
`
