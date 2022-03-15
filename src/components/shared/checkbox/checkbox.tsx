import * as S from './checkbox.styled';

type CheckboxProps = {
  inputName: string,
  inputValue: string,
  inputId: string,
  labelName: string,
  isChecked?: boolean,
};

function Checkbox({ inputName, inputValue, inputId, labelName, isChecked }: CheckboxProps): JSX.Element {
  return(
    <S.InputContainer>
      <S.Input
        inputName={inputName}
        inputValue={inputValue}
        inputId={inputId}
        isChecked={isChecked} />
      <S.Label inputId={inputId}>{ labelName }</S.Label>
    </S.InputContainer>
  );
}

export default Checkbox;
