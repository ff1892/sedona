import * as S from './catalog-hero.styled';
import { Breadcrumbs, Filter } from '../../components';

function CatalogHero(): JSX.Element {
  return (
    <S.CatalogHero>
      <S.Title>Гостиницы Седоны</S.Title>
      <Breadcrumbs />
      <Filter />
    </S.CatalogHero>
  );
}

export default CatalogHero;
