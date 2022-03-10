import styled, {css} from 'styled-components';
import { HeaderMedium, TextSemibase } from '../../ui-kit-styled/text.styled';
import { ButtonCold } from '../../ui-kit-styled/button.styled';
import subscribeBackground from '../../../assets/img/subscribe-background.jpg';

type SubscribeProps = {
  hasBackground: boolean;
}

type SubscribeInputProps = {
  isError: boolean,
}

const Subscribe = styled.section<SubscribeProps>`
  color: ${({ hasBackground, theme }) =>
    hasBackground ? theme.color.white : theme.color.black};
  text-align: center;
  background-color: ${({ hasBackground, theme }) =>
    hasBackground ? theme.color.coolDark : theme.color.white};
  padding: 95px 20px;

  ${({ hasBackground }) =>
    hasBackground && css`
      background-image: url(${subscribeBackground});
      background-repeat: no-repeat;
      background-size: cover;
    `
  }
`;

const SubscribeHeader = styled(HeaderMedium)`
  margin-bottom: 29px;
`;

const SubscribeText = styled(TextSemibase)`
  margin-bottom: 45px;
`;

const SubscribeForm = styled.form.attrs({
  action: 'https://echo.htmlacademy.ru/',
  method: 'post',
})`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;

`;

const SubscribeInput = styled.input.attrs({
    type: 'email',
    name: 'user-email',
    required: true,
})<SubscribeInputProps>`
    border: none;
    height: 60px;
    width: 600px;
    border-radius: 10px 0 0 10px;
    font-size: ${({ theme }) => theme.font.extraSmall};
    line-height: 26px;
    padding: 0 22px 0 19px;
    background-color: ${({ theme }) => theme.color.light};

    ::placeholder {
      opacity: 0.6;
    }

    &:hover {
      background-color: ${({ theme }) => theme.color.gray};
    }


    &:focus {
      background-color: ${({ theme }) => theme.color.gray};
      outline: ${({ theme }) => theme.color.coolLight} solid 3px;
    }

    &:active {
      background-color: ${({ theme }) => theme.color.white};
      outline: ${({ theme }) => theme.color.black} solid 2px;
      outline-offset: -2px;
    }

    ${({ isError }) =>
      isError && css`
        background-color: ${({ theme }) => theme.color.white};
        outline: ${({ theme }) => theme.color.error} solid 2px;
        outline-offset: -2px;
      `
    }
`;

const SubscribeButton = styled(ButtonCold).attrs({
  type: 'submit',
})`
  border: none;
  display: inline-block;
  border-radius: 0 10px 10px 0;
  padding: 20px 35px 20px 25px;
  font-size: ${({ theme }) => theme.font.extraSmall};
  letter-spacing: 0;

  &:active ~ input {
    background-color: ${({ theme }) => theme.color.white};
    outline: ${({ theme }) => theme.color.black} solid 2px;
    outline-offset: -2px;
  }
`;

export {
  Subscribe,
  SubscribeHeader,
  SubscribeText,
  SubscribeForm,
  SubscribeInput,
  SubscribeButton,
};
