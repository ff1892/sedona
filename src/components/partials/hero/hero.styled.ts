import styled from 'styled-components';
import backgroundImage from '../../../assets/img/index-background.jpg'
import divider from '../../../assets/img/hero-divider.svg'
import logo from '../../../assets/img/logos/logo-hero.svg';

const Hero = styled.section`
  background-color: ${({theme}) => theme.color.coolDark};
  height: 485px;
  position: relative;
  background-image: url(${backgroundImage});
  padding-top: 51px;

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 57px;
    bottom: 0;
    left: 0;
    background: url(${divider});
  }
`

const LogoContainer = styled.div`
  margin: 0 auto;
  width: 458px;
  height: 352px;
  background: url(${logo}) no-repeat center center;
`;

export {
  Hero,
  LogoContainer,
}
