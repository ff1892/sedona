import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import {
  ImageLinkStyle,
  TextLinkStyleBlack
} from '../../ui-kit-styled/link.styled';

import {
  ButtonWarm,
  ButtonColdCatalog,
  ButtonNeutral
} from '../../ui-kit-styled/button.styled';

const ButtonStyle = css`
  padding: 9px 31px;
  min-height: 37px;
`;

const CatalogCard = styled.li`
  list-style: none;
  display: grid;
  grid-template-columns: max-content max-content auto max-content;
  grid-template-rows: min-content 1fr min-content;
  grid-column-gap: 8px;
  padding: 20px 0 30px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray};

  .stars-rating {
    grid-column: 4/5;
    grid-row: 1/3;
    justify-self: center;
    align-self: start;
    padding-top: 10px;
  }
`;

const CardImgLink = styled(Link)`
  display: inline-block;
  grid-column: 1/2;
  grid-row: 1/4;
  margin-right: 16px;
  padding-top: 10px;
  ${ImageLinkStyle}
`;

const CardImg = styled.img.attrs({
  width: 180,
  height: 120,
})``;

const CardTitle = styled(Link)`
  padding: 7px 15px;
  border-radius: 10px;
  display: inline-block;
  font-size: ${({ theme }) => theme.font.base};
  font-weight: 700;
  grid-column: 2/4;
  grid-row: 1/2;
  justify-self: start;
  align-self: start;
  ${TextLinkStyleBlack}
`;

const CardType = styled.p`
  margin-left: 16px;
  grid-column: 2/3;
  grid-row: 2/3;
  font-size: ${({ theme }) => theme.font.extraSmall};
  line-height: ${({ theme }) => theme.font.extraSmall};
`;

const CardMinPrice = styled(CardType)`
  margin: 0;
  grid-column: 3/4;
  grid-row: 2/3;
`;

const ButtonMoreInfo = styled(ButtonWarm)`
  margin-left: 11px;
  grid-column: 2/3;
  grid-row: 3/4;
  align-self: end;
  ${ButtonStyle}
`;
const ButtonToFavorites = styled(ButtonColdCatalog)`
  grid-column: 3/4;
  grid-row: 3/4;
  align-self: end;
  margin-right: auto;
  ${ButtonStyle}
`;

const ButtonInFavorites = styled(ButtonNeutral)`
  grid-column: 3/4;
  grid-row: 3/4;
  align-self: end;
  margin-right: auto;
  ${ButtonStyle}
`;

const Rating = styled.p`
  width: 160px;
  min-height: 37px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.font.mini};
  line-height: ${({ theme }) => theme.font.mini};
  color: ${({ theme }) => theme.color.dark};
  background-color: ${({ theme }) => theme.color.light};
  border-radius: 4px;
  text-transform: uppercase;
  grid-column: 4/5;
  grid-row: 3/4;
  align-self: end;
`;

export {
  CatalogCard,
  CardImgLink,
  CardImg,
  CardTitle,
  CardType,
  CardMinPrice,
  ButtonMoreInfo,
  ButtonToFavorites,
  ButtonInFavorites,
  Rating,
}
