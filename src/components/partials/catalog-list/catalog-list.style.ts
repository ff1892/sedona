import styled from 'styled-components';
import { ButtonCold } from '../../ui-kit-styled/button.styled';

const CatalogList = styled.ul`
  padding: 0;
  border-top: 1px solid ${({ theme }) => theme.color.gray};
  `;

const ButtonWrapper = styled.div`
  padding: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray};
`;

const LoadAllButton = styled(ButtonCold).attrs({
  type: 'button',
})`
  border: none;
  font-size: ${({ theme }) => theme.font.small};
  line-height: ${({ theme }) => theme.font.small};
  padding: 17px 50px;
  min-width: 625px;
  cursor: pointer;
`;

export {
  CatalogList,
  ButtonWrapper,
  LoadAllButton,
};
