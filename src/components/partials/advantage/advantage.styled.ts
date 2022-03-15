
import styled from 'styled-components';

type AdvantageItemProps = {
  background: string;
};

type IconWrapperProps = {
  backgroundSrc: string;
};

const Advantage = styled.div<AdvantageItemProps>`
  width: 400px;
  height: 384px;
  background-color: ${({ background }) => background};
  color: ${({ theme }) => theme.color.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const IconWrapper = styled.div<IconWrapperProps>`
  margin-bottom: 15px;
  height: 82px;
  width: 82px;
  background: url(${({ backgroundSrc }) => backgroundSrc}) center;
  background-repeat: no-repeat;
`

const AdvantageHeader = styled.h3`
  font-size: ${({ theme }) => theme.font.base};
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const AdvantageText = styled.p`
  font-size: ${({ theme }) => theme.font.extraSmall};
  line-height: 21px;
  white-space: pre-line;
  max-width: 250px;
`;

export {
  Advantage,
  IconWrapper,
  AdvantageHeader,
  AdvantageText,
}
