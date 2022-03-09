import styled from 'styled-components';
import { HeaderMedium, TextSemibase } from '../../ui-kit/text.styled';
import { ButtonWarm } from '../../ui-kit/button.styled';

const MainSearch = styled.section`
  text-align: center;
  padding: 91px 303px;
`;

const MainSearchHeader = styled(HeaderMedium)`
  margin-bottom: 15px;
`;

const MainSearchText = styled(TextSemibase)`
  margin-bottom: 53px;
`;

const MainSearchButton = styled(ButtonWarm)`
  display: inline-block;
  padding: 13px 150px 17px;
  border-radius: 10px;
`;

export {
  MainSearch,
  MainSearchHeader,
  MainSearchText,
  MainSearchButton,
}
