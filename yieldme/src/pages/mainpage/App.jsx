import { useState } from 'react'
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: 100vh;
`;

const PageContainer = styled(ContainerCenter)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 8vh;
  padding-bottom: 5vh;
  gap: 7rem;
  position: relative;
  background-color: white;
  background-image: url('MainImg_2.png');
  background-size: 100% 100%;
`;

function App() {

  return (
    <ContainerCenter>
      <PageContainer>
        메인페이지!
      </PageContainer>
    </ContainerCenter>
  )
}

export default App
