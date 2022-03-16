import * as S from './tooltip.styled';
import { useState } from 'react';

type TooltipProps = {
  tooltipText: string,
};

function Tooltip({ tooltipText }: TooltipProps): JSX.Element {

  const [isVisibleText, setIsVisibleText] = useState<boolean>(false);

  return(
    <S.TooltipWrapper>
      <S.TooltipButton
        aria-label="Показать дополнительную информацию"
        onMouseEnter={() => setIsVisibleText(true)}
        onMouseLeave={() => setIsVisibleText(false)}
        onFocus={() => setIsVisibleText(true)}
        onBlur={() => setIsVisibleText(false)}
      />
      { isVisibleText &&
        <S.TooltipInfo>
          <S.TooltipTextContainer>
            <S.TooltipText>
              { tooltipText }
            </S.TooltipText>
          </S.TooltipTextContainer>
        </S.TooltipInfo>
      }
    </S.TooltipWrapper>
  );
}

export default Tooltip;
