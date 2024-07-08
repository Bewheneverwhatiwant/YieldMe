import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../Components/header/header';
import Navi from '../Components/footer/Navi';
import HomePage from '../pages/mainpage/homepage/homepage';
import CameraPage from '../pages/mainpage/camerapage/camerapage';
import MyPage from '../pages/subpage/mypage/mypage';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  overflow-y: auto;
`;

const Layout = () => {
  const [currentPage, setCurrentPage] = useState('홈');

  const renderPage = () => {
    switch (currentPage) {
      case '홈':
        return <HomePage />;
      case '카메라':
        return <CameraPage />;
      case '마이':
        return <MyPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <Container>
      <Header />
      <Main>{renderPage()}</Main>
      <Navi setCurrentPage={setCurrentPage} />
    </Container>
  );
};

export default Layout;
