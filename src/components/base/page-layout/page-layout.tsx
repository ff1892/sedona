import { ReactNode } from 'react';
import * as S from './page-layout.styled';
import { Header, Footer } from '../../components';
import { useLocation } from 'react-router-dom';

type PageLayoutProps = {
  children: ReactNode;
};

function PageLayout({ children }: PageLayoutProps): JSX.Element {

  const { pathname } = useLocation();

  return (
    <S.PageContainer>
      <Header currentPage={pathname} />
      { children }
      <Footer />
    </S.PageContainer>
  );
}

export default PageLayout;
