import styled from 'styled-components';
import background from '../../../assets/img/catalog-background.jpg';

const CatalogHero = styled.section`
  padding: 40px 71px 80px;
  background-color: ${({ theme }) => theme.color.coolDark};
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.font.extraLarge};
  line-height: ${({ theme }) => theme.font.extraLarge};
  margin-bottom: 3px;
`;

export {
  CatalogHero,
  Title
};
