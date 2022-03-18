import * as S from './catalog-card.styled';
import { StarsBlock } from '../../components';

type CatalogCardProps = {
  imageSrc: string,
  title: string,
  type: string,
  minPrice: number,
  isFavorite: boolean,
  starsCount: number,
  userRating: number,
};

function CatalogCard({
  imageSrc, title, type, minPrice, isFavorite, starsCount, userRating
  }:CatalogCardProps): JSX.Element {

  const modifiedRating = userRating.toString().replace(/\./, ',');

  return (
    <S.CatalogCard>
      <S.CardImgLink to="#">
        <S.CardImg src={imageSrc} alt={title}/>
      </S.CardImgLink>
      <S.CardTitle to="#">{title}</S.CardTitle>
      <S.CardType>{type}</S.CardType>
      <S.CardMinPrice>От {minPrice} ₽</S.CardMinPrice>
      <S.ButtonMoreInfo as="button">Подробнее</S.ButtonMoreInfo>
      {isFavorite ? <S.ButtonInFavorites as="button">В избранном</S.ButtonInFavorites>
        : <S.ButtonToFavorites as="button">В избранное</S.ButtonToFavorites> }
      <StarsBlock count={starsCount} />
      <S.Rating>Рейтинг: {modifiedRating} </S.Rating>
    </S.CatalogCard>
  );
}

export default CatalogCard;
