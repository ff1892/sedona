import styled from 'styled-components';
import iconDate from '../../../assets/img/icons/icon-date.svg';

type DateInputProps = {
  inputId: string,
  inputName: string,
};

type DateLabelProps = {
  inputId: string,
};

type DateMessageProps = {
  isError?: boolean,
};

const DateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DateLabel = styled.label.attrs<DateLabelProps>(({ inputId }) => ({
  htmlFor: inputId,
}))<DateLabelProps>`
  font-size: ${({ theme }) => theme.font.extraSmall};
  font-weight: 700;
  align-self: flex-start;
  margin-top: 10px;
`;

const DateInputWrapper = styled.div`
  position: relative;

  &::before {
    position: absolute;
    content: '';
    width: 15px;
    height: 15px;
    top: 18px;
    right: 19px;
    background-image: url(${iconDate});
  }
`;

const DateInput = styled.input.attrs<DateInputProps>(({ inputId, inputName }) => ({
  type: 'text',
  id: inputId,
  name: inputName,
  placeholder: 'Укажите дату',
}))<DateInputProps>`
  width: 420px;
  height: 50px;
  background-color: ${({ theme }) => theme.color.light};
  border-radius: 4px;
  border: none;
  outline: none;
  padding: 0 45px 0 25px;
  font-size: ${({ theme }) => theme.font.extraSmall};
  font-weight: 700;
  margin-bottom: 6px;

  &:focus {
    box-shadow: inset 0 0 0 3px ${({ theme }) => theme.color.coolLight};
  }

  &:active {
    box-shadow: inset 0 0 0 3px ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.color.white};
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.black60};
  }
`;

const DateMessage = styled.p<DateMessageProps>`
  font-size: ${({ theme }) => theme.font.mini};
  line-height: ${({ theme }) => theme.font.mini};
  color: ${({ isError, theme }) =>
    isError ? theme.color.error : theme.color.dark};
`;

export {
  DateWrapper,
  DateLabel,
  DateInputWrapper,
  DateInput,
  DateMessage,
};
