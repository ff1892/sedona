import * as S from './feature-item.styled';

type FeatureItemProps = {
  background: string;
  header: string;
  order: string;
  text: string;
  color: string;
};

function FeatureItem({ background, header, order, text, color }: FeatureItemProps) {
  return (
    <S.FeatureItem background={background} color={color}>
      <S.FeatureHeader>{ header }</S.FeatureHeader>
      <S.FeatureText>— №{order} —</S.FeatureText>
      <S.FeatureText>{text}</S.FeatureText>
    </S.FeatureItem>
  );
}

export default FeatureItem;
