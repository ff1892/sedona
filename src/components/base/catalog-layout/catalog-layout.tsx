import * as S from './catalog-layout.styled';
import {
  CatalogHero,
  Sort,
  CatalogList,
  Pagination,
  Subscribe,
} from '../../components';

function CatalogLayout(): JSX.Element {
  return (
    <S.CatalogLayout>
      <CatalogHero />
      <S.CatalogContainer>
        <Sort />
        <CatalogList />
        <Pagination />
      </S.CatalogContainer>
      <Subscribe />
    </S.CatalogLayout>
  );
}

export default CatalogLayout;
