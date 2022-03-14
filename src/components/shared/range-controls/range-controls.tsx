import * as S from './range-controls.styled';

type RangeControlsProps = {
  min: number,
  max: number,
}

function RangeControls({ min=0, max=100}: RangeControlsProps ): JSX.Element {
  return (
    <S.RangeWrpapper>
      <S.Scale />
      <S.Bar positionMin={min} positionMax={max} />
      <S.Button position={min} aria-label="Изменить минимальную цену"/>
      <S.Button position={max} aria-label="Изменить максимальную цену"/>
    </S.RangeWrpapper>
  );
}

export default RangeControls;
