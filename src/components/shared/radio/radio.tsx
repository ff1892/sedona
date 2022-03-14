import * as S from './radio.styled';

type RadioProps = {
  inputName: string,
  inputValue: string,
  inputId: string,
  labelName: string,
};

function Radio({ inputName, inputValue, inputId, labelName }: RadioProps): JSX.Element {
  return (
    <S.InputContainer>
      <S.Input
        inputName={inputName}
        inputValue={inputValue}
        inputId={inputId}/>
      <S.Label inputId={inputId}>{ labelName}</S.Label>
    </S.InputContainer>
  );
}

export default Radio;
