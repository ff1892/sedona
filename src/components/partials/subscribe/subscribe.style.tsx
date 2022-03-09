import styled from 'styled-components';
import { HeaderMedium, TextSemibase } from '../../ui-kit/text.styled';

const Subscribe = styled.section`
  color: ${({ theme }) => theme.color.white};
  text-align: center;
  background-color: teal;
  padding: 94px 20px ;
`;

const SubscribeHeader = styled(HeaderMedium)`
  margin-bottom: 29px;
`;

const SubscribeText = styled(TextSemibase)`
  margin-bottom: 44px;
`;

export {
  Subscribe,
  SubscribeHeader,
  SubscribeText,
};
