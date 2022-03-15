import styled from 'styled-components';
import { Link } from 'react-router-dom';
import divider from '../../../assets/img/icons/icon-nav-divider.svg';

const Breadcrumbs = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 42px;
`;

const LinkWrapper=styled.div`
  padding-right: 10px;
  position: relative;
  left: -7px;

  &:not(:last-child) {
    margin-right: 3px;

    &::before {
      position: absolute;
      content: '';
      width: 5px;
      height: 8px;
      background-image: url(${divider});
      right: 0;
      top: 10px;
    }
  }
`;

const LinkIcon = styled(Link)`
  padding: 7px 8px 10px 8px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover svg path {
    fill: ${({ theme }) => theme.color.white60};
  }

  &:focus {
    outline: ${({ theme }) => theme.color.coolLight} 3px solid;
    outline-offset: -3px;

    svg path {
      fill: ${({ theme }) => theme.color.white};
    }
  }

  &:active {
    outline: none;

    svg path {
      fill: ${({ theme }) => theme.color.white30};
    }
  }
`

const LinkText = styled(Link)`
  border-radius: 4px;
  display: block;
  padding: 5px 8px 8px 8px;
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.font.mini};
  line-height: ${({ theme }) => theme.font.mini};

  &:hover {
    color: ${({ theme }) => theme.color.white60};
  }

  &:focus {
    color: ${({ theme }) => theme.color.white};
    outline: ${({ theme }) => theme.color.coolLight} 3px solid;
    outline-offset: -3px;
  }

  &:active {
    color: ${({ theme }) => theme.color.white30};
    outline: none;
  }
`;

export {
  Breadcrumbs,
  LinkWrapper,
  LinkIcon,
  LinkText,
}
