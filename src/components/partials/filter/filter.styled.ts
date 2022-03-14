import styled from 'styled-components';
import { ButtonColdFilter } from '../../ui-kit-styled/button.styled';

const Filter = styled.form`
  display: flex;

  & >:first-child {
    margin-right: 67px;
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
`;

const Legend = styled.legend`
  margin: 0;
  padding: 0;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.font.small};
  line-height: ${({ theme }) => theme.font.small};
`;

const ButtonWrapper = styled.div`
  padding-top: 60px;
  text-align: center;
`;

const SubmitButton = styled(ButtonColdFilter).attrs({
  type: 'submit',
})`
  padding: 12px 35px;
  border: none;
  margin-bottom: 20px;
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
  ButtonWrapper,
  SubmitButton,
  ResetButton,
};
