import * as S from './header.styled';
import logo from '../../../assets/img/logos/logo-sedona.svg'
import { Favorites } from '../../components';
import { useState } from 'react';

function Header(): JSX.Element {

  const [isVisible, setIsVivible] = useState<boolean>(false);

  return (
    <S.Header>
      <S.HeaderContainer>
        <S.HeaderNav>
          <S.NavLink to="/" isActive>Главная</S.NavLink>
          <S.NavLink to="/">О Седоне</S.NavLink>
          <S.NavLink to="/">Гостиницы</S.NavLink>
        </S.HeaderNav>
        <S.LogoLink to="/">
          <S.LogoImage src={logo} alt="Логотип Седоны"/>
        </S.LogoLink>
        <S.HeaderInfo>
          <S.LinkIcon title="Поиск" to="/">
            <S.SearchIcon />
          </S.LinkIcon>
          <S.LinkIcon
            title="Избранное"
            as={'div'}
            tabIndex={0}
            onMouseEnter={() => setIsVivible(true)}
            onMouseLeave={() => setIsVivible(false)}
            onFocus={() => setIsVivible(true)}
            onBlur={() => setIsVivible(false)}
          >
            <S.FavoritesIcon />
            <S.FavoritesCounter aria-label="Количество отелей в избранном">
              12
            </S.FavoritesCounter>
          <Favorites isVisible={isVisible}/>
          </S.LinkIcon>
          <S.HeaderOrder to="/">Хочу сюда!</S.HeaderOrder>
        </S.HeaderInfo>
      </S.HeaderContainer>
    </S.Header>
  );
};

export default Header;
