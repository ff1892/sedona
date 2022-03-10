
import styled from 'styled-components';

type AdvantageItemProps = {
  background: string;
};

const Advantage = styled.div<AdvantageItemProps>`
  width: 400px;
  height: 384px;
  background-color: ${({ background }) => background};
  color: ${({ theme }) => theme.color.black};
  text-align: center;
  padding: 90px 85px 20px;
`;

const AdvantageIconWrapper = styled.div`
  margin-bottom: 10px;
  height: 82px;
  svg path {
    fill: ${({ theme }) => theme.color.coolLight};
  }
`

const AdvantageHeader = styled.h3`
  font-size: ${({ theme }) => theme.font.base};
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 10px;
`;

const AdvantageText = styled.p`
  font-size: ${({ theme }) => theme.font.extraSmall};
  line-height: 21px;
  white-space: pre-line;
`;

export {
  Advantage,
  AdvantageIconWrapper,
  AdvantageHeader,
  AdvantageText,
}
