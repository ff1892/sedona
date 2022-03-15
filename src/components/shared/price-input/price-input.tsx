import * as S from './price-input.styled';

type PriceInputProps = {
  inputId: string,
  labelName: string,
  position: 'left' | 'right';
  placeholderText: string;
};

function PriceInput({
    inputId, labelName, position, placeholderText
  }: PriceInputProps): JSX.Element {
  return (
    <S.PriceInputWrapper>
      <S.PriceInput
        inputId={inputId}
        position={position}
        placeholderText={placeholderText} />
      <S.PriceLabel inputId={inputId}>
        { labelName }
      </S.PriceLabel>
    </S.PriceInputWrapper>
  );
}

export default PriceInput;
