import styled from 'styled-components';

type FeatureBackgroundProps = {
  image: string,
};

const Features = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const FeatureBackground = styled.div<FeatureBackgroundProps>`
  width: 800px;
  height: 384px;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;

`;

export {
  Features,
  FeatureBackground,
};
