import * as S from './favorites.styled';
import { FavoritesItem } from '../../components';
import DesertQuailInn from '../../../assets/img/hotel-1-small.jpg';
import VillasAtPocoDiablo from '../../../assets/img/hotel-2-small.jpg';

type FavoritesProps = {
  isVisible: boolean,
};

function Favorites ({ isVisible }: FavoritesProps) {

  return (
    <S.Favorites isVisible={isVisible}>
      <S.FavoritesContainer>
        <S.FavoritesList>
          <FavoritesItem
            href='/'
            imgSrc={DesertQuailInn}
            title='Desert Quail Inn'
            hotelType='Мотель'
          />
          <FavoritesItem
            href='/'
            imgSrc={VillasAtPocoDiablo}
            title='Villas at Poco Diablo'
            hotelType='Апартаменты'
          />
        </S.FavoritesList>
      </S.FavoritesContainer>
      <S.FavoritesButton to="/">
        Все избранные
      </S.FavoritesButton>
    </S.Favorites>
  );
}

export default Favorites;
