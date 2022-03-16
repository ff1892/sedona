import * as S from './date-input.style';

type DateInputProps = {
  inputId: string,
  inputName: string,
  labelText: string,
  isError?: boolean,
  message?: string,
};

function DateInput({
    inputId, inputName, labelText, isError, message
  }: DateInputProps): JSX.Element {
  return (
      <S.DateWrapper>
        <S.DateLabel inputId={inputId}>
          { labelText }
        </S.DateLabel>
        <S.DateInputWrapper>
          <S.DateInput inputId={inputId} inputName={inputName}/>
          { message && <S.DateMessage isError={isError}>{ message }</S.DateMessage> }
        </S.DateInputWrapper>
      </S.DateWrapper>
  );
}

export default DateInput;
