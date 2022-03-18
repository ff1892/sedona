import styled from 'styled-components';
import { IconLinkStyleCounter } from '../../ui-kit-styled/link.styled';

type CounterInputProps = {
  inputValue: number,
  inputName: string,
  inputId: string,
};

type CounterLabelProps = {
  inputId: string,
};

const CounterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CounterInputWrapper = styled.div`
  border-radius: 4px;
  padding: 0 12px;
  height: 50px;
  max-width: 133px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.color.light};
`;

const CounterButton = styled.button.attrs({
  type: 'button',
})`
  border: none;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  ${IconLinkStyleCounter}
`;

const CounterInput = styled.input.attrs<CounterInputProps>(({
  inputValue, inputName, inputId
  }) => ({
  type: 'number',
  min: 0,
  defaultValue: inputValue,
  name: inputName,
  id: inputId
}))<CounterInputProps>`
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.color.light};
  min-width: 50px;
  flex-grow: 1;
  font-size: ${({ theme }) => theme.font.extraSmall};
  font-weight: 700;
  padding: 0 16px 0 24px;

  &::placeholder {
    color: ${({ theme }) => theme.color.black};
  }
`;

const CounterLabel = styled.label.attrs<CounterLabelProps>(({ inputId }) => ({
  htmlFor: inputId,
}))<CounterLabelProps>`
  font-size: ${({ theme }) => theme.font.extraSmall};
  font-weight: 700;
`;

const LabelWrapper = styled.div`
  position: relative;
`;

const TooltipWrapper = styled.div`
 position: absolute;
 right: -34px;
 top: 5px;
`;

export {
  CounterWrapper,
  CounterInputWrapper,
  CounterButton,
  CounterInput,
  CounterLabel,
  LabelWrapper,
  TooltipWrapper
};
