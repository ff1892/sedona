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
  padding: 97px 70px 20px;
  `;

const FeatureHeader = styled.h3`
  font-size: ${({ theme }) => theme.font.base};
  text-transform: uppercase;
  max-width: 180px;
  margin: 0 auto 30px;
  white-space: pre-line;
`;

const FeatureText = styled.p`
  font-size: ${({ theme }) => theme.font.extraSmall};
  line-height: 21px;
  margin-bottom: 30px;
  white-space: pre-line;
`;

export {
  FeatureItem,
  FeatureHeader,
  FeatureText,
}
