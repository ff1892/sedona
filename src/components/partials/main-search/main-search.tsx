import * as S from './main-search.styled';
import { AppRoute } from '../../constants';

function MainSearch() {
  return (
    <S.MainSearch>
      <S.MainSearchHeader>
        Заинтересовались?
      </S.MainSearchHeader>
      <S.MainSearchText>
        Укажите предполагаемые даты поездки,<br/>и мы покажем вам лучшие предложения гостиниц в Седоне
      </S.MainSearchText>
      <S.MainSearchButton to={AppRoute.Catalog}>
        Поиск гостиницы в Седоне
      </S.MainSearchButton>
    </S.MainSearch>
  );
}

export default MainSearch;
