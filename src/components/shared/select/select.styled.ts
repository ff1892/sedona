import styled from 'styled-components';
import iconSelect from '../../../assets/img/icons/icon-select.svg';

const SelectWrapper = styled.div`
  display: inline-block;
`;

const Select = styled.select`
  position: relative;
  font-size: ${({ theme }) => theme.font.extraSmall};
  line-height: ${({ theme }) => theme.font.extraSmall};
  appearance: none;
  border-radius: 4px;
  border: none;
  outline: none;
  box-shadow: inset 0 0 0 2px ${({ theme}) => theme.color.gray};
  background: url(${iconSelect}) no-repeat 93% 50%;

  &:hover {
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.color.coolLight};
  }

  &:focus {
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.color.coolLight};
  }

  &:active {
    box-shadow: none;
    opacity: 0.3;
  }
`;

const Option = styled.option``;

export {
  SelectWrapper,
  Select,
  Option,
};
