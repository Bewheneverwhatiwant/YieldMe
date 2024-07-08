import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import CustomFont from '../../../Components/Container/CustomFont';
import CustomRow from '../../../Components/Container/CustomRow';
import CustomColumn from '../../../Components/Container/CustomColumn';

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
  gap: 6rem;
  position: relative;
  background-color: white;
  padding-bottom: 10vh;
`;

const Button = styled.button`
  width: 100%;
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
        <CustomColumn width='100%' alignItems='center' justifyContent='center'>
          <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.3rem'>
            <CustomFont color='black' font='1.2rem' fontWeight='bold'>지금 자리를 양보해드리는 저는</CustomFont>
            <CustomRow width='100%' alignItems='center' justifyContent='center' gap='0.3rem'>
              <CustomFont color='#FF00FF' font='1.5rem' fontWeight='bold'>임산부</CustomFont>
              <CustomFont color='black' font='1.2rem' fontWeight='bold'>입니다.</CustomFont>
            </CustomRow>
          </CustomColumn>

          <CustomFont color='black' font='1rem'>편안한 하루 되세요 :)</CustomFont>

          <QRCodeCanvas value="lny021102" size={150} />

          <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.3rem'>
            <CustomRow width='100%' alignItems='center' justifyContent='center' gap='0.3rem'>
              <CustomFont color='#FF00FF' font='1rem' fontWeight='bold'>
                lny021102
              </CustomFont>
              <CustomFont color='black' font='1rem'>
                님,
              </CustomFont>
            </CustomRow>
            <CustomFont color='black' font='1rem'>
              자리를 양보해주셔서 감사합니다.
            </CustomFont>
            <CustomFont color='black' font='1rem'>
              자리를 양보받을 분께 QR코드를 보여주세요.
            </CustomFont>
          </CustomColumn>
        </CustomColumn>

        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>

          <CustomRow width='90%' alignItems='center' justifyContent='flex-start'>
            <CustomFont color='black' font='1.3rem' fontWeight='bold'>메인 메뉴</CustomFont>
          </CustomRow>

          <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='0.5rem'>
            <Button onClick={() => navigate('/ranking')}>양보 점수 랭킹 보기</Button>

            <CustomRow width='100%' alignItems='center' justifyContent='center' gap='0.2rem'>
              <CustomRow width='50%' alignItems='center' justifyContent='center'>
                <Button onClick={() => navigate('/ranking')}>자리 양보할래요</Button>
              </CustomRow>

              <CustomRow width='50%' alignItems='center' justifyContent='center'>
                <Button onClick={() => navigate('/ranking')}>자리 양보받을래요</Button>
              </CustomRow>
            </CustomRow>
          </CustomColumn>
        </CustomColumn>
      </PageContainer>
    </ContainerCenter>
  );
};

export default HomePage;
