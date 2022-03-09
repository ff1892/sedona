import * as S from './main-layout.styled';
import {
  Hero,
  Features,
  MainSearch,
  Subscribe
} from '../../components';

function MainLayout(): JSX.Element {

  return (
    <S.Main>
      <Hero />
      <Features />
      <MainSearch />
      <Subscribe />
    </S.Main>
  );
}

export default MainLayout;
