import { ReactNode } from 'react';
import * as S from './radio-icon.styled';

type RadioIconProps = {
  inputName: string,
  inputValue: string,
  inputId: string,
  icon: ReactNode,
  isChecked?: boolean,
};

function RadioIcon({
  inputName, inputValue, inputId, icon, isChecked
}: RadioIconProps): JSX.Element {
  return (
    <S.InputContainer>
      <S.Input
        inputName={inputName}
        inputValue={inputValue}
        inputId={inputId}
        isChecked={isChecked} />
      <S.Label inputId={inputId}>{ icon }</S.Label>
    </S.InputContainer>
  );
}

export default RadioIcon;
