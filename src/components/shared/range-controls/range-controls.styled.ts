import styled from 'styled-components';

type ButtonProps = {
  position: number,
};

type BarProps = {
  positionMin: number,
  positionMax: number,
}

const RangeWrpapper = styled.div`
  height: 20px;
  width: 287px;
  position: relative;
`;

const Scale = styled.div`
  position: absolute;
  content: '';
  height: 4px;
  top: 8px;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.color.white30};
`;

const Bar = styled(Scale)<BarProps>`
  left: ${({ positionMin }) => positionMin === 0 ? 0 : `${positionMin}%`};
  right: ${({ positionMax }) => positionMax === 0 ? '100%' : `${100 - positionMax}%`};
  background-color: ${({ theme }) => theme.color.white};
`;

const Button = styled.button<ButtonProps>`
  margin: 0;
  border: 0;
  position: absolute;
  content: '';
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.color.white};
  top: 0;
  left: ${({ position }) => position === 0 ? 0 : `${position}%`};
  border-radius: 5px;

  &:hover {
    box-shadow: 0 4px 10px 0 ${({ theme }) => theme.color.black25};
  }

  &:focus {
    box-shadow: 0 4px 10px 0 ${({ theme }) => theme.color.black25};
    outline: ${({ theme }) => theme.color.coolLight} 3px solid;
  }

  &:active {
    box-shadow: 0 4px 10px 0 ${({ theme }) => theme.color.black25};
    outline: ${({ theme }) => theme.color.coolLight} 2px solid;
  }
`;

export {
  RangeWrpapper,
  Scale,
  Bar,
  Button,
};



