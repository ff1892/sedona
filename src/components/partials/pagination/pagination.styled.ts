import styled, { css } from 'styled-components';
import { ButtonCold } from '../../ui-kit-styled/button.styled';

type PageButtonProps = {
  isCurrent?: boolean,
};

const Pagination = styled.section`
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PaginationWrapper = styled.div`

  > *:not(:last-child) {
    margin-right: 8px;
  }
`;

const PageButton = styled(ButtonCold).attrs<PageButtonProps>(({ isCurrent }) => ({
  tabIndex: isCurrent ? -1 : 0,
}))<PageButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 55px;

  ${({ isCurrent }) => isCurrent && css`
    pointer-events: none;
    color: ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.color.light};
  `}
`;

const SelectWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  select {
    padding: 15px 127px 15px 19px;
    margin-left: 50px;
  }
`;

const SelectLabel = styled.p`
  font-size: ${({ theme }) => theme.font.extraSmall};
`;

export {
  Pagination,
  PaginationWrapper,
  PageButton,
  SelectWrapper,
  SelectLabel,
};
