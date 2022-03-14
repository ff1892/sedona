import * as S from './breadcrumbs.style';
import { ReactComponent as IconHome } from '../../../assets/img/icons/icon-to-home.svg';

function Breadcrumbs() {
  return (
    <S.Breadcrumbs>
      <S.LinkWrapper>
        <S.LinkIcon to="/">
          <IconHome />
        </S.LinkIcon>
      </S.LinkWrapper>
      <S.LinkWrapper>
        <S.LinkText to="/catalog">
          Гостиницы
        </S.LinkText>
      </S.LinkWrapper>
    </S.Breadcrumbs>
  );
}

export default Breadcrumbs;
