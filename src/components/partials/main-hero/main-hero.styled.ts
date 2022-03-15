import styled from 'styled-components';
import backgroundImage from '../../../assets/img/index-background.jpg'
import divider from '../../../assets/img/hero-divider.svg'
import logo from '../../../assets/img/logos/logo-hero.svg';

const Hero = styled.div`
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

  &::after {
    position: absolute;
    content: '';
    width: 458px;
    height: 352px;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    background: url(${logo}) no-repeat bottom;
  }
`

const PageTitle = styled.h1.attrs({
  className: 'visually-hidden',
})``;

export {
  Hero,
  PageTitle,
}
