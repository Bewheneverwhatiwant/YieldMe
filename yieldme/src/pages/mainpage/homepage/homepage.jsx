import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import CustomFont from '../../../Components/Container/CustomFont';
import CustomRow from '../../../Components/Container/CustomRow';

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
  gap: 2rem;
  position: relative;
  background-color: white;
`;

const Button = styled.button`
  background-color: #E0E0E0;
  color: black;
  border: none;
  padding: 1rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 8px;
`;

const HomePage = () => {

  const navigate = useNavigate();

  return (
    <ContainerCenter>
      <PageContainer>
        <CustomFont color='#FF00FF' font='1.5rem' fontWeight='bold'>임산부의</CustomFont>
        <CustomFont color='black' font='1.2rem' fontWeight='bold'>QR코드입니다.</CustomFont>
        <CustomFont color='black' font='1rem'>편안한 하루 되세요 :)</CustomFont>
        <QRCodeCanvas value="lny021102" size={150} />
        <CustomFont color='black' font='1rem'>
          자리를 양보해주셔서 감사합니다.
        </CustomFont>
        <CustomFont color='black' font='1rem'>
          양보해드린 분께 QR코드를 보여주세요.
        </CustomFont>
        <Button onClick={() => navigate('/ranking')}>자리양보 점수 랭킹 보기</Button>
      </PageContainer>
    </ContainerCenter>
  );
};

export default HomePage;
