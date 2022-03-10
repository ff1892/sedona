import styled from 'styled-components';
import { HeaderMedium, TextSemibase } from '../../ui-kit-styled/text.styled';
import { ButtonWarm } from '../../ui-kit-styled/button.styled';

const MainSearch = styled.section`
  text-align: center;
  padding: 89px 303px;
`;

const MainSearchHeader = styled(HeaderMedium)`
  margin-bottom: 30px;
`;

const MainSearchText = styled(TextSemibase)`
  margin-bottom: 58px;
`;

const MainSearchButton = styled(ButtonWarm)`
  display: inline-block;
  padding: 18px 150px 25px;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.font.small};
`;

export {
  MainSearch,
  MainSearchHeader,
  MainSearchText,
  MainSearchButton,
}
