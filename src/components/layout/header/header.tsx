import * as S from './header.styled';
import logo from '../../../assets/img/logos/logo-sedona.svg'

function Header(): JSX.Element {
  return (
    <S.Header>
      <S.HeaderContainer>
        <S.HeaderNav>
          <S.NavLink href="/" isActive>Главная</S.NavLink>
          <S.NavLink href="/">О Седоне</S.NavLink>
          <S.NavLink href="/">Гостиницы</S.NavLink>
        </S.HeaderNav>
        <S.LogoLink to="/">
          <S.LogoImage src={logo} alt="Логотип Седоны"/>
        </S.LogoLink>
        <S.HeaderInfo>
          <S.LinkIcon title="Поиск" to="/">
            <S.SearchIcon />
          </S.LinkIcon>
          <S.LinkIcon title="Избранное" to="/">
            <S.FavoritesIcon />
          </S.LinkIcon>
          <S.HeaderOrder>Хочу сюда!</S.HeaderOrder>
        </S.HeaderInfo>
      </S.HeaderContainer>
    </S.Header>
  );
};

export default Header;
