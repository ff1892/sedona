import * as S from './quantity-counter.styled';
import {ReactComponent as IconMinus } from '../../../assets/img/icons/icon-minus.svg';
import {ReactComponent as IconPlus } from '../../../assets/img/icons/icon-plus.svg';
import { Tooltip } from '../../components';

type QuantityCounterProps = {
  inputValue: number,
  inputName: string,
  inputId: string,
  labelText: string,
  tooltipText?: string,
};

function QuantityCounter ({
    inputValue, inputName, inputId, labelText, tooltipText
  }: QuantityCounterProps)  : JSX.Element {
  return (
    <S.CounterWrapper>
      <S.LabelWrapper>
        <S.CounterLabel inputId={inputId}>
          {labelText}
        </S.CounterLabel>
        {
          tooltipText &&
          <S.TooltipWrapper>
            <Tooltip tooltipText={tooltipText} />
          </S.TooltipWrapper>
        }

      </S.LabelWrapper>
      <S.CounterInputWrapper>
        <S.CounterButton aria-label="Уменьшить количество">
          <IconMinus />
        </S.CounterButton>
        <S.CounterInput
          inputValue={inputValue}
          inputName={inputName}
          inputId={inputId}
        />
        <S.CounterButton aria-label="Увеличить количество">
          <IconPlus />
        </S.CounterButton>
      </S.CounterInputWrapper>
    </S.CounterWrapper>
  );
}

export default QuantityCounter;
