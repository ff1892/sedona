import styled from 'styled-components';
import { HeaderMedium, TextSemibase } from '../../ui-kit-styled/text.styled';

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
  padding: 60px 0 87px;
`;

const IntroHeader = styled(HeaderMedium)`
  max-width: 700px;
  margin-bottom: 36px;
`;

const IntroText = styled(TextSemibase)`
  max-width: 700px;
`;


export {
  Intro,
  IntroHeader,
  IntroText,
}
