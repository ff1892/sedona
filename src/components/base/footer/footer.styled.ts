import styled from 'styled-components';
import { ReactComponent as TwitterSvg } from '../../../assets/img/icons/social-twitter.svg';
import { ReactComponent as FacebookSvg } from '../../../assets/img/icons/social-facebook.svg';
import { ReactComponent as YoutubeSvg } from '../../../assets/img/icons/social-youtube.svg';
import { ReactComponent as AcademyLogo } from '../../../assets/img/logos/logo-htmlacademy.svg';
import { TextLinkStyleBlack, IconLinkStyleBlack, IconLinkStyleCool } from '../../ui-kit-styled/link.styled';

const Footer = styled.footer`
  flex-shrink: 0;
  padding: 25px 50px 25px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SocialsContainer = styled.div`
  display: flex;

  > *:not(:last-child) {
    margin-right: 5px;
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
  ${IconLinkStyleCool}
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
  margin-left: 20px;
  ${TextLinkStyleBlack}
`;

const LogoLink = styled.a`
  display: block;
  padding: 18px 22px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${IconLinkStyleBlack}
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
