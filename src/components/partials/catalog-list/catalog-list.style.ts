import styled from 'styled-components';
import { ButtonCold } from '../../ui-kit-styled/button.styled';

const CatalogList = styled.ul`
  padding: 0;
  border-top: 1px solid ${({ theme }) => theme.color.gray};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray};
`;

const ButtonWrapper = styled.div`
  padding: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadAllButton = styled(ButtonCold)`
  font-size: ${({ theme }) => theme.font.small};
  line-height: ${({ theme }) => theme.font.small};
  padding: 17px 240px;
`;

export {
  CatalogList,
  ButtonWrapper,
  LoadAllButton,
};
