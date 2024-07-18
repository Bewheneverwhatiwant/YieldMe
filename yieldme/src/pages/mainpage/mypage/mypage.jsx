import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CustomFont from '../../../Components/Container/CustomFont';
import CustomColumn from '../../../Components/Container/CustomColumn';
import CustomRow from '../../../Components/Container/CustomRow';
import Changemode from './changemode';
import MyPay from './mypay';

const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  gap: 3rem;
  position: relative;
  background-color: white;
  padding-bottom: 10vh;
`;

const PointsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #E0E0E0;
  padding: 0.5rem;
  border-radius: 4px;
`;

const PointsButton = styled.button`
  background-color: #777777;
  color: black;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
`;

const PointsButton2 = styled.button`
  background-color: ${props => (props.disabled ? '#E0E0E0' : '#777777')};
  color: ${props => (props.disabled ? 'black' : 'white')};
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  border-radius: 4px;
`;

const MyPage = () => {
  const [status, setStatus] = useState('임산부');
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const yieldHistory = () => {
    navigate('/yieldhistory');
  }

  const pointCharge = () => {
    navigate('/pointcharge');
  }

  const [rewarded, setRewarded] = useState(false);

  const rewards = () => {
    alert('300p가 적립되었습니다!');
    setRewarded(true);
  };

  return (
    <ContainerCenter>
      <PageContainer>
        <Changemode />

        <CustomColumn width='80%' alignItems='flex-start' justifyContent='center' gap='0.5rem'>
          <CustomRow width='100%' alignItems='center' justifyContent='flex-start' gap='1rem'>
            <CustomFont color='black' font='1.3rem' fontWeight='bold'>내 양보점수</CustomFont>
          </CustomRow>
          <PointsContainer>
            <CustomRow wisth='20%' alignItems='center' justifyContent='space-between'>
              <CustomFont font='1rem' color='black'>지금까지</CustomFont>
              <CustomFont font='1rem' color='black' fontWeight='bold'>00점</CustomFont>
            </CustomRow>

            <PointsButton onClick={yieldHistory}>
              <CustomFont color='white' font='0.9rem' fontWeight='bold'>내역확인</CustomFont>
            </PointsButton>
          </PointsContainer>
        </CustomColumn>

        <CustomColumn width='80%' alignItems='flex-start' justifyContent='center' gap='0.5rem'>
          <CustomRow width='100%' alignItems='center' justifyContent='flex-start' gap='1rem'>
            <CustomFont color='black' font='1.3rem' fontWeight='bold'>보상받기</CustomFont>
          </CustomRow>
          <PointsContainer>
            <CustomRow width='70%' alignItems='center' justifyContent='center'>
              <CustomRow width='30%' alignItems='center' justifyContent='space-between'>
                <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.2rem'>
                  <CustomFont color='black' fomt='0.9rem' fontWeight='bold'>2024년</CustomFont>
                  <CustomFont color='black' fomt='0.9rem' fontWeight='bold'>07월07일</CustomFont>
                </CustomColumn>
              </CustomRow>

              <CustomRow width='70%' alignItems='center' justifyContent='center'>
                <CustomFont color='black' fomt='0.9rem'>임산부에게 자리양보 횟수 10회 달성</CustomFont>
              </CustomRow>
            </CustomRow>

            <PointsButton2 onClick={rewards} disabled={rewarded}>
              <CustomFont color='white' font='0.8rem' fontWeight='bold'>
                {rewarded ? '보상받음' : '보상받기'}
              </CustomFont>
            </PointsButton2>

          </PointsContainer>
        </CustomColumn>

        <MyPay />

      </PageContainer>
    </ContainerCenter>
  );
};

export default MyPage;
