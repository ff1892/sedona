import * as S from './price-input.styled';

type PriceInputProps = {
  inputId: string,
  labelName: string,
  position: 'left' | 'right',
  currentValue: number,
  placeholderValue: number,
  min: number,
  max: number,
};

function PriceInput({
  inputId, labelName, position, currentValue, placeholderValue, min, max
  }: PriceInputProps): JSX.Element {
  return (
    <S.PriceInputWrapper>
      <S.PriceInput
        inputId={inputId}
        position={position}
        currentValue={currentValue}
        placeholderValue={placeholderValue}
        min={min}
        max={max}
      />
      <S.PriceLabel inputId={inputId}>
        { labelName }
      </S.PriceLabel>
    </S.PriceInputWrapper>
  );
}

export default PriceInput;
