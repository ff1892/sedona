import styled, { css } from 'styled-components';
import { TitleMedium } from '../../ui-kit-styled/text.styled';
import { ButtonIconBlack } from '../../ui-kit-styled/button.styled';

type SortButtonProps = {
  icon: string,
  isSelected?: boolean,
};

const Sort = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  select {
    padding: 15px 90px 15px 19px;
  }
`;

const SortHeader = styled(TitleMedium)`
  margin-right: 120px;
`;

const ButtonsWrapper = styled.div`
  > * {
    margin-left: 8px;
  }
`;

const SortButton = styled(ButtonIconBlack)<SortButtonProps>`
  background: url(${({ icon }) => icon}) no-repeat center center;

  ${({ isSelected}) => isSelected && css`
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.color.black};
  `}
`;

export {
  Sort,
  SortHeader,
  ButtonsWrapper,
  SortButton,
};
