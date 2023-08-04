import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Header,
  IconHeader,
  NavContainer,
  Container,
  Main,
  Footer,
} from './SharedLayout.styled';

import LinearProgress from '@mui/material/LinearProgress';
import { AppBar } from 'components/AppBar/AppBar';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <IconHeader />
          <NavContainer>
            <AppBar />
          </NavContainer>
        </Container>
      </Header>
      <Main>
        <Suspense fallback={<LinearProgress />}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer>Ukraine {new Date().getFullYear()}</Footer>
    </>
  );
};

export default SharedLayout;
