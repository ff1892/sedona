import * as S from './advantage.styled';

type AdvantageItemProps = {
  background: string;
  header: string;
  text: string;
  icon: string;
};

function Advantage({ background, header, text, icon }: AdvantageItemProps) {

  return (
    <S.Advantage background={background}>
      <S.IconWrapper backgroundSrc={icon} />
      <S.AdvantageHeader>{header}</S.AdvantageHeader>
      <S.AdvantageText>{text}</S.AdvantageText>
    </S.Advantage>
  );
}

export default Advantage;
