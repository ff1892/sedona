import styled from 'styled-components';

type FeatureItemProps = {
  background: string,
  textColor: string,
};

type FeatureWrapperProps = {
  imgPosition?: 'left' | 'right',
};

const FeatureWrapper = styled.div<FeatureWrapperProps>`
  display: flex;
  flex-direction: ${({ imgPosition}) => imgPosition === 'left' ? 'row': 'row-reverse'};
`;

const FeatureImg = styled.img.attrs({
  width: '800px',
  height: '384px',
})``;

const FeatureItem = styled.div<FeatureItemProps>`
  padding-top: 98px;
  width: 400px;
  height: 384px;
  background-color: ${({ background }) => background};
  color: ${({ textColor }) => textColor};
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  `;

const FeatureHeader = styled.h3`
  font-size: ${({ theme }) => theme.font.base};
  text-transform: uppercase;
  max-width: 180px;
  margin-bottom: 30px;
  white-space: pre-line;
`;

const FeatureText = styled.p`
  font-size: ${({ theme }) => theme.font.extraSmall};
  line-height: 21px;
  max-width: 230px;
  margin-bottom: 30px;
  white-space: pre-line;
`;

export {
  FeatureWrapper as FeatureItemWrapper,
  FeatureImg,
  FeatureItem,
  FeatureHeader,
  FeatureText,
}
