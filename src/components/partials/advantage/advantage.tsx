import { ReactNode } from 'react';
import * as S from './advantage.styled';

type AdvantageItemProps = {
  background: string;
  header: string;
  text: string;
  icon: ReactNode;
};

function Advantage({ background, header, text, icon }: AdvantageItemProps) {

  return (
    <S.Advantage background={background}>
      <S.IconWrapper>
        { icon }
      </S.IconWrapper>
      <S.AdvantageHeader>{header}</S.AdvantageHeader>
      <S.AdvantageText>{text}</S.AdvantageText>
    </S.Advantage>
  );
}

export default Advantage;
