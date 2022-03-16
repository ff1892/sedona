import { ReactNode, useState } from 'react';
import * as S from './page-layout.styled';
import { Header, Footer, Modal } from '../../components';
import { useLocation } from 'react-router-dom';

type PageLayoutProps = {
  children: ReactNode;
};

function PageLayout({ children }: PageLayoutProps): JSX.Element {

  const { pathname } = useLocation();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <S.PageContainer>
        <Header
          currentPage={pathname}
          onModalOpen={() => setIsModalOpen(true)}
        />
        { children }
        <Footer />
      </S.PageContainer>
      { isModalOpen && <Modal onModalClose={() => setIsModalOpen(false)}/> }
    </>
  );
}

export default PageLayout;
