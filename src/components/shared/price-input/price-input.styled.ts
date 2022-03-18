import styled, { css } from 'styled-components';

type PriceInputProps = {
  inputId: string;
  position: 'left' | 'right';
  currentValue: number,
  placeholderValue: number,
  min: number,
  max: number,
};

type PriceLabelProps = {
  inputId: string;
};

const PriceInput = styled.input.attrs<PriceInputProps>(({
  inputId, currentValue, placeholderValue, min, max }) => ({
  type: 'number',
  id: inputId,
  defaultValue: currentValue,
  placeholder: placeholderValue,
  min,
  max,
}))<PriceInputProps>`
  position: relative;
  width: 143px;
  height: 48px;
  background-color: transparent;
  padding-left: 19px;
  padding-right: 31px;
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.font.extraSmall};
  border: 2px solid ${({ theme }) => theme.color.white};
  margin-bottom: 20px;

  &:hover {
    border-color: ${({ theme }) => theme.color.white60};
    z-index: 10;
  }

  &:focus {
    outline: ${({ theme }) => theme.color.coolLight} solid 3px;
    box-shadow: inset 0 0 0 3px ${({ theme }) => theme.color.coolLight};
    border-color: ${({ theme }) => theme.color.white};
    z-index: 10;
  }

  &:active {
    border: 2px solid ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.warmLight};
    outline: none;
    box-shadow: none;
  }

  ${({ position }) => position === 'left' && css`
    border-radius: 4px 0 0 4px;
    border-left-width: 2px;
    left: 1.5px;
  `};

  ${({ position }) => position === 'right' && css`
    border-radius: 0 4px 4px 0;
    border-right-width: 2px;
  `};
`;

const PriceLabel = styled.label.attrs<PriceLabelProps>(({ inputId }) => ({
  htmlFork: inputId,
}))<PriceLabelProps>``;

const PriceInputWrapper = styled.div`
  position: relative;
  display: inline-block;

  ${PriceLabel} {
    position: absolute;
    z-index: 11;
    top: 10px;
    right: 15px;
    color: ${({ theme }) => theme.color.white30};
    font-size: ${({ theme }) => theme.font.extraSmall};

  }
`

export {
  PriceInput,
  PriceLabel,
  PriceInputWrapper,
}
