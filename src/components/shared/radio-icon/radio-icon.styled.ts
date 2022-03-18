import styled from 'styled-components';

type InputProps = {
  inputName: string;
  inputValue: string;
  inputId: string,
  isChecked?: boolean,
};

type LabelProps = {
  inputId: string;
};

const InputContainer = styled.div``;

const Input = styled.input.attrs<InputProps>(({
  inputName, inputValue, inputId, isChecked
}) => ({
  className: 'visually-hidden',
  type: 'radio',
  name: inputName,
  value: inputValue,
  id: inputId,
  defaultChecked: isChecked,
})) <InputProps>`

  &:checked+label {
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.color.black};
  }

`;

const Label = styled.label.attrs<LabelProps>(({ inputId }) => ({
  htmlFor: inputId,
})) <LabelProps>`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  box-shadow: inset 0 0 0 2px ${({ theme }) => theme.color.gray};
  cursor: pointer;

  &:hover {
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.color.coolLight};
  }

  &:active {
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.color.coolLight};
  }
`;


export {
  InputContainer,
  Input,
  Label,
};
