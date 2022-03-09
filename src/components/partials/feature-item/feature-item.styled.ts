import styled from 'styled-components';

type FeatureItemProps = {
  background: string;
  color: string;
};

const FeatureItem = styled.div<FeatureItemProps>`
  width: 400px;
  height: 384px;
  background-color: ${({ background }) => background};
  color: ${({ color }) => color};
  text-align: center;
  padding: 95px 90px 20px;
`;

const FeatureHeader = styled.h3`
  font-size: ${({ theme }) => theme.font.base};
  text-transform: uppercase;
`;

const FeatureText = styled.p`
  font-size: ${({ theme }) => theme.font.extraSmall};
  line-height: 21px;
`;

export {
  FeatureItem,
  FeatureHeader,
  FeatureText,
}
