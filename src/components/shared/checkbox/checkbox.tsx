import * as S from './checkbox.styled';

type CheckboxProps = {
  inputName: string,
  inputValue: string,
  inputId: string,
  labelName: string,
};

function Checkbox({ inputName, inputValue, inputId, labelName }: CheckboxProps): JSX.Element {
  return(
    <S.InputContainer>
      <S.Input
        inputName={inputName}
        inputValue={inputValue}
        inputId={inputId}/>
      <S.Label inputId={inputId}>{ labelName }</S.Label>
    </S.InputContainer>
  );
}

export default Checkbox;
