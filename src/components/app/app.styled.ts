import styled from 'styled-components';

type HeaderProps = {
  color?: string;
};

export const Header = styled.h1<HeaderProps>`
  color: ${({color}) => color};
`;
