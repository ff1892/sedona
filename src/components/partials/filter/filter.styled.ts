import styled from 'styled-components';
import { ButtonColdFilter } from '../../ui-kit-styled/button.styled';

const Filter = styled.form.attrs({
  action: '#',
  method: 'get',
})`
  display: flex;
  flex-wrap: wrap;

  & >:first-child {
    margin-right: 70px;
  }

  & >:nth-child(2) {
    margin-right: 167px;
  }

  & >:last-child {
    margin-left: auto;
  }
`;

const Fieldset = styled.fieldset`
  margin: 0;
  padding: 0;
  border: none;

  div:not(:last-child) {
    margin-bottom: 9px;
  }
`;

const Legend = styled.legend`
  margin: 0;
  padding: 0;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.font.small};
  line-height: ${({ theme }) => theme.font.small};
`;

const PriceInputWrapper = styled.div`
  padding-top: 8px;

  input {
    margin-bottom: 4px;
  }
`;

const ButtonWrapper = styled.div`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SubmitButton = styled(ButtonColdFilter).attrs({
  type: 'submit',
})`
  padding: 14px 30px;
  border: none;
  margin-bottom: 20px;
  cursor: pointer;
`;

const ResetButton = styled.input.attrs({
  type: 'reset',
})`
  padding: 5px 10px;
  border: none;
  background-color: transparent;
  border-radius: 4px;
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.font.extraSmall};
  line-height: ${({ theme }) => theme.font.extraSmall};
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.color.white60};
  }

  :focus {
    outline: ${({ theme }) => theme.color.coolLight} solid 3px;
    outline-offset: -3px;
    color: ${({ theme }) => theme.color.white};
  }

  :active {
    outline: none;
    color: ${({ theme }) => theme.color.white30};
  }
`;

export {
  Filter,
  Fieldset,
  Legend,
  PriceInputWrapper,
  ButtonWrapper,
  SubmitButton,
  ResetButton,
};
