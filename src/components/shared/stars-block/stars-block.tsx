import * as S from './stars.block.styled';

type StarsBlockProps = {
  count: number,
};

const starsCount = [1, 2, 3, 4, 5];

function StarsBlock({ count }: StarsBlockProps): JSX.Element {
  const starsArray = new Array(count).fill(null);

  return (
    <S.StarsContainer
      className="stars-rating"
      aria-label={`Количество звёзд: ${count}`}>
      { starsArray.map((_value, index) =>
        <S.Star key={starsCount[index]} />) }
    </S.StarsContainer>
  );
}

export default StarsBlock;
