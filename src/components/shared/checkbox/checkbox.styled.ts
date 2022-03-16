import styled from 'styled-components';
import tick from '../../../assets/img/icons/icon-tick.svg';

type InputProps = {
  inputName: string,
  inputValue: string,
  inputId: string,
  isChecked?: boolean,
};

type LabelProps = {
  inputId: string,
};

const InputContainer = styled.div`
  &:hover label::before {
    background-color: ${({ theme }) => theme.color.white60};
  }
`;

const Input = styled.input.attrs<InputProps>
  (({ inputName, inputValue, inputId, isChecked }) => ({
    className: 'visually-hidden',
    type: 'checkbox',
    name: inputName,
    value: inputValue,
    id: inputId,
    defaultChecked: isChecked,
}))<InputProps>`

  &:checked+label::after {
    position: absolute;
    content: '';
    width: 13px;
    height: 10px;
    top: 6px;
    left: 4px;
    background-image: url(${tick});
    background-repeat: no-repeat;
  }

  &:focus+label::before {
    outline: ${({ theme }) => theme.color.coolLight} solid 3px;
    background-color: ${({ theme }) => theme.color.white60} ;
  }

  &:active+label::before {
    outline: none;
    background-color: ${({ theme }) => theme.color.white30} ;
  }
`;

const Label = styled.label.attrs<LabelProps>(({ inputId }) => ({
  htmlFor: inputId,
}))<LabelProps>`
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
    border-radius: 4px;
    background-color: ${({ theme }) => theme.color.white};
  }
`;


export {
  InputContainer,
  Input,
  Label,
};
