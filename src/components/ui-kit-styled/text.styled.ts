import styled from 'styled-components';

const HeaderMedium = styled.h2`
  font-size: ${({ theme }) => theme.font.medium};
  line-height: 36px;
  text-transform: uppercase;
`;

const TextSemibase = styled.p`
  font-size: ${({ theme }) => theme.font.semiBase};
  line-height: 26px;
`;

export {
  HeaderMedium,
  TextSemibase,
}
