import * as S from './catalog-list.style';
import { CatalogCard } from '../../components';
import cardImg1 from '../../../assets/img/catalog-card-1.jpg';
import cardImg2 from '../../../assets/img/catalog-card-2.jpg';
import cardImg3 from '../../../assets/img/catalog-card-3.jpg';
import cardImg4 from '../../../assets/img/catalog-card-4.jpg';

function CatalogList(): JSX.Element {
  return (
    <S.CatalogList>
      <CatalogCard
        imageSrc={cardImg1}
        title="Amara Resort & Spa"
        type="Гостиница"
        minPrice={4000}
        isFavorite={false}
        starsCount={4}
        userRating={8.5}
      />
      <CatalogCard
        imageSrc={cardImg2}
        title="Desert Quail Inn"
        type="Мотель"
        minPrice={3000}
        isFavorite={false}
        starsCount={3}
        userRating={8.9}
      />
      <CatalogCard
        imageSrc={cardImg3}
        title="Villas at Poco Diablo"
        type="Апартаменты"
        minPrice={2000}
        isFavorite={true}
        starsCount={2}
        userRating={9.2}
      />
      <CatalogCard
        imageSrc={cardImg4}
        title="GreenTree Inn"
        type="Гостиница"
        minPrice={3000}
        isFavorite={false}
        starsCount={2}
        userRating={9.2}
      />
      <S.ButtonWrapper>
        <S.LoadAllButton to="/">
          Загрузить ещё
        </S.LoadAllButton>
      </S.ButtonWrapper>
    </S.CatalogList>
  );
}

export default CatalogList;
