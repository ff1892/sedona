import styled from 'styled-components';
import iconInfo from '../../../assets/img/icons/icon-info.svg';

const TooltipWrapper = styled.div`
  position: relative;
`;

const TooltipButton = styled.button`
  display: block;
  border: none;
  outline: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.coolLight};
  background-image: url(${iconInfo});
  background-repeat: no-repeat;
  background-position: center;


  :hover {
    background-color: ${({ theme }) => theme.color.coolDark};
  }

  :focus {
    background-color: ${({ theme }) => theme.color.coolDark};
  }

  :active {
    background-color: ${({ theme }) => theme.color.coolDark};
  }
`

const TooltipInfo = styled.div.attrs({
  role: 'tooltip',
})`
  position: absolute;
  z-index: 10;
  bottom: -150px;
  right: -115px;
  width: 256px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.dark};
  box-shadow: 0 15px 30px 0 ${({ theme }) => theme.color.black30};
`;

const TooltipTextContainer = styled.div`
  position: relative;

  &::before {
    position: absolute;
    content: '';
    height: 14px;
    width: 14px;
    top: -7px;
    left: 50%;
    transform: translateX(-50%) rotate(-45deg);
    background-color: ${({ theme }) => theme.color.dark};
  }
`;

const TooltipText = styled.p`
  padding: 18px 22px;
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.font.mini};
  line-height: 20px;
`;

export {
  TooltipWrapper,
  TooltipButton,
  TooltipInfo,
  TooltipTextContainer,
  TooltipText
};
