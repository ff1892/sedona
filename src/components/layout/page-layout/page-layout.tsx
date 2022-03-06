import { ReactNode } from 'react';
import * as S from './page-layout.styled';
import { Header, Footer } from '../../components';

type PageLayoutProps = {
  children: ReactNode;
};

function PageLayout({ children }: PageLayoutProps): JSX.Element {
  return (
    <S.PageContainer>
      <Header />
      { children }
      <Footer />
    </S.PageContainer>
  );
}

export default PageLayout;
