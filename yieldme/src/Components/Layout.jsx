import React from 'react';
import styled from 'styled-components';
import Header from '../Components/header/header';
import Navi from '../Components/footer/Navi';
import { Outlet } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 10vh; /* Header 높이에 따라 조정 */
  padding-bottom: 10vh; /* Navi 높이에 따라 조정 */
`;

const Main = styled.main`
  flex: 1;
  overflow-y: auto;
  padding-top: 3vh;
  padding-bottom: 3vh;
  min-height: 100vh;
`;

const FixedNavi = styled(Navi)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

const Layout = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <FixedNavi />
    </Container>
  );
};

export default Layout;
