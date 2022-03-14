import * as S from './main-layout.styled';
import {
  MainHero,
  Features,
  MainSearch,
  Subscribe
} from '../../components';

function MainLayout(): JSX.Element {

  return (
    <S.Main>
      <MainHero />
      <Features />
      <MainSearch />
      <Subscribe hasBackground/>
    </S.Main>
  );
}

export default MainLayout;
