import styled from 'styled-components';
import { TitleMedium, TextSemibase } from '../../ui-kit-styled/text.styled';
import { ButtonWarm } from '../../ui-kit-styled/button.styled';

const MainSearch = styled.section`
  text-align: center;
  padding: 90px 303px;
`;

const MainSearchHeader = styled(TitleMedium)`
  margin-bottom: 30px;
`;

const MainSearchText = styled(TextSemibase)`
  margin-bottom: 60px;
`;

const MainSearchButton = styled(ButtonWarm)`
  padding: 20px 150px;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.font.small};
`;

export {
  MainSearch,
  MainSearchHeader,
  MainSearchText,
  MainSearchButton,
}
