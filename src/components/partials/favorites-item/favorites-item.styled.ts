import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as DeleteSvg } from '../../../assets/img/icons/icon-delete.svg';
import { ImageLinkStyle } from '../../ui-kit-styled/link.styled';

const FavoritesItem = styled.li`
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
`;

const FavoritesLink = styled(Link)`
  display: flex;
  padding: 10px;
  border-radius: 10px;

  img {
    margin-right: 17px;
  }

  ${ImageLinkStyle}
`;

const FavoritesImage = styled.img.attrs({
  width: 48,
  height: 48,
})`
  border-radius: 50%;
  width: 48px;
  height: 48px;
`
const FavoritesText = styled.div``;

const FavoritesTitle = styled.h3`
  margin: 0;
  font-size: ${({ theme }) => theme.font.extraSmall};
`;

const FavoritesType = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.font.mini};
  line-height: ${({ theme }) => theme.font.mini};
`;

const DeleteButton = styled.button.attrs({
  type: 'button',
})`
  padding: 10px;
  background: none;
  width: 36px;
  height: 36px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7px;
  opacity: 0.2;
  border-radius: 10px;

  &:hover {
    opacity: 1;
  }

  &:focus {
    opacity: 1;
    outline: ${({ theme }) => theme.color.coolLight} solid 3px;
    outline-offset: -3px;
  }

  &:active {
    outline: none;
    opacity: 0.1;
  }
`

const DeleteIcon = styled(DeleteSvg)``;

export {
  FavoritesItem,
  FavoritesLink,
  FavoritesImage,
  FavoritesText,
  FavoritesTitle,
  FavoritesType,
  DeleteButton,
  DeleteIcon
}

