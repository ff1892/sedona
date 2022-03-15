import styled from 'styled-components';
import { ButtonWarm } from '../../ui-kit-styled/button.styled';


const Favorites = styled.div`
  position: absolute;
  z-index: 10;
  bottom: -253px;
  right: -180px;
  width: 400px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.white};
`;

const FavoritesContainer = styled.div`
  position: relative;

  &::before {
    position: absolute;
    content: '';
    height: 14px;
    width: 14px;
    top: -7px;
    left: 50%;
    transform: translateX(-50%) rotate(-45deg);
    background-color: ${({ theme }) => theme.color.white};
    border-top: 1px solid ${({ theme }) => theme.color.gray};
    border-right: 1px solid ${({ theme }) => theme.color.gray};
  }
`;

const FavoritesList = styled.ul`
  padding: 15px 15px 20px;
  border: 1px solid ${({ theme }) => theme.color.gray};
  border-radius: 20px 20px 0 0;
  border-bottom: none;

  li:not(:last-child) {
    margin-bottom: 5px;
  }
`;

const FavoritesButton = styled(ButtonWarm)`
  border-radius: 0 0 20px 20px;
  min-width: 400px;
  padding: 25px 12px;
`;

export {
  Favorites,
  FavoritesContainer,
  FavoritesButton,
  FavoritesList,
};
