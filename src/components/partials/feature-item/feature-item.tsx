import * as S from './feature-item.styled';

type FeatureItemProps = {
  background: string;
  header: string;
  order: string;
  text: string;
  textColor: string;
  imgSrc?: string,
  altText?: string,
  imgPosition?: 'left' | 'right',
};

function FeatureItem({
  background, header, order, text,
  textColor, imgSrc, altText, imgPosition
  }: FeatureItemProps) {
  return (
    <S.FeatureItemWrapper imgPosition={imgPosition}>
      {imgSrc && <S.FeatureImg src={imgSrc} alt={altText}/> }
      <S.FeatureItem
        background={background}
        textColor={textColor}
      >
        <S.FeatureHeader>{ header }</S.FeatureHeader>
        <S.FeatureText>— №{order} —</S.FeatureText>
        <S.FeatureText>{text}</S.FeatureText>
      </S.FeatureItem>
    </S.FeatureItemWrapper>
  );
}

export default FeatureItem;
