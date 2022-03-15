import * as S from './header.styled';
import { useState, FocusEvent } from 'react';
import { Favorites } from '../../components';
import logo from '../../../assets/img/logos/logo-sedona.svg'
import { AppRoute } from '../../constants';

type HeaderProps = {
  currentPage: string,
};

function Header({ currentPage }: HeaderProps): JSX.Element {

  const [isFavsVisible, setIsFavsVisible] = useState<boolean>(false);

  const handleWrapperBlur = (evt: FocusEvent<HTMLElement>) => {
    if (!evt.currentTarget.contains(evt.relatedTarget)) {
      setIsFavsVisible(false);
    }
  }

  return (
    <S.Header>
      <S.HeaderNav>
        <S.NavLink
          to={AppRoute.Index}
          isCurrent={currentPage === AppRoute.Index}>
          Главная
        </S.NavLink>
        <S.NavLink to="#">
          О Седоне
        </S.NavLink>
        <S.NavLink
          to={AppRoute.Catalog}
          isCurrent={currentPage === AppRoute.Catalog}>
          Гостиницы
        </S.NavLink>
      </S.HeaderNav>
      <S.LogoLink to={AppRoute.Index}>
        <S.LogoImage src={logo} alt="Логотип Седоны"/>
      </S.LogoLink>
      <S.HeaderInfo>
        <S.LinkIcon title="Поиск" to="#">
          <S.SearchIcon />
        </S.LinkIcon>
        <S.LinkIconWrapper
          onMouseEnter={() => setIsFavsVisible(true)}
          onMouseLeave={() => setIsFavsVisible(false)}
          onFocus={() => setIsFavsVisible(true)}
          onBlur={handleWrapperBlur}
        >
          <S.LinkIcon
            to="#"
            title="Избранное" >
            <S.FavoritesIcon />
            <S.FavoritesCounter aria-label="Количество отелей в избранном">
              12
            </S.FavoritesCounter>
          </S.LinkIcon>
          { isFavsVisible && <Favorites /> }
        </S.LinkIconWrapper>
        <S.HeaderOrder
          to="#" >
          Хочу сюда!
        </S.HeaderOrder>
      </S.HeaderInfo>
    </S.Header>
  );
};

export default Header;
