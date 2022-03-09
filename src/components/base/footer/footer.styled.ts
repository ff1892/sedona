import styled from 'styled-components';
import { ReactComponent as TwitterSvg } from '../../../assets/img/icons/social-twitter.svg';
import { ReactComponent as FacebookSvg } from '../../../assets/img/icons/social-facebook.svg';
import { ReactComponent as YoutubeSvg } from '../../../assets/img/icons/social-youtube.svg';
import { ReactComponent as AcademyLogo } from '../../../assets/img/logos/logo-htmlacademy.svg';

const Footer = styled.footer`
  flex-shrink: 0;
  padding: 25px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SocialsContainer = styled.div`
  display: flex;

  > *:not(:last-child) {
    margin-right: 10px;
  }
`;

const SocialLink = styled.a.attrs({
  target: '_blank',
})`
  display: block;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  svg path {
    fill: ${({ theme }) => theme.color.coolLight}
  }

  &:hover {
    svg path {
      fill: ${({ theme }) => theme.color.coolDark};
    }
  }

  &:focus {
    outline: ${({ theme }) => theme.color.coolLight} solid 3px;
    outline-offset: -3px;

    svg path {
      fill: ${({ theme }) => theme.color.coolDark};
    }
  }

  &:active {
    outline: none;
    opacity: 0.3;

    svg path {
      fill: ${({ theme }) => theme.color.coolDark};
    }
  }
`;

const TwitterIcon = styled(TwitterSvg)``;
const FacebookIcon = styled(FacebookSvg)``;
const YoutubeIcon = styled(YoutubeSvg)``;

const Phone = styled.a`
  display: block;
  padding: 15px;
  font-size: ${({ theme }) => theme.font.large};
  line-height: ${({ theme }) => theme.font.large};
  border-radius: 10px;

  &:hover {
    color: ${({ theme }) => theme.color.warmLight};
  }

  &:focus {
    color: ${({ theme }) => theme.color.warmLight};
    outline: ${({ theme }) => theme.color.coolLight} solid 3px;
    outline-offset: -3px;
  }

  &:active {
    outline: none;
    opacity: 0.3;
  }
`;

const LogoLink = styled.a`
  display: block;
  padding: 18px 22px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    svg path {
    fill: ${({ theme }) => theme.color.warmLight};
    }
  }

  &:focus {
    outline: ${({ theme }) => theme.color.coolLight} solid 3px;
    outline-offset: -3px;

    svg path {
      fill: ${({ theme }) => theme.color.warmLight};
    }
  }

  &:active {
    outline: none;
    opacity: 0.3;

    svg path {
      fill: ${({ theme }) => theme.color.warmLight};
    }
  }
`

const Logo = styled(AcademyLogo)``;

export {
  Footer,
  SocialsContainer,
  SocialLink,
  TwitterIcon,
  FacebookIcon,
  YoutubeIcon,
  Phone,
  LogoLink,
  Logo
};
