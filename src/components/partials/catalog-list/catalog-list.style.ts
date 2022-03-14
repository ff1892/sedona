import styled from 'styled-components';
import { ButtonCold } from '../../ui-kit-styled/button.styled';

const CatalogList = styled.ul`
  margin: 0;
  padding: 0;
  border-top: 1px solid ${({ theme }) => theme.color.gray};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray};
`;

const ButtonWrapper = styled.div`
  padding: 30px 216px;
`;

const LoadAllButton = styled(ButtonCold)`
  display: block;
`;

export {
  CatalogList,
  ButtonWrapper,
  LoadAllButton,
};
