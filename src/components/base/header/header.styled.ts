import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as SearchSvg } from '../../../assets/img/icons/icon-search.svg';
import { ReactComponent as FavoritesSvg } from '../../../assets/img/icons/icon-favorites.svg';
import { ButtonWarm } from '../../ui-kit-styled/button.styled';
import { TextLinkStyleBlack, IconLinkStyleWarm } from '../../ui-kit-styled/link.styled';



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
  padding: 13px 52px 13px 59px;
`;

const NavLink = styled(Link)<NavLinkProps>`
  display: block;
  padding: 6px 12px;
  font-size: ${({ theme }) => theme.font.small};
  font-weight: 700;
  position: relative;
  border-radius: 10px;

  ${TextLinkStyleBlack}

  ${({ isActive, theme }) => isActive && `
    &::before {
      position: absolute;
      content: '';
      bottom: -14px;
      left: 12px;
      right: 12px;
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
    margin-right: 8px;
  }
`;

const LogoLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 138px;
  height: 70px;
  outline: none;
  border-radius: 10px;
  z-index: 10;

  &:focus {
    outline: ${({ theme }) => theme.color.coolLight} solid 3px;
    outline-offset: -3px;
  }

  &:active {
    outline: none;
  }
`;

const LogoImage = styled.img``;

const HeaderInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  > *:not(:first-child) {
    margin-right: 21px;
  }
`;

const HeaderOrder = styled(ButtonWarm)`
  min-width: 160px;
`;

const LinkIcon = styled(Link)`
  position: relative;
  display: block;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  ${IconLinkStyleWarm}

  &:active span {
      color: ${({ theme }) => theme.color.white30};
  }

  ::before {
    position: absolute;
    content: '';
    width: 80px;
    height: 20px;
    background: transparent;
    bottom: -10px;

  }
`

const SearchIcon = styled(SearchSvg)``;

const FavoritesIcon = styled(FavoritesSvg)``;

const FavoritesCounter = styled.span`
  position: absolute;
  width: 19px;
  height: 19px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.neutralLight};
  font-size: ${({ theme }) => theme.font.extraMini};
  line-height: ${({ theme }) => theme.font.extraMini};
  letter-spacing: -1px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  top: 0;
  right: 0;
`;

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
  FavoritesCounter,
};
