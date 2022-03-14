import styled from 'styled-components';

type InputProps = {
  inputName: string;
  inputValue: string;
  inputId: string,
};

type LabelProps = {
  inputId: string;
};

const InputContainer = styled.div``;

const Input = styled.input.attrs<InputProps>(({ inputName, inputValue, inputId }) => ({
  className: 'visually-hidden',
  type: 'radio',
  name: inputName,
  value: inputValue,
  id: inputId,
})) <InputProps>`

  &:checked+label::after {
    position: absolute;
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: 6px;
    left: 5px;
    background-color: ${({ theme }) => theme.color.specialDark}
  }

  &:focus+label::before {
    outline: ${({ theme }) => theme.color.coolLight} solid 3px;
    outline-offset: -3px;
  }

  &:checked+label::before {
    outline-offset: 0;
  }
`;

const Label = styled.label.attrs<LabelProps>(({ inputId }) => ({
  htmlFor: inputId,
})) <LabelProps>`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.font.extraSmall};
  line-height: ${({ theme }) => theme.font.extraSmall};
  padding-left: 40px;
  position: relative;

  &::before {
    position: absolute;
    content: '';
    top: 1px;
    left: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.white};
  }
`;


export {
  InputContainer,
  Input,
  Label,
};
