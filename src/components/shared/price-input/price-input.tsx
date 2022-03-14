import * as S from './price-input.styled';

type PriceInputProps = {
  inputId: string,
  labelName: string,
  position: 'left' | 'right';
};

function PriceInput({ inputId, labelName, position }: PriceInputProps): JSX.Element {
  return (
    <S.PriceInputWrapper>
      <S.PriceInput inputId={inputId} position={position}/>
      <S.PriceLabel inputId={inputId}>{ labelName }</S.PriceLabel>
    </S.PriceInputWrapper>
  );
}

export default PriceInput;
