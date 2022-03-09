import * as S from './advantage.styled';
import { ReactNode } from 'react';

type AdvantageItemProps = {
  background: string;
  header: string;
  text: string;
  children: ReactNode;
};

function Advantage({ background, header, text, children }: AdvantageItemProps) {
  return (
    <S.Advantage background={background}>
      <S.AdvantageIconWrapper>
      { children }
      </S.AdvantageIconWrapper>
      <S.AdvantageHeader>{header}</S.AdvantageHeader>
      <S.AdvantageText>{text}</S.AdvantageText>
    </S.Advantage>
  );
}

export default Advantage;
