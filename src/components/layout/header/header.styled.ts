import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as SearchSvg } from '../../../assets/img/icons/icon-search.svg';
import { ReactComponent as FavoritesSvg } from '../../../assets/img/icons/icon-favorites.svg';

type NavLinkProps = {
  isActive?: boolean,
};

const Header = styled.header`
  position: relative;
  flex-shrink: 0;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 71px;
`;

const NavLink = styled.a<NavLinkProps>`
  display: block;
  padding: 19px 0;
  font-size: ${({ theme }) => theme.font.small};
  font-weight: 700;
  position: relative;
  outline: none;

  &:hover {
    color: ${({ theme }) => theme.color.warmLight}
  }

  &:active {
    box-shadow: none;
    opacity: 0.3;
  }

  ${({ isActive, theme }) => isActive && `
    &::before {
      position: absolute;
      content: '';
      bottom: -1px;
      left: 0;
      right: 0;
      height: 2px;
      background-color: ${theme.color.warmLight};
    }
  `}
`;

const HeaderNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  max-width: 570px;

  ${NavLink}:not(:last-child) {
    margin-right: 20px;
  }
`;

const LogoLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 138px;
  height: 70px;
`;

const LogoImage = styled.img``;

const HeaderInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  > *:not(:first-child) {
    margin-left: 10px;
  }
`;

const HeaderOrder = styled.a`
  display: block;
  padding: 9px 33px;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.mini};
  line-height: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.warmLight};
  border-radius: 4px;
`;

const LinkIcon = styled(Link)`
  position: relative;
  display: block;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  outline: none;

  &:focus {
    box-shadow: inset 0 0 0 3px ${({ theme }) => theme.color.coolLight};
  }

  &:active {
    box-shadow: none;
    opacity: 0.3;
  }

  &:hover svg {
    path {
      fill: ${({ theme }) => theme.color.warmLight};
    }
  }
`
const SearchIcon = styled(SearchSvg)``;

const FavoritesIcon = styled(FavoritesSvg)``;


export {
  Header,
  HeaderContainer,
  HeaderNav,
  NavLink,
  LogoLink,
  LogoImage,
  HeaderInfo,
  HeaderOrder,
  LinkIcon,
  SearchIcon,
  FavoritesIcon,
};
