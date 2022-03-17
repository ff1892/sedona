
import styled from 'styled-components';

type AdvantageItemProps = {
  background: string;
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

const IconWrapper = styled.div`
  margin-bottom: 15px;
  height: 76px;
  width: 76px;
  display: flex;
  justify-content: center;
  align-items: center;
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
