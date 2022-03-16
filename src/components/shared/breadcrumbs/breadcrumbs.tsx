import * as S from './breadcrumbs.style';
import { ReactComponent as IconHome } from '../../../assets/img/icons/icon-to-home.svg';
import { AppRoute } from '../../constants';

function Breadcrumbs() {
  return (
    <S.Breadcrumbs>
      <S.LinkWrapper>
        <S.LinkIcon to={AppRoute.Index}
          aria-label="Перейти на главную страницу">
          <IconHome />
        </S.LinkIcon>
      </S.LinkWrapper>
      <S.LinkWrapper>
        <S.LinkText to={AppRoute.Catalog}>
          Гостиницы
        </S.LinkText>
      </S.LinkWrapper>
    </S.Breadcrumbs>
  );
}

export default Breadcrumbs;
