import * as S from './filter-price.styled';
import { PriceInput, RangeControls } from '../../components';

type FilterPriceProps = {
  minInputId: string,
  minLabelName: string,
  minCurrent: number,
  min: number,
  maxInputId: string,
  maxLabelName: string,
  maxCurrent: number,
  max: number,
};


function FilterPrice({
  minInputId, minLabelName, minCurrent, min,
  maxInputId, maxLabelName, maxCurrent, max

  }: FilterPriceProps ): JSX.Element {

  const postionMin = minCurrent * 100 / max;
  const postionMax = maxCurrent * 100 / max;

  return(
    <>
    <S.PriceInputWrapper>
      <PriceInput
        inputId={minInputId}
        position="left"
        labelName={minLabelName}
        currentValue={minCurrent}
        placeholderValue={min}
        min={min}
        max={max}
      />
      <PriceInput
        inputId={maxInputId}
        position="right"
        labelName={maxLabelName}
        currentValue={maxCurrent}
        placeholderValue={max}
        min={min}
        max={max}
      />
    </S.PriceInputWrapper>
      <RangeControls min={postionMin} max={postionMax} />
    </>
  );
}

export default FilterPrice;
