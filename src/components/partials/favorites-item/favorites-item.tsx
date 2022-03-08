import * as S from './favorites-item.styled';

type FavoritesItemProps = {
  href: string,
  imgSrc: string,
  title: string,
  hotelType: string,
};

function FavoritesItem({ href, imgSrc, title, hotelType }: FavoritesItemProps) {
  return (
    <S.FavoritesItem>
      <S.FavoritesLink to={href}>
        <S.FavoritesImage src={imgSrc} alt={title} />
        <S.FavoritesText>
          <S.FavoritesTitle>
            { title }
          </S.FavoritesTitle>
          <S.FavoritesType>
            { hotelType }
          </S.FavoritesType>
        </S.FavoritesText>
      </S.FavoritesLink>
      <S.DeleteButton>
        <S.DeleteIcon />
      </S.DeleteButton>
    </S.FavoritesItem>
  );
}

export default FavoritesItem;
