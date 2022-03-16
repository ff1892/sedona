import styled, {css} from 'styled-components';
import { TitleMedium } from '../../ui-kit-styled/text.styled';
import { appTheme as theme } from '../../../theme';
import iconDate from '../../../assets/img/icons/icon-date.svg';
import { ButtonCold } from '../../ui-kit-styled/button.styled';

const ModalBoldText = css`
  font-size: ${theme.font.extraSmall};
  font-weight: 700;
`;

const ModalOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.color.white80};
  z-index: 20;
`;

const Modal = styled.section`
  position: fixed;
  width: 715px;
  left: 0;
  right: 0;
  top: 10vh;
  margin: auto;
  z-index: 30;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0 25px 50px 0 ${({ theme }) => theme.color.black15 };
  padding: 54px 70px 70px 70px;
`;

const ModalForm = styled.form.attrs({
  action: '#',
  method: 'get',
})`
  & > :first-child {
    margin-bottom: 20px;
  }

  & > :nth-child(2) {
    margin-bottom: 18px;
  }

  & > :nth-child(3) {
    margin-bottom: 40px;
  }
`;

const ModalTitle = styled(TitleMedium)``;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 53px;
`;

const DateLabel = styled.label.attrs({
  for: 'date-start',
})`
  ${ModalBoldText}
`;

const DateInputWrapper = styled.div`
  position: relative;

  &::before {
    position: absolute;
    content: '';
    width: 15px;
    height: 15px;
    top: 18px;
    right: 19px;
    background-image: url(${iconDate});
  }
`;

const DateInput = styled.input.attrs({
  type: 'text',
  name: 'date-start',
  id: 'date-start',
  placeholder: 'Укажите дату',
})`
  width: 420px;
  height: 50px;
  background-color: ${({ theme }) => theme.color.light};
  border-radius: 4px;
  border: none;
  outline: none;
  padding: 0 45px 0 25px;
  ${ModalBoldText}

  &:focus {
    box-shadow: inset 0 0 0 3px ${({ theme }) => theme.color.coolLight};
  }

  &:active {
    box-shadow: inset 0 0 0 3px ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.color.white};
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.black60};
  }
`;

const QuantityWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & >div:first-child {
    flex-basis: 288px;
  }

  & >div:nth-child(2){
    flex-basis: 230px;
  }
`;

const ModalSubmit = styled(ButtonCold).attrs({
  type: 'submit',
})`
  width: 100%;
  border: none;
  border-radius: 10px;
  padding: 18px 0;
  font-size: ${({ theme }) => theme.font.small};
  line-height: ${({ theme }) => theme.font.small};
`;

export {
  ModalOverlay,
  Modal,
  ModalForm,
  TitleWrapper,
  ModalTitle,
  QuantityWrapper,
  DateLabel,
  DateInputWrapper,
  DateInput,
  ModalSubmit,

};
