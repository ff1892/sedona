import styled from 'styled-components';
import starIcon from '../../../assets/img/icons/icon-star.svg';

const StarsContainer = styled.div`
  display: inline-block;
  align-items: center;

  span:not(:last-child) {
    margin-right: 5px;
  }
`;

const Star = styled.span`
  display: inline-block;
  width: 18px;
  height: 17px;
  background-image: url(${starIcon});
  background-repeat: no-repeat;
`;

export {
  StarsContainer,
  Star,
};
