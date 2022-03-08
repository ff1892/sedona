import styled from 'styled-components';
import { ButtonWarm } from '../../ui-kit/button/button.styled';

const Favorites = styled.section`
  position: absolute;
  bottom: -265px;
  right: -10px;
  width: 400px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.color.gray};
  background-color: ${({ theme }) => theme.color.white};
`;

const FavoritesContainer = styled.div`
  padding: 25px 15px;
  position: relative;

  &::before {
    position: absolute;
    content: '';
    height: 14px;
    width: 14px;
    top: -8px;
    left: 50%;
    transform: translateX(-50%) rotate(-45deg);
    background-color: ${({ theme }) => theme.color.white};
    border-top: 1px solid ${({ theme }) => theme.color.gray};
    border-right: 1px solid ${({ theme }) => theme.color.gray};
  }
`;

const FavoritesList = styled.ul`
  margin: 0;
  padding: 0;
`;

const FavoritesButton = styled(ButtonWarm)`
  border-radius: 0 0 20px 20px;
  padding: 12px;
`;

export {
  Favorites,
  FavoritesContainer,
  FavoritesButton,
  FavoritesList,
};
