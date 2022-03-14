import styled from 'styled-components';

export const PriceInput = styled.input.attrs({
  type: 'number',
})`
  width: 145px;
  height: 48px;
  border: none;
  background-color: transparent;
  padding-left: 19px;
  padding-right: 31px;
  position: relative;
  border: 2px solid white;


  &:first-child {
    border-radius: 4px 0 0 4px;
  }

  &:last-child {
    border-radius: 0 4px 4px 0;
  }

  &:not(:last-child) {
    border-right: none;
  }
`;
